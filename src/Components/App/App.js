import './App.css';
//Components
import { Route, Switch } from 'react-router-dom'
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
    </Switch>
    </div>
  );
}

export default App;
