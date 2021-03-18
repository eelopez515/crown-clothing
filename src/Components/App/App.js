import React, { Component } from 'react'
import './App.css';
//Components
import { Route, Switch } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage'
import HomePage from '../HomePage/HomePage'
import ShopPage from '../ShopPage/ShopPage'
import Header from '../Header/Header'
import { auth } from '../../Firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />  
        <Route path='/shop' component={ShopPage} />  
        <Route path='/authentication' component={AuthenticationPage} />  
      </Switch>
      </div>
    )
  }
}

export default App;
