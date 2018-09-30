import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { selectBook } from "../actions/index";

class BookList extends Component {
  render() {
    const { classes, books, selectBook } = this.props;

    return (
      <List className={classes.list}>
        {books.map(book => {
          return (
            <ListItem key={book.title} button onClick={() => selectBook(book)}>
              {book.title}
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const styles = {
  list: {
    width: "100%",
    maxWidth: 250,
    color: "white",
    backgroundColor: "#2196f3"
  }
};

const BookListWithStyles = withStyles(styles)(BookList);

const mapAppStateToProps = appState => ({
  books: appState.books
});

const mapDispatchToProps = dispatch => ({
  selectBook: book => dispatch(selectBook(book))
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(BookListWithStyles);
