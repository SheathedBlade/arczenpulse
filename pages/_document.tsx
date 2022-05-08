import Document, { Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from "next/document";

// Customizes base html and body components
// Need to preload Titillium fonts

class MainDocument extends Document {
    static async getInitialProps(ctx: DocumentContext){
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/TitilliumWeb-Light.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/TitilliumWeb-ExtraLight.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/TitilliumWeb-Regular.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/TitilliumWeb-LightItalic.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MainDocument;