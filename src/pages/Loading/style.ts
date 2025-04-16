import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const swing = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoadingImage = styled.img`
  animation: ${swing} 1s ease-in-out infinite;
`;

const S = {
  LoadingContainer,
  LoadingImage,
};

export default S;
