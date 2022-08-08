import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: props => ({
        body: {
            bg: mode("#f0e7db", "#202023")(props)
        }
    })
}

const textStyles = {
    h1: {
        fontSize: ["48px", "72px"],
        fontWeight: 300
    }
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const fonts = {
    heading: `'Titillium Web', sans-serif`
}

const theme = extendTheme({
    config,
    styles,
    fonts,
    textStyles
})

export default theme