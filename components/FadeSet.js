import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "/styles/Home.module.scss"

export default class FadeSet extends Component {
  static PropTypes = {
    /**
     * @param {number} [begin=0] - time (ms) from load to wait before begining animation
     */
    begin: PropTypes.number,
    /**
     * @param {number} [duration=200] - time (ms) it takes an item to fully fade in.
     */
    duration: PropTypes.number,
    /**
     * @param {number} [delay=0] - time (ms) from the end of the previous animation .to wait before starting the next item.
     */
    delay: PropTypes.number,
    /**
     * @param {boolean} [wait=true] - when true, waits for delay + duration before beginning the next fade. When false, waits only for delay.
     */
    wait: PropTypes.bool,
  };

  render() {
    const {
      children,
      begin = 0,
      duration = 200,
      delay = 0,
      wait = true,
    } = this.props;
    const elements = React.Children.map(children, (child, i) => {
      let totalDelay = wait ? (i * +duration + +delay) + +delay + +begin : (i * +delay) + +begin;
      console.log(totalDelay)
      return React.cloneElement(child, {
        className: `${
          child.props.className === undefined
            ? styles["fade-item"]
            : `${styles["fade-item"]} ${child.props.className}`
        }`,
        style: {
          animation: `fade ${duration}ms ease-in ${totalDelay}ms 1 forwards`,
        },
      });
    });
    return elements;
  }
}
