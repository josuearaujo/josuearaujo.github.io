import styled from 'styled-components';

import introBackgroundImg from '../../assets/morro-do-careca-natal.jpg';

export const Container = styled.div`
  display: flex;
`;

export const BackgroundImage = styled.div`
  height: 100vh;
  min-height: 600px;
  width: 100%;

  color: #333333;

  background-image: linear-gradient(
      rgba(245, 214, 171, 0.2),
      rgba(245, 214, 171, 0.2)
    ),
    url(${introBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
`;

export const MainText = styled.div`
  min-height: 78px;
  margin-left: 165px;
  margin-top: 20%;

  > p {
    font-weight: 400;
    font-size: 64px;
    line-height: 78px;
  }
`;

export const InfoText = styled.div`
  margin-left: 165px;
  margin-top: 40px;

  > p {
    font-size: 24px;
    line-height: 29px;
  }
`;
