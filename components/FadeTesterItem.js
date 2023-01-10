// import React, { Component } from "react";
// import styles from "../styles/Home.module.scss";
// import PropTypes from "prop-types";

// /**
//  * unused, exists as reference for react / PropTypes usage
//  */

// export default class FadeTester extends Component {
//   static PropTypes = {
//     /**
//      * @param {number} [begin=0] - time (ms) from load to wait before begining animation
//      */
//     begin: PropTypes.number,
//     /**
//      * @param {number} [duration=200] - time (ms) it takes an item to fully fade in.
//      */
//     duration: PropTypes.number,
//     /**
//      * @param {number} [delay=0] - time (ms) from the end of the previous animation .to wait before starting the next item.
//      */
//     delay: PropTypes.number,
//     /**
//      * @param {boolean} [wait=true] - when true, waits for delay + duration before beginning the next fade. When false, waits only for delay.
//      */
//     wait: PropTypes.bool,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       load: false
//     }
//   }

//   render() {
//     const {
//       children,
//       begin = 0,
//       duration = 200,
//       delay = 0,
//       wait = true,
//     } = this.props;
//     const style = { opacity: 0, transition: ` all ${duration}ms ease-in` };
//     const elements = React.Children.map(children, (child) => {
//       return <FadeTEsterItem>{child}</FadeTEsterItem>;
//     });
//     return elements;
//   }

//   componentDidMount() {
//     this.setState({load:true})
//     console.log(`did mount`);
//     const { begin = 0, duration = 200, delay = 0, wait = true } = this.props;
//     const spacing = delay + (wait ? duration : 0);
//     setTimeout(() => {
//       console.log(`entered timeout 1`);
//       React.Children.toArray().forEach((child) => {
//         child.setState(show, true);
//       });
//       setTimeout(() => {}, spacing);
//     }, begin);
//   }
// }

// class FadeTesterItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false,
//     };
//   }

//   render() {
//     const { children } = this.props;
//     const style = { opacity: 1 };
//     console.log("did render item");
//     return React.cloneElement(children, {
//       style: this.state.show ? style : { opacity: 0 },
//     });
//   }
// }