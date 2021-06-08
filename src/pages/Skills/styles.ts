import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fffaf2;
  height: 693px;
  width: 100%;
`;

export const Content = styled.div`
  /* padding-top: 93px; */
  height: 100%;
  width: 100%;
  color: #333333;
  display: flex;
  flex-direction: column;

  > h1 {
    flex: 1;
    padding: 93px 165px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const SkillsContent = styled.div`
  min-width: 300px;
  width: 60%;
  margin: auto auto;
  flex: 5;
  padding-top: 100px;
  /* align-self: center;
  justify-self: center; */
  /* height: 100%; */
  /* padding-top: 100px; */
  /* margin: auto;
  padding: auto; */
`;
