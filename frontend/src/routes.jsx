import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./Hoc/Hoc";

import Login from "./containers/Login/Login";

import PublicList from "./containers/Dashboard/PublicDashboard/PublicList/PublicList";
import PublicDetail from "./containers/Dashboard/PublicDashboard/PublicDetail/PublicDetail"

const BaseRouter = () => (
    <Hoc>
        <Route exact path="/list/:room" component={PublicList} />
        <Route exact path="/detail" component={PublicDetail} />
        <Route path="/login" component={Login} />
    </Hoc>
);

export default BaseRouter;