import React from 'react';
import { connect } from 'react-redux';
import { getFollowers, getFollowings } from '../../actions/user_actions';
import FollowUserItem from './follows_user_item';

// this component should always be passed as a prop the user id it is attached to

class FollowsButton extends React.Component {
  componentDidMount () {
    this.props.getUsers(this.props.user.id);
  }

  render () {
    let users = this.props.users.map(user => {
      return <FollowUserItem user={user} />;
    });

    return (
      <div>
        <div>
          <h4>${this.props.type}</h4>
          <span>${users.length}</span>
        </div>
        <div className='follows-users-list'>
          { users }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let users = Object.values(state.entities.users);
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    users
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  let getUsers;
  if (ownProps.type === 'followers') {
    getUsers = getFollowers;
  } else {
    getUsers = getFollowings;
  }
  return {
    getUsers: (data) => dispatch(getUsers(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowsButton);
