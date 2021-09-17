import React from 'react'
import { Login,Register } from '../../../pages/index';
import{DashboardRouter} from '../Routers/DashboardRouter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            

        <Switch>
        
        

        <Route path="/login" component={Login}>
          <Login/>
        </Route>

        <Route path="/register" component={Register}>
          <Register/>
        </Route>

        <Route path="/" component={DashboardRouter}>
          <DashboardRouter/>
        </Route>
        

        
      </Switch>

    </Router>
    )
}

export default AppRouter;
