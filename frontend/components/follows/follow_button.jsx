import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/user_actions';

// this component should always be passed as a prop the user id it is attached to
// props: user, followUser(), unfollowUser()

class FollowButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isHovering: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    if (!this.props.loggedIn) {
      this.props.history.push('/login');
    } else {
      let request = {
        followerId: this.props.currentUser.id,
        followeeId: this.props.user.id
      };
      if (this.props.user.isFollowing) {
        this.props.unfollowUser(request);
      } else {
        this.props.followUser(request);
      }
    }
  }

  render () {
    let btnSmall = !this.props.profile;
    let followBtn = <span className={btnSmall ? 'follow-btn' : 'follow-btn follow-btn-profile'}>Follow</span>;
    let followingBtn = <span className={btnSmall ? 'following-btn' : 'following-btn following-btn-profile'}>Following</span>;
    let unFollowBtn = <span className={btnSmall ? 'unfollow-btn' : 'unfollow-btn following-btn-profile'}>Unfollow</span>;

    if (this.props.user.isFollowing) {
      return (
        <div onMouseEnter={() => this.setState({isHovering: true})}
          onMouseLeave={() => this.setState({isHovering: false})}
          onClick={this.handleClick}>
          {this.state.isHovering ? unFollowBtn : followingBtn}
        </div>
      );
    } else {
      return (
        <div onClick={this.handleClick}>{followBtn}</div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    followUser: (req) => dispatch(followUser(req)),
    unfollowUser: (req) => dispatch(unfollowUser(req))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowButton));
