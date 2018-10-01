import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class BookDetail extends Component {
  render() {
    const { classes, book } = this.props;

    const _book = book || { title: "Select a book from the list" };

    return (
      <Card>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            {_book.title}
          </Typography>
          <Typography className={classes.year} color="textSecondary">
            {_book.year}
          </Typography>
          <Typography
            className={classes.description}
            color="textSecondary"
            component="p"
          >
            {_book.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  title: {
    marginBottom: 16,
    fontSize: 24
  },
  year: {
    marginBottom: 12,
    fontSize: 18
  },
  description: {
    fontSize: 14
  }
};

const BookDetailWithStyles = withStyles(styles)(BookDetail);

const mapAppStateToProps = appState => ({
  book: appState.activeBook
});

export default connect(mapAppStateToProps)(BookDetailWithStyles);
