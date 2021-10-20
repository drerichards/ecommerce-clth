import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'pages/home_page/Home_Page'
import ShopPage from 'pages/shop_page/Shop_Page'
import AuthenticatePage from 'pages/authenticate_page/Authenticate_Page'
import Header from 'components/header/Header_Comp'
import 'App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/authenticate' component={AuthenticatePage} />
      </Switch>
    </div>
  )
}

export default App
