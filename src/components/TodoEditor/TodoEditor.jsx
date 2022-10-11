import React, { Component } from 'react';
import {
  TodoEditorForm,
  TodoEditorTextarea,
  TodoEditorButton,
} from './TodoEditor.styled';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <TodoEditorForm onSubmit={this.handleSubmit}>
        <TodoEditorTextarea
          value={this.state.message}
          onChange={this.handleChange}
        ></TodoEditorTextarea>
        <TodoEditorButton type="submit">Сохранить</TodoEditorButton>
      </TodoEditorForm>
    );
  }
}

export default TodoEditor;
