import type { NextPage } from 'next'
import Head from 'next/head'

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
    <div>
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
