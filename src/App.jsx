import './App.scss';
import { Home,Login,Register,ListWorkspace } from '../src/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>
        
        <Route exact path="/" component={Home}>
          <Home/>
        </Route>

        <Route path="/login" component={Login}>
          <Login/>
        </Route>

        <Route path="/register" component={Register}>
          <Register/>
        </Route>

        <Route path="/list" component={ListWorkspace}>
          <ListWorkspace/>
        </Route>

        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
