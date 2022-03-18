import styled from 'styled-components';

export const EntitieStyles = styled.article`
  background-color: #fff;
  border-radius: 0.15rem;
  cursor: pointer;
  padding: 0.8rem 1rem;
  width: 25rem;
  min-width: 15rem;
  transition: all 0.15s ease-in;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  &:hover {
    transform: translateY(-0.25rem);
  }

  .entitie {
    &--name {
      color: ${(props) => props.theme.primaryColor};
      font-size: 1.8rem;
      font-weight: 600;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  & p {
    align-self: flex-start;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 0.1rem;
    margin-top: auto;
    padding: 0.2rem 0.35rem;
    padding-right: 0.8rem;

    & .highlighted {
      color: ${(props) => props.theme.secondaryColor};
      font-weight: 800;
    }
  }
`;
