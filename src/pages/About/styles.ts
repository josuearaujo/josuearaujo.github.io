import styled from 'styled-components';

export const Container = styled.div`
  min-height: 544px;
  width: 100%;
`;

export const Content = styled.div`
  margin: 93px 165px;

  @media (max-width: 350px) {
    margin: 93px 75px;
  }

  color: #333333;

  > h1 {
    line-height: 29px;
    font-size: 24px;
  }
`;

export const AboutInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  > img {
    margin-top: 20px;
    height: 350px;
    width: 350px;
    border-radius: 10%;

    @media (max-width: 500px) {
      width: 200px;
      height: 200px;
    }
  }
`;

export const AboutText = styled.div`
  margin-top: 20px;

  > p {
    width: 400px;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    text-align: justify;

    @media (max-width: 500px) {
      width: 240px;
    }
  }

  > p + p {
    margin-top: 25px;
  }
`;
