import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BookList />
        <BookDetail />
      </React.Fragment>
    );
  }
}

export default App;
