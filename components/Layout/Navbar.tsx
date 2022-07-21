import { Button } from "@chakra-ui/react"
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
        <StyledNavbar isShadowVisible={isShadowVisible}>
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
                href='/'
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
        </StyledNavbar>
    )
}

export default Navbar;

const StyledNavbar = styled.div<NavProps>`
    backdrop-filter: blur(8px);
    padding: 12px;
    position: fixed;
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-shadow: ${(props: any) => props.isShadowVisible && '0 0 .5em rgba(0, 0, 0, .5)'};
    transition: 0.3s;
    gap: 10px;
`