import './App.css';
//Components
import { Route, Switch } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage'
import HomePage from '../HomePage/HomePage'
import ShopPage from '../ShopPage/ShopPage'
import Header from '../Header/Header'

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />  
      <Route path='/shop' component={ShopPage} />  
      <Route path='/authentication' component={AuthenticationPage} />  
    </Switch>
    </div>
  );
}

export default App;
