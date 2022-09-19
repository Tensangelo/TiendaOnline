import '../styles/globals.scss'
import type { AppProps } from 'next/app'
// Components
import Layout from '@components/Layout'
// Context
import CartProvider from '@context/shop'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp;