import styled from 'styled-components';

interface IHeaderStyles {
  backgroundImageUrl: string;
}

export const HeaderStyles = styled.header<IHeaderStyles>`
  background: linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.15) 80%),
    url(${(props) => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 4rem;
  height: 45vh;
  min-height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: 37.5em) {
    padding: 0 2rem;
  }

  h1 {
    color: #fff;
    font-size: 2.5rem;

    & span {
      color: ${(props) => props.theme.primaryColor};
    }

    @media only screen and (min-width: 37.5em) {
      font-size: 4.5rem;
    }
  }
`;
