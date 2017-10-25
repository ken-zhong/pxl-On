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
    this.errors = this.errors.bind(this);
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

  componentWillReceiveProps () {
    if (this.props.errors.session.length > 0) {
      this.props.clearErrors();
    }
  }

  errors () {
    let errors;
    if (this.props.errors.session.length > 0) {
      errors = <span className='session-errors'>
        { this.props.errors.session.map((e, idx) => <div key={idx}>{e}</div>) }
      </span>;
    } else {
      errors = <span />;
    }
    return errors;
  }

  render () {
    let headerText, submitText, footerComponent, errors;
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
      <div>
        <div className='container login-grid'>
          <main className='container flex-col login-body'>
            <h3>{headerText}</h3>
            { this.errors() }
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

      </div>
    );
  }
}

export default withRouter(SessionForm);
