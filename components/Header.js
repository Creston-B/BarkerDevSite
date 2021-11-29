import React, { Component } from 'react'
import styles from '../styles/Home.module.scss'

export default class HeaderComponent extends Component {
  render() {
    return(
      <header className={styles.header}>
        Some text in header
      </header>
    )
  }

}
