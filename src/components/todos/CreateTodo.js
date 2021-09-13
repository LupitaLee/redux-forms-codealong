import React, { Component } from 'react';

import {connect}from 'react-redux'

class CreateTodo extends Component {


  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  handleChange=(e)=>{

  this.setState({
    text: e.target.value
  })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_TODO", payload: this.state });
  };

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          placeholder="add todo"
          onChange={this.handleChange}
          value={this.state.text} />
          <input type="submit"  />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect()(CreateTodo);
