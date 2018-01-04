import React, { Component } from "react";
import PropTypes from "prop-types";
import Welcome from "./Welcome";
import TodoList from "./TodoList";

class ViewTodoPanel extends Component {
  render() {
    return (
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">
            <strong>View Todos</strong>
          </div>
          
            <Welcome hideWelcome={this.props.hideWelcome} />

            <TodoList
              todos={this.props.todos}
              deleteTodoAt={this.props.deleteTodoAt}
              hideTodo={this.props.hideTodo}
              setPriorityAt={this.props.setPriorityAt}
              setDateAt={this.props.setDateAt}
              setDescriptionAt={this.props.setDescriptionAt}
              toggleEditingAt={this.props.toggleEditingAt}
              toggleCompletionAt={this.props.toggleCompletionAt}
            />
          </div>
        </div>
      
    );
    }
}

export default ViewTodoPanel;


