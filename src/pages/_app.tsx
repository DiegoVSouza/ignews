import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'

import '../styles/global.scss'
import { ToastContainer } from 'react-toastify'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../services/prismicio'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
        <ToastContainer />
        <Header />
          <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
