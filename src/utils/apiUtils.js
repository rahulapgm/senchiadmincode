import axios from "axios";
import { apiEndPoints } from "../configs/apiEndpoints";

export const siteURL = "https://sanchi-server-app.herokuapp.com";

export const triggerAPIRequest = (key, method, data = {}) => {
  let entryPoint = "";
  let token = "";
  if (apiEndPoints[key]) {
    entryPoint = `${siteURL}${apiEndPoints[key]}`;
    const options = {
      method,
      data,
      url: entryPoint,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        token
      }
    };
    axios(options);
  }
  console.log("end point is missing in config");
};
