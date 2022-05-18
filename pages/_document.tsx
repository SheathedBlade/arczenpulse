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
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MainDocument;