import './App.css';
//Components
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage/Hompage'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Homepage} />  
    </Switch>
    </div>
  );
}

export default App;
