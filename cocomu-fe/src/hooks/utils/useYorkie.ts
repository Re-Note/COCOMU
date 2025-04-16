import { useEffect, useRef, useState } from 'react';
import * as yorkie from 'yorkie-js-sdk';
import { useToastStore } from '@stores/useToastStore';
import { YORKIE_URL, YORKIE_API_KEY } from '@constants/api';

export default function useYorkie(documentKey: string) {
  const [content, setContent] = useState('');

  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clientRef = useRef<yorkie.Client | null>(null);
  const docRef = useRef<yorkie.Document<{ content: yorkie.Text }> | null>(null);
  const { error } = useToastStore();

  useEffect(() => {
    async function initYorkie() {
      try {
        if (!documentKey) return;

        const client = new yorkie.Client(YORKIE_URL, {
          apiKey: YORKIE_API_KEY,
          syncLoopDuration: 0,
        });

        await client.activate();
        clientRef.current = client;

        const doc = new yorkie.Document<{ content: yorkie.Text }>(documentKey);
        await client.attach(doc);

        docRef.current = doc;

        const initialContent = doc.getRoot().content?.toString() || '';
        setContent(initialContent);

        doc.subscribe((event) => {
          if (event.type === 'remote-change') {
            const updatedContent = doc.getRoot().content?.toString() || '';
            setContent(updatedContent);
          }
        });
      } catch (err) {
        error('Yorkie 연결 실패');
      }
    }

    initYorkie();

    return () => {
      clientRef.current?.deactivate().catch(() => {});
    };
  }, [documentKey, error, setContent]);

  const updateContent = (newText: string) => {
    if (!docRef.current) {
      error('문서가 아직 초기화되지 않았습니다.');
      return;
    }

    try {
      docRef.current.update((root) => {
        if (!root.content) {
          Object.assign(root, { content: new yorkie.Text() });
        }

        const oldText = root.content?.toString() || '';
        if (newText !== oldText) {
          root.content.edit(0, oldText.length, newText);
        }
      });
    } catch (err) {
      error('Yorkie 업데이트 실패');
    }
  };

  const handleLocalChange = async (newText: string) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(async () => {
      updateContent(newText);

      const latestContent = docRef.current?.getRoot().content?.toString() || '';

      setContent(latestContent);
    }, 200);
  };

  const getLatestContentByKey = async (key: string) => {
    const tempClient = new yorkie.Client(YORKIE_URL, { apiKey: YORKIE_API_KEY });

    try {
      await tempClient.activate();
      const tempDoc = new yorkie.Document<{ content: yorkie.Text }>(key);
      await tempClient.attach(tempDoc);

      await tempClient.sync();

      return tempDoc.getRoot().content?.toString() || '';
    } catch (err) {
      error(`문서(${key})의 최신 내용을 가져오는 데 실패했습니다.`);
      return '';
    } finally {
      await tempClient.deactivate();
    }
  };

  return { content, handleLocalChange, getLatestContentByKey };
}
