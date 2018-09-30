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
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {_book.title}
          </Typography>
          <Typography component="p">Book description goes here...</Typography>
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  card: {
    width: 350
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
};

const BookDetailWithStyles = withStyles(styles)(BookDetail);

const mapAppStateToProps = appState => ({
  book: appState.activeBook
});

export default connect(mapAppStateToProps)(BookDetailWithStyles);
