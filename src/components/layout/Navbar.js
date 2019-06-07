import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Navbar extends Component {

  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }
  //the prop defaults above set what will render unless changed in app.js//

  static propTypes ={
    title: PropTypes.string.isRequired,
    icon:  PropTypes.string.isRequired,
  }//this is the default proptypes that will be used for this component to make sure the correct info is passed in//
  render() {
    return (
      <nav className='navbar bg-primary'>
        <div>
          <i className= { this.props.icon }/> { this.props.title }
        </div>
      </nav>
    )
  }
}

export default Navbar
