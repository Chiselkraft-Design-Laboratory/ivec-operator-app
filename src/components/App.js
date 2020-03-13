import React, { Component } from "react";
import ThemeFox from "./themefox";
import { CssBaseline } from "@material-ui/core";

class IvecOperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkmode: true
    };
  }
  render() {
    return (
      <ThemeFox darkmode={this.state.darkmode}>
        <CssBaseline />
      </ThemeFox>
    );
  }
}

export default IvecOperator;
