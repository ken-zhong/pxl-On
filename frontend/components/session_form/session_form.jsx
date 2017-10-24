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

  }

  handleSubmit () {

  }

  render () {
    return (
      <div className='container login-grid'>
        <main className='container flex-col login-body'>
          <h3>Log in to pxl-On</h3>
          <form className='flex-col' action='index.html' method='post'>
            <label>Username
              <br />
              <input type='text' name=' value=' />
            </label>
            <label>Password
              <br />
              <input type='password' name=' value=' />
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
