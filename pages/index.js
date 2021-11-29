import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'

export default function Home() {
    return(
    <div className={styles.container}>
    <Layout>
      <head>
        <title>Creston Barker - Developer</title>
        <meta></meta>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Creston Barker - Junior Developer
        </h1>
        <p className={styles.description}> Junior Developer enthusiastic about creating clean code and solving problems. Recently graduated from the Manitoba Institute of Trades and Technology and experienced with remote work. Always ready for a challenge.
        </p>
      </main>
    </Layout>
  </div>
  )
}