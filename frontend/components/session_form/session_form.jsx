import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render () {
    return (
      <div className='container login-grid'>
        <main className='container flex-col login-body'>
          <h3>Log in to pxl-On</h3>
          <form onSubmit={this.handleSubmit} className='flex-col' action='index.html' method='post'>
            <label>Username
              <br />
              <input type='text' value={this.state.username} onChange={this.handleInput('username')} />
            </label>
            <label>Password
              <br />
              <input type='password' value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <button type='button' name='button' className='session-submit-btn'>Log in</button>
          </form>
          <div className='login-container-footer'>
            <p>Don't have an account? <a href='#'>Sign up</a></p>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(SessionForm);
