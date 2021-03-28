import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomePage from './components/Homepage';
import AboutUs from './components/About';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path ='/' render={() => (
          <HomePage/>
        )}/>
        <Route nav path ='/collection' render={() => <Collection/>}/>
        <Route nav path ='/about' render={() => <AboutUs/>}/>
      </Switch>
    </div>
  );
}

export default App;
