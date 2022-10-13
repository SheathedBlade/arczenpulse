import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import theme from '../libs/theme'

// Customizes base html and body components

class MainDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body
                    className=" bg-cover bg-no-repeat bg-center bg-fixed"
                    style={{
                        backgroundImage:
                            "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url('../public/overpass.gif) !important"
                    }}
                >
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MainDocument
