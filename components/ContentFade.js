import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import styles from "../styles/Home.module.scss"

export default class ContentFade extends Component {
  constructor() {
    super();
    this.state = {
      fadein: false,
    };
  }

  render() {
    const { children } = this.props;
    const elements = React.Children.map(children, (child) => {
      return <div className={"fade-element " + (this.state.fadein ? "fade-in" : "")}>{child}</div>;
    });
    return elements;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        fadein: true,
      });
    }, 1000);
  }
}
