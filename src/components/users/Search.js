import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
  state={
    text: ''
  }
  
  static propTypes ={
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,


  }
  //this onChange allows us to type into the field and what we type becomes the state of the field
  onChange= (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  //event.target.name allows us to re-use this function by making the key dynamic


  //this is where we add the logic for our helper function onSubmit passed into form
  onSubmit= (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.text)
    this.setState({text: ''});
  }


  render() {
    return (
      <div>
         <form className='form' onSubmit={this.onSubmit}> {/*onSubmit gives us functionality when the form is submitted */}

          {/* this is where we pass in the state and value into props */}
          <input type="text" value={this.state.text} onChange={this.onChange} name='text' placeholder='Search Users...'/>

          <input type="submit" value='Search' className="btn btn-dark btn-block"/>

        </form>

        {this.props.showClear && 
          <button 
            className="btn btn-light btn-block" 
            onClick={this.props.clearUsers}>
              Clear Users
          </button>
        }

          {/* this function makes it so we only show the button when the statement is true, IE there are users displayed. we are using a short circuit in this function && */}

      </div>
    )
  }
}

export default Search
