import styled from 'styled-components';

export const ReturnStyles = styled.aside`
  & a {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1.3rem;
    transition: all 0.2s;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;
