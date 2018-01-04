import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./todo";

const TodoList = props => {
  return (
    <ul
    id="TodoList"
    style={{ listStyle: "none", paddingLeft: 0, marginBottom: 0 }}
  >
    {props.todos.map((todo, id) => (
      <Todo
        key={todo.id}
        description={todo.description}
        dueDate={todo.dueDate}
        priority={todo.priority}
        editEnabled={todo.editEnabled}
        complete={todo.complete}
        hideTodo={props.hideTodo}
        handleDelete={() => props.deleteTodoAt(todo.id)}
        handleCompletion={() => props.toggleCompletionAt(todo.id)}
        handleEditing={() => props.toggleEditingAt(todo.id)}
        setPriority={select => props.setPriorityAt(select, todo.id)}
        setDate={value => props.setDateAt(value, todo.id)}
        setDescription={text => props.setDescriptionAt(text, todo.id)}
        />
      ))}
    </ul>
  );
};

TodoList.PropTypes = {
   todos: PropTypes.array.isRequired
};
export default TodoList;
