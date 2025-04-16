import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import useYorkie from '@hooks/utils/useYorkie';
import { Client } from '@stomp/stompjs';

import useGetFeedbackPage from '@hooks/space/useGetFeedbackPage';
import useExcution from '@hooks/space/useExcution';
import Button from '@components/_common/atoms/Button';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import { ActiveTab } from '@customTypes/space';
import Loading from '@pages/Loading';
import { STOMP_ENDPOINTS } from '@constants/api';
import { useToastStore } from '@stores/useToastStore';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';
import useFinishSpace from '@hooks/space/useFinishSpace';
import useSaveTabCode from '@hooks/space/useCodesave';

import S from './style';

interface OutletContextType {
  client: Client | null;
}

export default function SpaceFeedBack() {
  const { client } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  const { alert, error } = useToastStore();
  const { open } = useModalStore();

  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const [users, setUsers] = useState<ActiveTab[]>([]);
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>();
  const [selectTab, setSelectTab] = useState<ActiveTab | null>(null);
  const [finished, setFinished] = useState<boolean>(false);
  const [isExcution, setIsExcution] = useState<boolean>(false);

  const { excutionMutate } = useExcution();
  const { data, isLoading, refetch } = useGetFeedbackPage(codingSpaceId);
  const { finishSpaceMutate } = useFinishSpace();
  const { saveTabCodeMutate } = useSaveTabCode();

  const finish = useRef(false);
  const isSaving = useRef(false);

  const { content, handleLocalChange, getLatestContentByKey } = useYorkie(selectTab?.documentKey ?? '');

  const saveCode = async () => {
    if (!data || !data.activeTabs || isSaving.current || !finish.current) return;

    isSaving.current = true;

    try {
      const activeMyTabs = data.activeTabs.filter((tab) => tab.myTab === true);
      if (activeMyTabs.length === 0) {
        isSaving.current = false;
        return;
      }

      const selectedTab = activeMyTabs[0];
      setSelectTab(selectedTab);

      const latestContent = await getLatestContentByKey(selectedTab.documentKey);

      saveTabCodeMutate.mutate(
        {
          codingSpaceId,
          code: { code: latestContent },
        },
        {
          onSuccess: () => {
            finish.current = false;
            isSaving.current = false;

            open('waiting', {
              label: WAITING_INFO.finish.label,
              description: WAITING_INFO.finish.description,
              navigate: navigate(WAITING_INFO.finish.navigate(Number(codingSpaceId)), { replace: true }),
            });
          },
          onError: () => {
            finish.current = false;
            isSaving.current = false;
          },
        },
      );
    } catch (err) {
      finish.current = false;
      isSaving.current = false;
    }
  };

  useEffect(() => {
    if (!data?.activeTabs) return;

    setUsers(data.activeTabs || []);
    setSelectTab(data.activeTabs?.[0] || null);
  }, [data]);

  useEffect(() => {
    if (!data || !client?.connected || !selectTab) return;

    const tabSubscription = client.subscribe(STOMP_ENDPOINTS.TAB_SUBSCRIBE(selectTab.tabId), (msg) => {
      try {
        const object = JSON.parse(msg.body);

        if (
          [
            'SUCCESS',
            'UNKNOWN_ERROR',
            'RUNTIME_ERROR',
            'COMPILE_ERROR',
            'UNSUPPORTED_LANGUAGE',
            'TIMEOUT_ERROR',
          ].includes(object.type)
        ) {
          setOutput(object.data.output);
          setIsExcution(true);
        }
      } catch (err) {
        error('탭 구독 실패');
      }
    });

    const spaceSubscription = client.subscribe(STOMP_ENDPOINTS.SPACE_SUBSCRIBE(codingSpaceId), (msg) => {
      try {
        const object = JSON.parse(msg.body);

        if (['DELETE_TEST_CASE', 'ADD_TEST_CASE'].includes(object.type)) {
          if (object.type === 'DELETE_TEST_CASE') {
            refetch();
            alert('테스트 케이스가 삭제되었습니다.');
          }
          if (object.type === 'ADD_TEST_CASE') {
            refetch();
            alert('테스트 케이스가 추가되었습니다.');
          }
        }

        if (object.type === 'STUDY_FINISH' && !isSaving.current) {
          finish.current = true;
          setTimeout(() => {
            saveCode();
          }, 200);
        }
      } catch (err) {
        error('스페이스 구독 실패');
      }
    });

    return () => {
      tabSubscription.unsubscribe();
      spaceSubscription.unsubscribe();
    };
  }, [codingSpaceId, selectTab]);

  const handleCodeExecution = () => {
    if (!data || !selectTab) return;
    excutionMutate.mutate({
      codingSpaceTabId: selectTab.tabId,
      language: data.language?.languageName,
      code: content,
      input,
    });
  };

  const handleFinish = () => {
    setFinished(true);
    finishSpaceMutate.mutate(codingSpaceId);
  };

  if (isLoading || !data) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        name={data?.name}
        startTime={data?.startTime}
        isLeader={data?.hostMe}
        buttonLabel='피드백 종료'
        onClick={handleFinish}
        hostMe={data.hostMe}
      />

      <CodingWorkspace
        description={data?.description}
        workbookUrl={data?.workbookUrl}
        language={data?.language}
        activeTabs={users}
        onCodeChange={handleLocalChange}
        setInput={setInput}
        code={content}
        disabled={false}
        output={output}
        selectUser={setSelectTab}
        finish={finished}
        isExcution={isExcution}
        setIsExcution={setIsExcution}
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
        isEditable
      >
        <S.ButtonWrapper>
          <Button
            size='md'
            color='analogous'
            onClick={handleCodeExecution}
          >
            코드 실행
          </Button>
        </S.ButtonWrapper>
      </SpaceFooter>
    </S.Container>
  );
}
