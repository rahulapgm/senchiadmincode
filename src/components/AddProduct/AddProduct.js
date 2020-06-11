import React, { useState } from "react";

import "./AddProduct.css";
import { Link } from "react-router-dom";
import Input from "../common/Input";

import { triggerAPIRequest } from "../../utils/apiUtils";

const AddProduct = (props) => {
  // const [pricingData, updatePricingDataObj] = useState({});

  const [rowCount, setRowCount] = useState(3);

  const [productData, setProductData] = useState({
    productDescription: "An esenchi deliverables",
    productStockCount: 0,
    productCategory: "Vegetable",
  });

  let priceInputRows = [];

  const updatePricingData = (id, key, value) => {
    const temp = productData;
    temp.pricingData = productData.pricingData || {};
    temp.pricingData[id] = {
      ...temp.pricingData[id],
      [key]: value,
    };
    temp.pricingData[id].discount =
      temp.pricingData[id].price && temp.pricingData[id].discountPrice
        ? temp.pricingData[id].price - temp.pricingData[id].discountPrice
        : "";
    console.log("data->\n", temp);
    setProductData(temp);
  };

  const addProductOnSubmit = (e) => {
    e.preventDefault();

    let errMessage = !productData.productName
      ? ["Please Enter Product Name"]
      : [];

    if (!productData.productCategory)
      errMessage.push("Please Enter Product Category");
    if (!productData.productSubCategory)
      errMessage.push("Please Enter Product productSubCategory");
    if (!productData.pricingData)
      errMessage.push("Product Pricing Details Missing");

    if (errMessage.length === 0) {
      triggerAPIRequest("addproduct", "post", productData);
    } else console.log(errMessage);
  };

  for (let i = 0; i < rowCount; i++) {
    priceInputRows.push(
      <div
        id={i}
        key={i}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input
          id="prod-quantity"
          name="pricing-quantity"
          placeholder="Enter Quantity"
          style={{ textAlign: "center" }}
          type="text"
          maxLength="3"
          onChange={(event) => {
            updatePricingData(i, "quantity", event.target.value);
            updatePricingData(i, "unit", "Kilogram (KG)");
          }}
        />
        <select
          id="quantity-unit"
          style={{ height: "100%" }}
          onChange={(event) => updatePricingData(i, "unit", event.target.value)}
        >
          <option>Kilogram (KG)</option>
          <option>Grams (G)</option>
          <option>Litre(L)</option>
          <option>Milli-Litre(ML)</option>
        </select>
        <input
          id="product-price"
          type="number"
          name="pricing"
          placeholder="Enter Price of entered quantity"
          style={{ flex: 1, textAlign: "center" }}
          onChange={(event) =>
            updatePricingData(i, "price", event.target.value)
          }
        />
        <input
          type="number"
          name="pricing-discount"
          placeholder="Enter Price after Discount"
          style={{ flex: 0.8, textAlign: "center" }}
          onChange={(event) =>
            updatePricingData(i, "discountPrice", event.target.value)
          }
        />
      </div>
    );
  }

  return (
    <React.Fragment>
      <Link to="/" style={{ margin: 10, top: 10, position: "absolute" }}>
        Go Back
      </Link>
      <form
        className="add-product"
        onSubmit={(e) => addProductOnSubmit(e)}
        autoComplete="off"
      >
        <h2>ADD NEW PRODUCT</h2>
        <div className="input-item-group">
          <div>
            <Input
              labelContent="Product Name:"
              type="text"
              id="productName"
              name="product-name"
              placeholder="example;- apple, carrot.."
              onChange={(e) => {
                const productName = e.target.value;
                setProductData({ ...productData, productName });
              }}
            />
          </div>

          <div>
            <label>Product Category: </label>
            <select
              onChange={(e) => {
                const productCategory = e.target.value;
                setProductData({ ...productData, productCategory });
              }}
            >
              <option>Vegetables</option>
              <option>Oil</option>
              <option>Masala</option>
              <option>Fruits</option>
              <option>Food Grains</option>
              <option>Organic Vegetable</option>
              <option>Other Groceries</option>
            </select>
          </div>
          <div>
            <label>Product Sub Category: </label>
            <select
              onChange={(e) => {
                const productSubCategory = e.target.value;
                if (productSubCategory === "Click to Select") {
                  const prodData = productData;
                  delete prodData.productSubCategory;
                  setProductData({ prodData });
                }
                setProductData({ ...productData, productSubCategory });
              }}
            >
              <option>Click to Select</option>
              <option>Sub Category 1</option>
              <option>Sub Category 2</option>
              <option>Sub Category 3</option>
              <option>Sub Category 4</option>
            </select>
          </div>
          <div>
            <label>Product Pricing: </label>
            {rowCount.for}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "2rem",
              }}
            >
              {priceInputRows}
              <div style={{ flexDirection: "row" }}>
                <input
                  name="add-row"
                  onClick={() => {
                    setRowCount(rowCount + 1);
                  }}
                  type="button"
                  value="Add New Row"
                />
                <input
                  name="add-row"
                  onClick={() => {
                    rowCount > 1 && setRowCount(rowCount - 1);
                  }}
                  type="button"
                  value="Delete Last Row"
                  style={{ flexDirection: "row" }}
                />
              </div>
            </div>
          </div>
          <div>
            <Input
              labelContent="Product Image:"
              id="productImage"
              type="url"
              name="product-Image"
              placeholder="https://example.com"
              pattern="https://.*"
              required
            />
          </div>
          <div>
            <Input
              labelContent="Product Description:"
              type="text"
              id="productDescrip"
              name="product-descrip"
              placeholder=""
              onChange={(e) => {
                const productDescription = e.target.value;
                setProductData({ ...productData, productDescription });
              }}
            />
          </div>
          <div>
            <Input
              labelContent="Product Stock Count:"
              type="text"
              id="productStock"
              name="product-stock"
              placeholder="0"
              onChange={(e) => {
                const productStockCount = e.target.value;
                setProductData({ ...productData, productStockCount });
              }}
            />
          </div>
          <input
            type="submit"
            className={"btn btn-danger btn-submit"}
            value="Submit"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddProduct;
