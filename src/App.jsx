import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateTodoPanel from "./CreateTodoPanel";
import ViewTodoPanel from "./ViewTodoPanel";


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hideTodo: 'hidden',
      hideWelcome: 'alert alert-info',
      pendingDescription: '',
      pendingPriority: 'panel-body bg-secondary',
      pendingDueDate: '',
      pendingEditEnabled: false,
      pendingComplete: false,
      todos : []
    };
    this.togglePropertyAt = this.togglePropertyAt.bind(this);
    this.toggleCompletionAt = this.toggleCompletionAt.bind(this);
    this.toggleEditingAt = this.toggleEditingAt.bind(this);
    this.setDescriptionAt = this.setDescriptionAt.bind(this);
    this.setDateAt = this.setDateAt.bind(this);
    this.setPriorityAt = this.setPriorityAt.bind(this);
    this.deleteTodoAt = this.deleteTodoAt.bind(this);
    this.handleTodoDescription = this.handleTodoDescription.bind(this);
    this.handleTodoPriority = this.handleTodoPriority.bind(this);
    this.handleTodoDueDate = this.handleTodoDueDate.bind(this);
    this.createTodoHandler = this.createTodoHandler.bind(this);
  }
    togglePropertyAt(property, id) {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if(id === todo.id) {
            return {
              ...todo,
              [property]: !todo[property]
            };
          }
          return todo;
        })
      });
    }
    toggleCompletionAt(id) {
      this.togglePropertyAt("complete", id);
    }
    toggleEditingAt(id) {
      this.togglePropertyAt("editEnabled", id);
    }
    setDescriptionAt(description, id) {
      this.setState({
        todo: this.state.todos.map((todo) => {
          if(id === todo.id) {
            return {
              ...todo,
              description
            };
          }
          return todo;
        })
      });
    }
    setDateAt(dueDate, id) {
      this.setState({
        todo: this.state.todos.map((todo) => {
          if(id === todo.id) {
            return {
              ...todo,
              dueDate
            };
          }
          return todo;
        })
      });
    }
    setPriorityAt(priority, id) {
      this.setState({
        todo: this.state.todos.map((todo) => {
          if(id === todo.id) {
            return {
              ...todo,
              priority
            };
          }
          return todo;
        })
      });
    }
    deleteTodoAt(id) {
      this.setState({
        todos: this.state.todos.filter(todo => id !== todo.id)
      });
    }
  
    handleTodoDescription(event) {
      this.setState({
        pendingDescription: event.target.value
      });
    }
  
    handleTodoPriority(event) {
      this.setState({
        pendingPriority: event.target.value
      });
    }
  
    handleTodoDueDate(event) {
      this.setState({
        pendingDueDate: event.target.value
      });
    }
  
    createTodoHandler(event) {
      event.preventDefault();
      this.setState({
        hideTodo: "",
        hideWelcome: "alert alert-info hidden",
        todos: [
          {
            description: this.state.pendingDescription,
            priority: this.state.pendingPriority,
            dueDate: this.state.pendingDueDate,
            id: Date.now(),
            editEnabled: this.state.pendingEditEnabled,
            complete: this.state.pendingComplete
          },
          ...this.state.todos
        ],
        pendingDescription: "",
        pendingPriority: "alert alert-secondary",
        pendingDueDate: "",
        pendingEditEnabled: false,
        pendingComplete: false
      });
    }
  
  render() {
    
    return (
      <div className='container app'>
      <div className='header'>
        <h1> 
        <u>Very Simple ToDo App(VSTDA)</u>
        </h1>
        <h3 className='white'>Track all of the things</h3>
      </div>

      <CreateTodoPanel
      createTodoHandler={this.createTodoHandler}
      handleTodoDescription={this.handleTodoDescription}
      handleTodoPriority={this.handleTodoPriority}
      handleTodoDueDate={this.handleTodoDueDate}
      pendingDescription={this.state.pendingDescription}
      pendingPriority={this.state.pendingPriority}
      pendingDueDate={this.state.pendingDueDate}
    />

    <ViewTodoPanel
      setPriorityAt={this.setPriorityAt}
      setDateAt={this.setDateAt}
      setDescriptionAt={this.setDescriptionAt}
      todos={this.state.todos}
      deleteTodoAt={this.deleteTodoAt}
      hideTodo={this.state.hideTodo}
      hideWelcome={this.state.hideWelcome}
      toggleCompletionAt={this.toggleCompletionAt}
      toggleEditingAt={this.toggleEditingAt}
    />

      
      </div>
    );
  }
}

export default App;
