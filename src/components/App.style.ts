import styled from 'styled-components';

export const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
  width: 800px;
  height: 600px;
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  grid-template-rows: repeat(auto-fill, 50px);
`;
