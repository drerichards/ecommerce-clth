import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from 'pages/homepage/Home_Page'
import 'App.css';

const HatsPage = () => {
  return (
    <div className='ff'>
      <h1>Hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
