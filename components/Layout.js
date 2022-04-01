import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";
import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={`layout min-vh-100`}>
        <Head>
          
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
