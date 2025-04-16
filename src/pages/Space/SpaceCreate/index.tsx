import SpaceForm from '@components/Space/SpaceForm';
import { CreateSpaceData, SpaceFormData, TestCaseIO } from '@customTypes/space';
import useCreateSpace from '@hooks/space/useCreateSpace';
import { convertTimeToMinutes } from '@utils/convertTime';
import { useParams } from 'react-router-dom';

export default function SpaceCreate() {
  const { studyId } = useParams<{ studyId: string }>();
  const { createSpaceMutate } = useCreateSpace(Number(studyId));

  const handleSubmit = (spaceFormData: SpaceFormData, testcases: TestCaseIO[]) => {
    const createSpaceData: CreateSpaceData = {
      studyId: Number(studyId),
      totalUserCount: spaceFormData.totalUserCount[0],
      timerTime: convertTimeToMinutes(spaceFormData.timerTime),
      workbookUrl: spaceFormData.workbookUrl,
      name: spaceFormData.name,
      languageId: spaceFormData.languageId[0],
      description: spaceFormData.description,
      testcases,
    };

    createSpaceMutate.mutate(createSpaceData);
  };

  return (
    <SpaceForm
      studyId={studyId}
      onSubmit={handleSubmit}
    />
  );
}
