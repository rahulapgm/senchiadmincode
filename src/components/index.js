import React from "react";
import { Link } from "react-router-dom";
class Admin extends React.Component {
  render() {
    return (
      <div>
        <h3>Sanchi Admin</h3>
        <ul>
          <li>
            <Link to="/addproduct">Add New Product</Link>
          </li>
          <li>
            <Link to="/allproducts">View all Product</Link>
          </li>
          <li>
            <Link to="/updateproduct">Update Product</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Admin;
