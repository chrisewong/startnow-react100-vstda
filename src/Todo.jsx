import React from "react";
import PropTypes from "prop-types";
import TodoEditPanel from "./TodoEditPanel";


const Todo = props => {
    var tag1;
    var tag2;
    if (props.complete) {
      tag1 = <del>{"update-todo-text" + props.description}</del>;
      tag2 = <del>{"UPDATED" + props.dueDate}</del>;
    } else {
      tag1 = <strong>{"update-todo-text" + props.description}</strong>;
      tag2 = <strong>{"UPDATED" + props.dueDate}</strong>;
    }
  
    return (
      <div>
        <TodoEditPanel
          complete={props.complete}
          dueDate={props.dueDate}
          priority={props.priority}
          description={props.description}
          editEnabled={props.editEnabled}
          handleDescriptionEdits={event => props.setDescription(event.target.value)}
          handleDateEdits={event => props.setDate(event.target.value)}
          handlePriorityEdits={event => props.setPriority(event.target.value)}
          closeEditForm={props.handleEditing}
        />
  
        <li key={props.id} className={"success " + props.priority + props.hideTodo}>
          <label>
            <input
              checked={props.isCompleted}
              onChange={props.handleCompletion}
              type="checkbox"
            />
            {tag1}
          </label>
          <div className="pull-right">
            {tag2}
            <a id="edit-link" href="#" className="edit-todo" onClick={props.handleEditing} type='update-todo-text'>
            <i className="glyphicon glyphicon-edit" />
          </a>
          <a id="delete-link" href="#" onClick={props.handleDelete}>
            <i className="glyphicon glyphicon-trash delete-todo" />
          </a>
        </div>
      </li>
    </div>
  );
};

export default Todo;
