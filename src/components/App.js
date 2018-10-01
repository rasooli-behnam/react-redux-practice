import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <BookList />
          </Grid>
          <Grid item xs={8}>
            <BookDetail />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    margin: "10px auto",
    maxWidth: 960
  }
};

export default withStyles(styles)(App);
