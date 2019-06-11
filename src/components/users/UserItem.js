import React from 'react'
import PropTypes from 'prop-types'
//since we have a proptype being used (user) we should by convention set a proptype checker below
//no state so we use a functional component



 const UserItem = ({user: {login, avatar_url, html_url}} ) => {
  //props is passed in here ^^^^ to give the rest of the function access to them. props will equal the info in ()
  //user comes from Users.js from the mapped users, we are specifying it to = the props in {}

  return (

    <div className ="card text-center">

      <img src={avatar_url} 
        alt="avatar" 
        className='round-img' 
        style={{width: '60px'}} 
      />

      <h3> {login} </h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1"> More </a>
      </div>

    </div>
  )
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
