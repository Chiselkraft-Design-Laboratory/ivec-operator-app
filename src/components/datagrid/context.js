import React from "react";
import * as Dummies from "./Dummies";

const DataGridContext = React.createContext(null);

export const withDataGrid = Component => props => (
  <DataGridContext.Consumer>
    {firebase => <Component {...props} Firebase={firebase} Dummies={Dummies} />}
  </DataGridContext.Consumer>
);
export default DataGridContext;
