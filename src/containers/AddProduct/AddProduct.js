import React, { Component } from "react";
import AddProductComponent from "../../components/AddProduct";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { productid: "", product: {} };
    this.productObj = {};
  }

  componentDidMount() {
    if (this.props.setProductId) {
      this.props.setProductId();
    }
  }

  updateProductItem(key, value) {
    this.productObj[key] = value;
    this.setState({ product: this.productObj });
  }

  render() {
    return (
      <React.Fragment>
        <AddProductComponent updateProductItem={this.updateProductItem} />
      </React.Fragment>
    );
  }
}

export default AddProduct;
