import React from "react";
import ReactDOM from "react-dom";
import Firebase, { DataGridContext } from "./components/datagrid";
import IvecOperator from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DataGridContext.Provider value={new Firebase()}>
    <IvecOperator />
  </DataGridContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
