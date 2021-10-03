import Head from 'next/head'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'

function MyApp({ Component, pageProps, token }) {
  // Apollo Client configuration
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })

  return (
    <>
      <Head>
        <title>Take Home Test</title>
        <meta name="description" content="GitHub Profile Finder developed by Lucas Koval" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async function ({ Component, ctx }) {
  const token = process.env.TOKEN || ''
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = Component.getInitialProps(ctx)
  }
  return { pageProps, token }
}
