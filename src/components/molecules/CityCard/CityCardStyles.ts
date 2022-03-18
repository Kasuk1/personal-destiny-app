import styled from 'styled-components';

interface ICityCard {
  backgroundImage: string;
}

export const CityCardStyles = styled.article<ICityCard>`
  background: linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.7) 100%),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 1.5rem 1.2rem;
  width: 20rem;
  height: 28rem;
  transition: all 0.1s ease-in;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    transform: translateY(-0.25rem);
  }

  .city-card {
    &--name {
      color: ${(props) => props.theme.primaryColor};
      font-size: 2.35rem;
      font-weight: 600;
      text-transform: capitalize;
    }

    &--caption {
      color: #fff;
      font-size: 1.35rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
