import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Taskboard from "../Taskboard/index.js";
import theme from "../../commons/theme/index.js";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard></Taskboard>
        </ThemeProvider>
      </Provider>
    );
  }
}
export default withStyles(styles)(App);
