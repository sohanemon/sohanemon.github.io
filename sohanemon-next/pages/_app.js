import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="google-site-verification" content="lg_txGULhavtXwQDbXW0_2NUBpgwHP3PzTr33CIDaNE" />
    </Head>
    <Component {...pageProps} /></>
}

export default MyApp
