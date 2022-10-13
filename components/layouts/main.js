import Head from "next/head";

const Main = ({ children, router }) => {
    return (
        <main className="tw-pb-6">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="ArcZenPulse personal page" />
                <meta name="author" content="ARC" />
                <title>ArcZenPulse - Hub</title>
            </Head>
            <div className="tw-pt-14 tw-container">
                {children}
            </div>
        </main>
    );
}

export default Main;