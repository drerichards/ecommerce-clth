import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'pages/home_page/Home_Page'
import ShopPage from 'pages/shop_page/Shop_Page'
import 'App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
