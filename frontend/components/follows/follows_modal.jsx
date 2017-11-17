import React from 'react';
import { connect } from 'react-redux';
import { getAllFollows } from '../../actions/user_actions';
import FollowUserItem from './follows_user_item';

// this component should always be passed as a prop the user id it is attached to

class FollowsModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = { userArray: [] };
  }

  componentDidMount () {
    this.props.getAllFollows(this.props.user.id).then((users) => {
      let userArray = this.props.users.map((user, idx) => {
        return <FollowUserItem user={user} key={idx} closeModal={this.props.closeModal} />;
      });
      this.setState({userArray});
    });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      this.props.getAllFollows(this.props.user.id);
    };
  }

  render () {
    // let users = this.props.users.map((user, idx) => {
    //   return <FollowUserItem user={user} key={idx} closeModal={this.props.closeModal} />;
    // });
    return (
      <div className='follow-users-list'>
        { this.state.userArray }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let users = ownProps.user[ownProps.type].map(username => {
    return state.entities.users[username];
  });
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    users
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllFollows: (data) => dispatch(getAllFollows(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowsModal);
