import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import './App.css';
//Components
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage';
import HomePage from '../HomePage/HomePage';
import ShopPage from '../ShopPage/ShopPage';
import Header from '../Header/Header';
import { setCurrentUser } from '../../Redux/user/user-actions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/authentication" component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
