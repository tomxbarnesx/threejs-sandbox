import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ThreeJSCanvas from '../components/ThreeJSCanvas.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frame x Three.js Sandbox</title>
        <meta name="description" content="Quick sandbox for experimenting w/ Next JS and Three JS" />
        <link rel="icon" href="/frame.ico" />
      </Head>
      
      <ThreeJSCanvas />
    </div>
  )
}
