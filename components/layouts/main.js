import { Box, Container } from '@chakra-ui/react';
import Head from "next/head";
import NavMenu from "../navmenu";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="ArcZenPulse personal page" />
                <meta name="author" content="ARC" />
                <title>ArcZenPulse - Hub</title>
            </Head>
            <Container maxW="container.md" pt={14}>
                {children}
                <NavMenu path={router.asPath} />
            </Container>
        </Box>
    );
}

export default Main;