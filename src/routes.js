import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Table from './table';



function Routes() {
  return ( 
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Table}></Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;