import React from "react";
import clsx from "clsx";
import { ZoomFitIcon, ZoomInIcon, ZoomOutIcon } from "../iconic";
import { Paper, ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  btn: {
    "& >:first-child": {
      width: "auto",
      padding: theme.spacing(0.5, 0.25)
    }
  }
}));

const ZoomControl = props => {
  const classes = useStyles();
  return (
    <Paper elevation={8} className={clsx(classes.root, props.className)}>
      <ButtonGroup orientation="vertical" variant="text">
        <Button className={classes.btn}>
          <ZoomFitIcon size={18} />
        </Button>
        <Button className={classes.btn}>
          <ZoomInIcon size={18} />
        </Button>
        <Button className={classes.btn}>
          <ZoomOutIcon size={18} />
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default ZoomControl;
