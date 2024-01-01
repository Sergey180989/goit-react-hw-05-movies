import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  width: 154px;
  max-height: 400px;
  cursor: pointer;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
