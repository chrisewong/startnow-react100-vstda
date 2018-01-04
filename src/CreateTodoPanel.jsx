import React, { Component } from "react";
import PropTypes from "prop-types";

var topMargin = {'marginTop': '17.5px'}

class CreateTodoPanel extends Component {
    render() {
      return (
  
        <div className="col-md-4">
        <div className='panel panel-default'>
          <div className="panel-heading"><strong>Add new Todo</strong></div>
          <div className="panel-body">
            <form onSubmit={this.props.createTodoHandler}>
              <div className="form-group">
                <label>I want to...</label>
                <textarea 
                  value={this.props.pendingDescription}
                  onChange={this.props.handleTodoDescription} type="text" className="create-todo-text form-control"></textarea>
                <label style={topMargin}>Due date</label>
                <input type='date' value={this.props.pendingDueDate} onChange={this.props.handleTodoDueDate} className="form-control" />
                <label style={topMargin}>How much of a priority is this?</label>
                <select value={this.props.pendingPriority} onChange={this.props.handleTodoPriority}  className='create-todo-priority form-control'>
                    <option defaultValue hidden>Select a Priority</option>
                    <option value="panel-body bg-danger">High</option>
                    <option value="panel-body bg-warning">Medium</option>
                    <option value="panel-body bg-success">low</option>
                </select>
                </div>
               <div className='panel-footer'>
              <button type='submit' className='create-todo btn btn-success btn-block'>Add</button>
              </div>
              </form>
          </div>
          
        </div>
      </div>
    
    )
  }
}

CreateTodoPanel.PropTypes = {
  pendingDescription: PropTypes.string.isRequired,
  pendingDueDate: PropTypes.any.isRequired,
  pendingPriority: PropTypes.any.isRequired,
  createTodoHandler: PropTypes.func.isRequired,
  handleTodoDescription: PropTypes.func.isRequired,
  handleTodoDueDate: PropTypes.func.isRequired,
  handleTodoPriority: PropTypes.func.isRequired,
}

export default CreateTodoPanel;
