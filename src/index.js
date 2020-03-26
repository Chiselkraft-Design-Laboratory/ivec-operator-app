import React from "react";
import ReactDOM from "react-dom";
import IvecOperator from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<IvecOperator />, document.getElementById("root"));

serviceWorker.unregister();
