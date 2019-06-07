import React, { Component } from 'react'

 class UserItem extends Component {
     //the above items are what we are setting the state to, this info will be pulled from the api//
//the constructor and super were taken out because it was not needed

   
  render() {

      //this.props.user comes from Users.js from the mapped users
    const { login, avatar_url, html_url } = this.props.user;
      //-------------------------------------------------------------------------------------//





    return (
      <div className ="card text-center">
        <img src={avatar_url} 
          alt="avatar" 
          className='round-img' 
          style={{width: '60px'}} 
        />
        <h3> {login}  </h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    )
  }
}

export default UserItem
