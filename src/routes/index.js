import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import adminRoutes from "./admin/adminRoutes";

const AppRouteComponent = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={adminRoutes} />
      </React.Fragment>
    </Router>
  );
};
export default AppRouteComponent;
