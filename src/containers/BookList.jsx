import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class BookList extends Component {
  render() {
    const { books, classes } = this.props;

    return (
      <List className={classes.list}>
        {books.map(book => {
          return (
            <ListItem key={book.title} button>
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

function mapAppStateToProps(appState) {
  return {
    books: appState.books
  };
}

const BookListWithStyles = withStyles(styles)(BookList);

export default connect(mapAppStateToProps)(BookListWithStyles);
