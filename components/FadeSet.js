import React, { Component } from "react";
import styles from "../styles/Home.module.scss";

export default class FadeSet extends Component {
  /**
   * @param {number}    [begin=0]       time (ms) from load to wait before starting animation.
   * @param {number}    [duration=200]  time (ms) it takes an item to fully fade in.
   * @param {number}    [delay=0]       time (ms) from the end of the previous animation .to wait before starting the next item.
   * @param {boolean}   [wait=true]  if false, only waits {delay} before beginning the next animation.
   */
  constructor() {
    super();
    this.state = {
      animate: false,
      index: 0,
    };
  }

  render() {
    const { children, begin, duration, delay, wait } = this.props;
    const elements = React.Children.map(children, (child) => {
      return <FadeItem>{child}</FadeItem>;
    });
    const count = elements.length;
    return elements;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: true,
      });
    }, begin);
  }
}
export class FadeItem extends Component {
  constructor() {
    super();
    this.state = {
      animate: false,
    };
  }

  render() {
    return React.cloneElement(this, {
      className: `${this.props.className} fade-item ${
        this.state.animate ? "fade-in" : null
      }`,
    });
  }
}


//  const { children } = this.props;
//  const elements = React.Children.map(children, (child) => {
//    return (
//      React.cloneElement(child , {className: `${child.props.className} fade-item ${this.state.animate ? "fade-in" : null}`})
//    );
//  });
//  return elements;
