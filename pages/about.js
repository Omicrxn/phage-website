import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>About</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nulla sunt eius iste consequatur, explicabo illo officia voluptate velit ullam nisi eum est eligendi ea dolorum. Rerum fugiat quibusdam consectetur!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nulla sunt eius iste consequatur, explicabo illo officia voluptate velit ullam nisi eum est eligendi ea dolorum. Rerum fugiat quibusdam consectetur!</p>
    </div>
  )
}