import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #fffaf2; */
  height: 450px;
  width: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #333333;

  > h1 {
    flex: 3;
    padding: 93px 165px;
    padding-top: 93px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const ContactInformation = styled.div`
  display: flex;
  width: 100%;
  flex: 10;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: auto;

  > a {
    text-decoration: none;
  }
`;
