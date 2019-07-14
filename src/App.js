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

  console.log(res.data); //logging the new data to check what is returned
}



  render() {
   
    return (
      <div className="App">
        <Navbar />                 {/*this would normally have props defined here, however, the prop defaults are defined in Navbar.js. If I wanted to change the props                               I could override defaults by defining them inside <Navbar/>  here*/}

        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} /> {/*passing in props of loading and users*/}
        </div>
        
      </div>
    );
  };y

};
export default App;


//Component Map
//App routes to Index.js
//index.js routes to index.html through 'root'

//App -> Users -> UserItem
//App -> NavBar