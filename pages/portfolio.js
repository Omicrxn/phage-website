import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Portfolio</h1>
    </div>
  )
}