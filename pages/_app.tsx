import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import '../styles/globals.css'

if (typeof window !== 'undefined') window.history.scrollRestoration = 'manual'

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
