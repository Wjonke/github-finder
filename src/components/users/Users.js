import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  state={
    users: [//the three users are hard coded into the array, later will be pulled from api//
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url:'https://github.com/mojombo'
      },
      {
        id: '2',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url:'https://github.com/mojombo'
      },
      {
        id: '3',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url:'https://github.com/mojombo'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>{/*this is where we set a variable to style this div down below the components*/}

     {/*this is where we will map through the ""users"" to create a new array of users and pass user as a prop to UserItem*/}
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
  }
}


/*this is where we create a variable to style the div above set with this className*/
const userStyle={
  display:'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap:'1rem'
}


export default Users
