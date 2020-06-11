import React from "react";

import Admin from "../../components/";
import AddProduct from "../../components/AddProduct";

import { Route } from "react-router-dom";

const adminRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Admin} />
      <Route path="/addproduct" component={AddProduct} />
    </React.Fragment>
  );
};

export default adminRoutes;
