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
    console.log(this.props);
    this.props.processForm(this.state);
  }

  render () {
    let headerText, submitText, footerComponent;
    if (this.props.formType === '/login') {
      headerText = 'Log in to pxl-On';
      submitText = 'Log in';
      footerComponent = (
        <div className='login-container-footer'>
          <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </div>
      );
    } else {
      headerText = 'Sign up for pxl-On';
      submitText = 'Sign up';
      footerComponent = (
        <div className='login-container-footer'>
          <p>Already have an account? <Link to='/login'>Log in</Link></p>
        </div>
      );
    }

    return (
      <div className='container login-grid'>
        <main className='container flex-col login-body'>
          <h3>{headerText}</h3>
          <form onSubmit={this.handleSubmit} className='flex-col' action='index.html' method='post'>
            <label>Username
              <br />
              <input type='text' value={this.state.username} onChange={this.handleInput('username')} />
            </label>
            <label>Password
              <br />
              <input type='password' value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <button className='session-submit-btn'>{submitText}</button>
          </form>
          { footerComponent }
        </main>
      </div>
    );
  }
}

export default withRouter(SessionForm);
