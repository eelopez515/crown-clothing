import React, { Component } from 'react'
import './App.css';
//Components
import { Route, Switch } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage'
import HomePage from '../HomePage/HomePage'
import ShopPage from '../ShopPage/ShopPage'
import Header from '../Header/Header'
import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          console.log(snapShot)
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
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
