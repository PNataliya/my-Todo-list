import styled from '@emotion/styled';

export const TodoListCheckbox = styled.input`
  cursor: pointer;
  width: 30px;
  height: 30px;
  height: 40px;
  padding: 0 10px 0 10px;
  border: 1px solid #858585;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  &:focus {
    border-color: #0084ff;
  }
  &::placeholder {
    font-size: 12px;
  }
`;

export const TodoListText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;
  font-size: 14px;
  outline: none;
`;
export const TodoListBtn = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #3f51b5;
  color: #fff;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
