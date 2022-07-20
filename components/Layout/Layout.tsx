import { Flex } from "@chakra-ui/react"
import Navbar from "./Navbar"


const Layout = ({children}: {children: any}) => {
    return (
        <Flex>
            <Navbar />
            {children}
        </Flex>
    )
}

export default Layout;