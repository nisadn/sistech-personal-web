import { Box, Center, Container, Flex, LinkOverlay, Text } from "@chakra-ui/react"
import { RedButton, ToscaButton } from "../Button/CustomButton";
import { StyledWaves } from "../StyledComponents";
import styled from 'styled-components';

interface SProps {
    bgImg: string;
}

const Profile = () => {

    // const handleClick = (targetId: string) => {
    //     window.location.href=`${targetId}`;
    // }

    return (
        <StyledWaves bgImg="/waves3.svg" bgColor="#A8DADC">
        <Flex w={'100vw'} h={'100vh'} maxWidth={'100%'} position={'relative'} direction='column'>
            <Flex h='70%'>
                <Flex w={'40vw'} position='relative'>
                    <ProfImg bgImg="/photo.png" />
                </Flex>
                <Flex w={'60vw'}>
                    <Center flexDirection={'column'} color='custom.300' textAlign={'left'}>
                        <Text pt={10} w='100%' fontSize={30}>HI THERE,</Text>
                        <Text w='100%' fontFamily='heading' fontWeight='bold' fontSize={40} color='custom.400'>I&apos;m Annisa Dian Nugrahani</Text>
                        <Text w='100%' fontSize={20}>a Final Year Computer Science Student</Text>
                        <Text w='100%' fontSize={20}>at Universitas Indonesia</Text>
                    </Center>
                </Flex>
            </Flex>
            <Flex h='30%'>
                <Container w='100%' zIndex={0} centerContent>
                    <Flex gap={4}>
                        <Box as='a' href="#Experiences">
                            <ToscaButton>Experiences</ToscaButton>
                        </Box>
                        <Box as='a' href="#Achievements">
                            <RedButton>Achievements</RedButton>
                        </Box>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
        </StyledWaves>
    )
}

export default Profile;

const ProfImg = styled.div<SProps>`
    background-image: url('${(props: any) => props.bgImg}');
    background-position: right bottom;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 85%;
    width: 90%;
    border-radius: 50px;
`