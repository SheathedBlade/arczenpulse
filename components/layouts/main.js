import Head from 'next/head'

const Main = ({ children, router }) => {
    return (
        <main>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="ArcZenPulse personal page" />
                <meta name="author" content="ARC" />
                <title>ArcZenPulse - Hub</title>
            </Head>
            <div className="container items-center mx-auto h-screen flex px-4 flex-row justify-center">
                {children}
            </div>
        </main>
    )
}

export default Main
