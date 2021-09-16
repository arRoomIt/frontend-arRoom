import React from 'react'
import { Home,Login,Register,ListWorkspace,DetailWorkspace } from '../../../pages/index';
import{Header} from '..';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <div>
                <Header/>
            </div>

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

        <Route path="/detail" component={DetailWorkspace}>
          <DetailWorkspace/>
        </Route>

        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>

      </Switch>

    </Router>
    )
}

export default AppRouter;
