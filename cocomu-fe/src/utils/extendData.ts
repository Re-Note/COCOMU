export const extendData = <T extends { id: number }>(data: T[], targetCount: number): T[] => {
  const mockingData: T[] = [...data];
  const needCount = targetCount - data.length;

  if (needCount < 0) {
    return mockingData;
  }

  let lastId = Math.max(...mockingData.map((item) => item.id));

  for (let i = 1; i < needCount; i += 1) {
    const template = mockingData[i % mockingData.length];

    lastId += 1;
    const newItem = {
      ...template,
      id: lastId,
      nickname: `유저${lastId}`,
      role: 'MEMBER',
      joinedSpaceCount: lastId + 2,
    };

    mockingData.push(newItem);
  }

  return mockingData;
};
