import React , {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
 

class App extends Component {

  render() {
   
    return (
      <div className="App">
        <Navbar />{/*this would normally have props defined here, however, the prop defaults are defined in Navbar.js 
                  If I wanted to change the props I could override defaults by defining them inside <Navbar/>  here*/}

        <div className="container">{/*this is a prestyled container from css for everything except the nav bar */}
          <Users />
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