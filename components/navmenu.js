import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('');
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const NavMenu = props => {
    const { path } = props;

    return (
        <Box {...props}>
            NavMenu
        </Box>
    )
}

export default NavMenu;

