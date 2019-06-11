import React , {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
 import axios from 'axios';

class App extends Component {
  state= {
    users: [],
    loading: false
  }

async componentDidMount() {
  this.setState({ loading: true}) //sets up our loading spinner
  const res = await axios.get('https://api.github.com/users')//makes the data request
  this.setState({ users:res.data, loading:false })//when data is loaded, sets the loading prop back and sets users to the newly fetched data! users is going to pass this down as props.

  console.log(res.data);
}



  render() {
   
    return (
      <div className="App">
        <Navbar />{/*this would normally have props defined here, however, the prop defaults are defined in Navbar.js 
                  If I wanted to change the props I could override defaults by defining them inside <Navbar/>  here*/}

        <div className="container">{/*this is a prestyled container from css for everything except the nav bar */}
          <Users loading={this.state.loading} users={this.state.users} /> {/*passing in props of loading and users*/}
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
//App -> NavBar