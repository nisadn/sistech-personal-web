import { HamburgerIcon } from "@chakra-ui/icons";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, Flex, IconButton, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { NavbarMenu } from "../Common";

const Navbar = (props: any) => {
    const { page } = props;

    // src: https://stackoverflow.com/questions/60906086/changing-css-of-element-on-page-scroll
    
    // Store a bool that determines if the border is visible
    const [isShadowVisible, setIsShadowVisible] = useState(false);

    useEffect(() => {
        // Define a function that is called when the scroll event fires
        const handleScroll = (e: any) => {
            const scrollTop = e.target.documentElement.scrollTop;
            if (scrollTop > 100) {
                setIsShadowVisible(true);
            } else {
                setIsShadowVisible(false);
            }
        };

        // Add the event listener inside a useEffect
        if (document) {
            document.addEventListener("scroll", handleScroll);
        }

        // Remove the event listener on unmount
        return () => {
            if (document) {
                document.removeEventListener("scroll", handleScroll);
            }
        };
    }, [setIsShadowVisible]);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }

    return (
        <Flex direction='column'>
        <Flex
            position='fixed' 
            w='100%' 
            zIndex={3} 
            backdropFilter='blur(8px)'
            gap={4}
            boxShadow={isShadowVisible ? 'md' : undefined}
            transition='0.3s'
            px={4} py={3}
            justifyContent='flex-end'
            color='custom.400'
        >
            <Flex gap={2} align='center' >
                <Flex display={['none', 'none', 'flex']} gap={2}>
                <NavbarMenu href='/' isActive={page == 'home'}>Home</NavbarMenu>
                <NavbarMenu href='/blog' isActive={page == 'blog'} >Blog</NavbarMenu>
                <NavbarMenu href='mailto:nugrahani07@gmail.com'>Contact Me</NavbarMenu>
                </Flex>
                <IconButton 
                    aria-label="open-menu" 
                    size='lg' 
                    mr='2' 
                    icon={<HamburgerIcon />} 
                    display={['flex', 'flex', 'none']}
                    onClick={handleClick}
                />
            </Flex>


        </Flex>
        <Drawer onClose={onClose} isOpen={isOpen} size='full' placement="top">
            <DrawerContent>
            <DrawerCloseButton mt='4' mr='5' />
            <DrawerBody>
                    <Flex direction='column' gap={5} my='15%' mx='10%'>
                    <NavbarMenu href='/' isActive={page == 'home'}>Home</NavbarMenu>
                    <NavbarMenu href='/blog' isActive={page == 'blog'} >Blog</NavbarMenu>
                    <NavbarMenu href='mailto:nugrahani07@gmail.com'>Contact Me</NavbarMenu>
                    </Flex>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
        </Flex>
    )
}

export default Navbar;