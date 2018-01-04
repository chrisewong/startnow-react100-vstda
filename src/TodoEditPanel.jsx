import React from "react";
import PropTypes from "prop-types";

var topMargin = {"marginTop": "17.5px"}

const TodoEditPanel = props => {
    if (props.editEnabled) {
    return (
   
    <li className={props.priority}>
        <label>Description</label>
        <textarea onChange={props.handleDescriptionEdits} type='create-todo-text' value={props.description} className='form-control update-todo-text'/>
        
        <div className='row'>
            <div className='col-md-6'>

                <label>Due Date</label>
                <input type='date' onChange={props.handleDateEdits} value={props.dueDate} className='form-control update-todo-date'/>
            </div>
            <div className='col-md-6'>
                <label>Priority</label>
                <select onChange={props.handlePriorityEdits} className='form-control create-todo-priority' type='update-todo-text' value={props.priority} >
                <option defaultValue hidden>Select a Priority</option>
                <option value="panel-body bg-danger">High</option>
                <option value="panel-body bg-warning">Medium</option>
            <option value="panel-body bg-success">Low</option>
                </select>
            </div>
        </div>
        <br/>
        <div className='text-right form-group' style={topMargin}>
            <button className='btn btn-success update-todo' onClick={props.closeEditForm}>Save</button>
        </div>
    </li>
    )
}
return <span></span>
}
export default TodoEditPanel;

