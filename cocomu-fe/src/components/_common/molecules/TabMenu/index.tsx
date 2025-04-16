import S from './style';

interface TabMenuProps<T extends readonly string[]> {
  tabs: T;
  selectedTab: string;
  onTabChange?: (menu: T[number]) => void;
}

export default function TabMenu<T extends readonly string[]>({ tabs, selectedTab, onTabChange }: TabMenuProps<T>) {
  return (
    <S.TabMenuContainer>
      {tabs.map((menu) => (
        <S.TabElement
          key={menu}
          onClick={() => onTabChange?.(menu)}
          isSelected={selectedTab === menu}
        >
          {menu}
        </S.TabElement>
      ))}
    </S.TabMenuContainer>
  );
}
