import styled from '@emotion/styled';

export const TodoEditorForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid $black;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const TodoEditorTextarea = styled.textarea`
  $line-height: 16px;

  height: $line-height * 3 + 24px;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: $line-height;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`;

export const TodoEditorButton = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  width: 100%;
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
