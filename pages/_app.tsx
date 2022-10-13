import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import '../styles/globals.css'

if (typeof window !== 'undefined') window.history.scrollRestoration = 'manual'

function Website({ Component, pageProps, router }: AppProps) {
    return (
        <Layout router={router}>
            <Component {...pageProps} />
        </Layout>
    )
}

export default Website
