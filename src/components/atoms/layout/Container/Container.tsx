import styled from 'styled-components';

const ContainerStyles = styled.div`
  max-width: 192rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media only screen and (min-width: 37.5em) {
    padding: 0 2.5rem;
  }
`;

export const Container: React.FC = ({ children }) => (
  <ContainerStyles>{children}</ContainerStyles>
);
