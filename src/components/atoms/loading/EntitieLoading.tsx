import styled from 'styled-components';

const EntitieLoadingStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.15rem;
  width: 25rem;
  height: 9rem;
  animation: opacityLoading 1s ease-in-out infinite alternate;
`;
export const EntitieLoading = () => <EntitieLoadingStyles />;
