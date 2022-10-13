import { Box, Flex, Image, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <Flex justify="center">
            <Box w="calc(30% + (0.5rem / 3))" m="0.5rem">
                <Image
                    src="/babel_white.png"
                    alt="Logo"
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    align="center"
                    boxSize="250px"
                    m="auto"
                />
                <Text textStyle="h1" color="white">
                    I am here!
                </Text>
            </Box>
            <Box
                w="calc(65% + (0.5rem / 3))"
                m="0.5rem"
                bgColor="rgba(0, 0, 0, 0.5)"
                p="1rem"
                border="3px solid #e8e8e8"
            >
                <Text color="white">Hello!</Text>
            </Box>
        </Flex>
    )
}

export default Home
