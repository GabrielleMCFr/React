import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null}
  }

  loadUserData() {
    this.setState({ userData: null })
    this.fetchID = fetchUserData(this.props.username, (userData) => {
  this.setState({ userData });
});
  }

  render() {
    const isLoading = this.state.userData === null ? true : false;
    let bio;
    let friends;
    let name;
    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
      name = 'Loading...';
      bio = 'Unknown';
      friends = [];
    }
    else {
      name = this.state.userData.name;
      bio = this.state.userData.bio;
      friends = this.state.userData.friends;
    }

    return (
      <div className={className}>
        <div className="profile-picture">{!isLoading && (<img src={this.state.userData.profilePictureUrl} alt={name}/>)}</div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }

  // fetch the data when we click on a profile
  componentDidMount() {
    this.loadUserData();
  }

  // cancel fetch when leaving a profile
  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }

  // fetch the new data when going from a profile to another one
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }
}