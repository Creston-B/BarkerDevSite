import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
  <div className={styles.container}>
    <head>
      <title>Creston Barker - Developer</title>
      <meta></meta>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <header>
    </header>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Creston Barker - Junior Developer
      </h1>
      <p className={styles.description}> Junior Developer enthusiastic about creating clean code and solving problems. Recently graduated from the Manitoba Institute of Trades and Technology and experienced with remote work. Always ready for a challenge.
      </p>
    </main>
    <footer className={styles.footer}>
    Creston Barker - <a href="mailto:creston@barkerdev.com">creston@barkedev.com</a> - <span id="license-label">MIT license 2020</span>
      <div className="license hidden">
        <p>via <a href="https://opensource.org/licenses/MIT">https://opensource.org/licenses/MIT</a></p>

        Begin license text.
        <p>Copyright 2020 Creston Barker</p>
        <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
        <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
        <p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

        End license text.
      </div>
      <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
    </footer>
  </div>
  )
}