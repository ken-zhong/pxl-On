import React from 'react';

class PhotoShow extends React.Component{
  componentDidMount () {

  }

  componentWillReceiveProps () {

  }

  closePhoto () {
    this.props.history.goBack();
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <h1>UNDER CONSTRUCTION - PHOTO SHOW PAGE</h1>
        <button onClick={this.closePhoto.bind(this)}>go back</button>
      </div>
    );
  }
}

export default PhotoShow;
