import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
  return (
    <div className={this.props.hideWelcome} style={{marginBottom: '0'}}>
      <strong>Welcome to Very Simple Todo App!</strong>
      <br />
      <br />
      <p>Get started now by adding a new todo on the left</p>
    </div>
  )
}
}
  export default Welcome;
