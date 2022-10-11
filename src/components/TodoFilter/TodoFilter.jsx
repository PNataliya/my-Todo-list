import React from 'react';
import {
  TodoFilter,
  TodoFilterLabel,
  TodoFilterInput,
} from './TodoFilter.styled';

const FilterTodo = ({ value, onChange }) => (
  <TodoFilter>
    <TodoFilterLabel>Фильтр по содержимому</TodoFilterLabel>
    <TodoFilterInput type="text" value={value} onChange={onChange} />
  </TodoFilter>
);

export default FilterTodo;
