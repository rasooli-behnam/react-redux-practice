import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import BookList from "../containers/BookList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BookList />
      </React.Fragment>
    );
  }
}

export default App;
