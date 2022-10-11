import React from 'react';
import { TodoListCheckbox, TodoListText, TodoListBtn } from './Todo.styled';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <TodoListCheckbox
      type="checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <TodoListText>{text}</TodoListText>
    <TodoListBtn type="button" onClick={onDelete}>
      Удалить
    </TodoListBtn>
  </>
);

export default Todo;
