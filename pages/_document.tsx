import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document'

// Customizes base html and body components
class MainDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head />
                <body className="bg-lightModeBG dark:bg-darkModeBG bg-cover bg-no-repeat bg-center bg-fixed">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MainDocument
