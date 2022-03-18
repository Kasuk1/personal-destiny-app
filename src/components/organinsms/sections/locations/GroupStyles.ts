import styled from 'styled-components';

export const GroupStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  .group {
    &--title {
      font-size: 2.4rem;
      font-weight: 400;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    &--empty {
      color: rgba(0, 0, 0, 0.35);
      font-size: 1.4rem;
      padding: 2rem 0;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
