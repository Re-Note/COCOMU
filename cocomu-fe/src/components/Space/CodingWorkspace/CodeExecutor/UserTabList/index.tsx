import { useState, useEffect } from 'react';
import { ActiveTab } from '@customTypes/space';
import { UserTabColor } from './UserTab/style';
import UserTab from './UserTab';
import S from './style';

const tabColors: UserTabColor[] = ['primary', 'secondary', 'analogous', 'triadic'];

interface UserTabListProps {
  tabs?: ActiveTab[];
  selectUser?: (tab: ActiveTab) => void;
}

export default function UserTabList({ tabs = [], selectUser }: UserTabListProps) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(tabs.length > 0 ? String(tabs[0].userId) : null);

  useEffect(() => {
    if (tabs.length > 0) {
      setSelectedUserId(String(tabs[0].tabId));
    }
  }, [tabs]);

  const handleUserClick = (tab) => {
    setSelectedUserId(String(tab.tabId));
    selectUser?.(tab);
  };

  return (
    <S.Container>
      {tabs.map((tab, index) => (
        <UserTab
          key={tab?.userId ?? tab?.userId ?? tab?.tabId ?? `tab-${index}`}
          color={tabColors[index % tabColors.length]}
          name={tab?.nickname}
          isSelected={String(tab?.tabId) === selectedUserId}
          onClick={() => handleUserClick(tab)}
        />
      ))}
    </S.Container>
  );
}
