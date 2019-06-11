import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'



const Users = ({users, loading}) => {
  if(loading) {
    return <Spinner/>
  }else{
    return (
      <div style={userStyle}>{/*this is where we set a variable to style this div down below the render*/}

     {/*this is where we will map through the ""users"" to create a new array of users and pass users as a prop to UserItem - props.user is being passed down from App.js from the api request*/}
        {users.map(user => (<UserItem key={user.id} user={user}/>))
        }
      </div>
    );
  }
}


/*this is where we create a variable to style the div above set with this 'style'*/
const userStyle={
  display:'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap:'1rem'
}

Users.propTypes= {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
export default Users
