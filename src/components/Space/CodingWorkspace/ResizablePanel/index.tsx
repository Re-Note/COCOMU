import S from './style';

interface ResizablePanelProps {
  direction: 'x' | 'y';
  onMouseDown: (e: React.MouseEvent) => void;
}

export default function ResizablePanel({ direction, onMouseDown }: ResizablePanelProps) {
  return (
    <S.ResizablePanel direction={direction}>
      <S.ResizeButton
        onMouseDown={onMouseDown}
        direction={direction}
      />
    </S.ResizablePanel>
  );
}
