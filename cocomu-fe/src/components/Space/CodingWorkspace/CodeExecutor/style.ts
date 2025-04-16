import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sectionCommonStyle = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  user-select: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ActiveSection = styled.div<{ height?: number }>`
  ${sectionCommonStyle};
  width: 100%;
  height: ${({ height }) => `${height}%` || '70%'};
`;

const DisabledSection = styled.div<{ height?: number }>`
  ${sectionCommonStyle};
  align-items: center;
  justify-content: center;
  height: ${({ height }) => `${height}%` || '70%'};
`;

const UserCount = styled.div`
  ${({ theme }) => theme.font.heading[700]};
  color: ${({ theme }) => theme.color.gray[800]};
  margin-top: 5rem;
`;

const S = { Container, ActiveSection, DisabledSection, UserCount };

export default S;
