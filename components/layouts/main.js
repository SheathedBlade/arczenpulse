import Head from "next/head";
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="ArcZenPulse browser startpage" />
                <meta name="author" content="ARC" />
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
                <title>ArcZenPulse - Hub</title>
            </Head>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    );
}

export default Main;