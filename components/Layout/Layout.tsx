import { Flex } from "@chakra-ui/react"
import Navbar from "./Navbar"

type LProps = {
    children: any;
    page: string;
}

const Layout = (props: LProps) => {
    const { children, page } = props;
    return (
        <Flex>
            <Navbar page={page} />
            {children}
        </Flex>
    )
}

export default Layout;