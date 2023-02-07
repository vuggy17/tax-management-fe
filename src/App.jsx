import reactLogo from './assets/react.svg'

import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import Header from "./Home/Nav3";
import Footer from "./Home/Footer1";
import Home from "./Home";
import { Nav30DataSource, Footer10DataSource } from "./Home/data.source";
import { Outlet } from "react-router-dom";


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // Support for mobile resolutions
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <div
        className="flex flex-col min-h-screen"
        style={{
          minHeight: "100vh",
        }}
      >
        <Header dataSource={Nav30DataSource} isMobile={this.isMobile} />
        <div className="flex-1">
          <Outlet className="h-full" />
        </div>
        <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
      </div>
    );
  }
}

export default App;
