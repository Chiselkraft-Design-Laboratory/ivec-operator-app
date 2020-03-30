import React, { Component } from "react";
import ThemeFox from "./themefox";
import { CssBaseline, withStyles } from "@material-ui/core";
import { ZoomControl } from "./omni-ui";

const style = theme => ({
  root: {
    flexGrow: 1
  },
  zoomcontrol: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: theme.spacing(0, 1.5, 1.5, 0)
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
        <div className={classes.root}>
          <ZoomControl className={classes.zoomcontrol} />
        </div>
      </ThemeFox>
    );
  }
}

export default withStyles(style)(IvecOperator);
