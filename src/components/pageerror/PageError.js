import React,{Component} from "react";

import error from "./images/404.png";

function PageError(props) {
  return (
    <div class="error">
      <img src={error} alt="Page not Found"/>
    </div>
  );
}
export default PageError;