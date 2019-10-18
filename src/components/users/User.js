import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

export class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.params.login)
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  }

  render() {
//destructuring the specific props from the api call I will be using, Checked what the call would return first and picked the ones I wanted to use.
    const {
      name, 
      avatar_url, 
      location, 
      bio, 
      blog, 
      login, 
      html_url,  
      followers, 
      following, 
      public_repos, 
      public_gists, 
      hireable
    } = this.props.user;
/////////////////////////////////////////////////////////////////////////////

//destructure Loading from props and set up conditional render of the spinner
    const {loading} = this.props;

    if(loading) return Spinner;
/////////////////////////////////////////////////////////////////////////////

    return (
      <div>

        <>
          <Link to='/' className="btn btn-dark btn-sm my-1"> Back to Search </Link>

          Hireable: {' '}
          {hireable ? (
            <i className='fas fa-check text-success' /> 
            ) : (
            <i className='fas fa-times-circle text-danger'/> 
          )}


          
        </> 

        

      </div>
    )
  }
}

export default User
