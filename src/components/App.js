import React, { Component } from "react";
import ThemeFox from "./themefox";
import { CssBaseline, withStyles } from "@material-ui/core";

const style = theme => ({
  root: {
    flexGrow: 1
  }
});
class IvecOperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkmode: true
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <ThemeFox darkmode={this.state.darkmode}>
        <CssBaseline />
        <div className={classes.root}></div>
      </ThemeFox>
    );
  }
}

export default withStyles(style)(IvecOperator);
