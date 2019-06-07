import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
 

class App extends React.Component {

  render() {
   
    return (
      <div className="App">
        <Navbar />{/*this would normally have props defined here, however, the prop defaults are defined in Navbar. 
                  If I wanted to change the props I could override defaults by defining them inside <Navbar/>  */}

        <div className="container">{/*this is a prestyled container from css for everything except the nav bar */}
          <Users />
        </div>
        
      </div>
    );
  };
};
export default App;
