import React from 'react'
import { Home,ListWorkspace,DetailWorkspace } from '../../../pages/index';
import{Header} from '..';
import {  Switch, Route } from 'react-router-dom';

function DashboardRouter() {
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

        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>

        

      </Switch>

   </>
    )
}

export {DashboardRouter};