import React , {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import axios from 'axios';

class App extends Component {
  state= {
    users: [],
    loading: false
  }

async componentDidMount() {
  this.setState({ loading: true}) //sets up our loading spinner while we wait for data fetch

  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)//makes the data request and adds our id and secret for the api, check .env.local for keys

  this.setState({ users:res.data, loading:false })//when data is loaded, sets the loading prop back to false to remove the spinner and sets users to the newly fetched data! users is going to pass this down as props.
}

//searching users via the call from the api to search users
  searchUsers= async text => {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users:res.data.items, loading:false })
  }

  //clear users from state
  clearUsers= () => {
    this.setState({users:[], loading:false})
  }

  render() {
    return (

      <div className="App">
        <Navbar />      {/*this would normally have props defined here, however, the prop defaults are defined in Navbar.js. If I wanted to change the props                               I could override defaults by defining them inside <Navbar/>  here*/}

        <div className="container">
          <Search 
            searchUsers= {this.searchUsers} 
            clearUsers= {this.clearUsers} 
            showClear={this.state.users.length > 0 ? true : false}
          />{/*passing down props of searchUsers, clearUsers and showClear*/}
          
          <Users 
            loading={this.state.loading} 
            users={this.state.users} 
          /> {/*passing down props of loading and users*/}
        </div>
      </div>
    );
  };

};
export default App;





//Component Map
//App routes to Index.js
//index.js routes to index.html through 'root'

//App -> Users -> UserItem
//App -> Search
//App -> NavBar