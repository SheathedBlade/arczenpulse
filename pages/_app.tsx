import Layout from '../components/layouts/main'
import '../styles/globals.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../libs/theme'

if (typeof window !== 'undefined')
  window.history.scrollRestoration = 'manual'

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
