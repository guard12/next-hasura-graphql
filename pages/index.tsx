import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { createClient, Provider } from 'urql'

import { List } from '../components/list'

const client = createClient({
  url: '',
  fetchOptions: () => {
    return {
      headers: {
        "x-hasura-admin-secret": ""
      }
    }
  }
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>&#128640; To Mars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider value={client}>
        <List />
      </Provider>
    </div>
  )
}

export default Home
