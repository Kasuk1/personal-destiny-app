import styled from 'styled-components';

export const ReturnStyles = styled.aside`
  & a {
    color: ${(props) => props.theme.secondaryColor};

    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;
