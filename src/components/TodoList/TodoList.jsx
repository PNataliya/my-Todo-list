import React from 'react';
// import classNames from 'classnames';
import Todo from '../Todo/Todo';
import { ListTodo, TodoListItem } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ListTodo>
    {todos.map(({ id, text, completed }) => (
      <TodoListItem key={id}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </TodoListItem>
    ))}
  </ListTodo>
);

export default TodoList;
