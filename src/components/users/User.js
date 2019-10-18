import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  }

  render() {

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

    // const {loading} = this.props;

    // if(loading) return Spinner 


    return (

        <>
          <h1>{login}</h1>
          <h1>{avatar_url}</h1>
          <h1>{public_repos}</h1>
 
           Hireable: {' '}

           {hireable ? (
             <i className='fas fa-check text-success' /> 
             ) : (
             <i className='fas fa-times-circle text-danger'/> 
           )}
           
          <Link to='/' className="btn btn-dark btn-sm my-1"> Back to Search </Link>

        </> 

        

      
    )
  }
}

export default User
