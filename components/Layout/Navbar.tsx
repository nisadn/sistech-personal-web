import { Box, Button, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import styled from "styled-components";

interface NavProps {
    isShadowVisible: boolean;
}

const Navbar = () => {

    // src: https://stackoverflow.com/questions/60906086/changing-css-of-element-on-page-scroll
    
    // Store a bool that determines if the border is visible
    const [isShadowVisible, setIsShadowVisible] = useState(false);

    useEffect(() => {
        // Define a function that is called when the scroll event fires
        const handleScroll = (e: any) => {
            const scrollTop = e.target.documentElement.scrollTop;
            if (scrollTop > 200) {
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


    return (
            <Box 
                display='flex' 
                position='fixed' 
                w='100%' 
                zIndex={3} 
                backdropFilter={'blur(8px)'}
                gap={4}
                boxShadow={isShadowVisible ? 'md' : undefined}
                transition='0.3s'
                px={4} py={3}
                justifyContent='flex-end'
            >
            <Button
                as='a'
                variant='ghost'
                href='/'
            >
                Home
            </Button>

            <Button
                as='a'
                variant='ghost'
                href='/blog'
            >
                Blog
            </Button>

            <Button
                as='a'
                variant='ghost'
                href='/'
            >
                Contact Me
            </Button>
            </Box>
    )
}

export default Navbar;