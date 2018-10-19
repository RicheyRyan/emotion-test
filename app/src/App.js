import React, { Component } from "react";
import Frame from "react-frame-component";
import { List } from "component-library";
import Heading from "./Heading";

class App extends Component {
  state = {
    styles: ""
  };

  setStyle = () => {
    const styleNodes = Array.from(
      document.querySelectorAll('[data-emotion="rr-app-components"],[data-emotion="rr-components"]')
    );
    const styles = styleNodes.reduce(
      (styleString, s) =>
        s.textContent.length > 0 ? styleString + s.textContent : styleString,
      ""
    );
    this.setState({
      styles
    });
  };

  componentDidMount() {
    this.setStyle();
  }

  render() {
    const { styles } = this.state;
    return (
      <React.Fragment>
        <Heading title="Application: " />
        <List />
        <Frame
          head={
            <style type="text/css" data-my-styles>
              {styles}
            </style>
          }
        >
          <Heading title="Application: " />
          <List />
        </Frame>
      </React.Fragment>
    );
  }
}

export default App;
