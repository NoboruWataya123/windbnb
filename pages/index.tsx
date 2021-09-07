import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Modal from '../components/Modal/Modal'
import React, { useState } from 'react'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Windbnb</title>
        <meta name="description" content="Windbnb devchallenge" />
      </Head>
      <Modal visible={modal} setVisible={setModal} />
      <main className={styles.main}>
       <Header>
       <div className={styles.logo}><Image 
            src="/logo.svg"
            width={120}
            height={30}
            alt="logo"
            /></div>
            <div className={styles.search}>
                <div className={styles.city} onClick={() => setModal(true)}>Helsinki, Finland</div>
                <button className={styles.input} onClick={() => setModal(true)}>Add guest</button>
                <div className={styles.icon} onClick={() => setModal(true)}>🔍</div>
            </div>
      </Header> 
      <div onClick={() => setModal(false)}>
      <Card />
      </div>        
      </main>
    </div>
  )
}

export default Home
