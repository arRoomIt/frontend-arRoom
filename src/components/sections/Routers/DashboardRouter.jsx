import React, { useContext } from 'react'
import { Home,ListWorkspace,DetailWorkspace,User } from '../../../pages/index';
import{Header} from '..';
import {  Switch, Route } from 'react-router-dom';
import { UserContext } from '../../../auth/UserContext';
import { PrivateRoute } from './PrivateRouter';

function DashboardRouter() {

  const [userContext] = useContext(UserContext);
  console.log('dasboard router', userContext);

    return (
        <>
            <div>
                <Header/>
            </div>

      <Switch>
        
        <Route exact path="/" component={Home}>
          <Home/>
        </Route>

        <Route path="/list" component={ListWorkspace}>
          <ListWorkspace/>
        </Route>

        <Route path="/detail" component={DetailWorkspace}>
          <DetailWorkspace/>
        </Route>

        <PrivateRoute 
            path="/profile" 
            component={User}
            isAuthenticated = {userContext._id !== ""}
            />
          

        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>

        

      </Switch>

   </>
    )
}

export {DashboardRouter};