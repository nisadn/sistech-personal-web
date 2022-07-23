import { Box, Center, Container, Flex, Text, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react";
import { NavyButton, RedButton, ToscaButton } from "../Blog";
import BioModal from "../Blog/BioModal";
import { StyledWaves } from "../StyledComponents";
import { ProfImg, ProfImgResp } from "../StyledComponents";


const Profile = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    return (
        <StyledWaves bgImg="/waves3.svg" bgColor="#A8DADC">
        <Flex w={'100vw'} h={'100vh'} maxWidth={'100%'} position={'relative'} direction='column' gap={[10,10,0]} mt={[10,10,0]}>
            <Flex h='80%' direction={['column','column','row']} py={[0,0,50]} gap={[5,5,10]}>
                <Flex display={['none','none','flex']} w={'40vw'} position='relative'>
                    <ProfImg bgImg="/photo.png" />
                </Flex>
                <Flex display={['flex', 'flex', 'none']} h={'100%'} position='relative'>
                    <ProfImgResp bgImg="/photo.png" />
                </Flex>
                <Flex w={['100vw','100vw','60vw']} h={['100%','100%','90%']}>
                    <Center flexDirection={'column'} color='custom.300' textAlign={['center', 'center', 'left']} w={['100%','100%','80%']}>
                        <Text pt={[0,0,10]} w='100%' fontSize={30}>HI THERE,</Text>
                        <Text w='100%' fontFamily='heading' fontWeight='bold' fontSize={40} color='custom.400' >I&apos;m Annisa Dian Nugrahani</Text>
                        <Text w='100%' fontSize={20} mt={3}>a Final Year Computer Science Student</Text>
                        <Text w='100%' fontSize={20}>at Universitas Indonesia</Text>
                    </Center>
                </Flex>
            </Flex>
            <Flex h='20%' mt={[0,0,'-5%']}>
                <Container w='100%' zIndex={0} centerContent>
                    <Flex gap={4}>
                        <Box as='a' href="#Experiences">
                            <NavyButton>EXPERIENCES</NavyButton>
                        </Box>
                        <Box as='a' href="#Achievements">
                            <ToscaButton>ACHIEVEMENTS</ToscaButton>
                        </Box>
                        <Box>
                            <RedButton onClick={onOpen} >BIODATA</RedButton>
                            <BioModal isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
                        </Box>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
        </StyledWaves>
    )
}

export default Profile;