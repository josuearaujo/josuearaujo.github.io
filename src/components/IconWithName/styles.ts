import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  height: 100px;

  > span {
    color: #333333;
    font-weight: 600;
    font-size: 18px;
  }
`;
