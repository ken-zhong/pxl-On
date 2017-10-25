import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      typeUsername: null,
      typePassword: null,
      typeSubmit: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  componentWillReceiveProps (nextProps) {
    if (nextProps.formType !== this.props.formType) {
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

  demoLogin (e) {
    // special thanks to Hanhee Song for helping me with the Typed animation!
    // https://github.com/hanhee-song
    this.setState({username: '', password: ''});
    const guest = {username: 'demo_user', password: 'starwars' }
    const username = {
      strings: [guest.username],
      typeSpeed: 50
    };
    const password = {
      strings: [guest.password],
      typeSpeed: 40
    };

    this.setState({
      typeUsername: setTimeout(() => {
        new Typed('.session-username', username);
      }, 50),
      typePassword: setTimeout(() => {
        new Typed('.session-password', password);
      }, 800),
      typeSubmit: setTimeout(() => {
        this.props.login(guest);
      }, 1700)
    });
  }

  componentWillUnmount () {

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
      <div>
        <div className='container login-grid'>
          <main className='container flex-col login-body'>
            <h3>{headerText}</h3>
            { this.errors() }
            <form onSubmit={this.handleSubmit} className='flex-col' action='index.html' method='post'>
              <label>Username
                <br />
                <input className='session-username' type='text' value={this.state.username} onChange={this.handleInput('username')} />
              </label>
              <label>Password
                <br />
                <input className='session-password' type='password' value={this.state.password} onChange={this.handleInput('password')} />
              </label>
              <button>{submitText}</button>
              <a onClick={this.demoLogin} className='demo-login-btn'>Demo log in</a>
            </form>
            { footerComponent }
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
