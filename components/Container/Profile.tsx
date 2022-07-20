import { Box, Button, Center, Container, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { RedButton, ToscaButton } from "../Button/CustomButton";

const Profile = () => {
    return (
        <Flex w={'100vw'} h={'100vh'} bg={'custom.200'} maxWidth={'100%'} position={'relative'} direction='column'>
            <Flex h='70%'>
                <Flex w={'40vw'} position='relative'>
                    <Image
                        position={'absolute'}
                        right={0}
                        bottom={0}
                        src='/profile.png'
                        boxSize='300px'
                        objectFit='cover'
                    />
                </Flex>
                <Flex w={'60vw'}>
                    <Center flexDirection={'column'} color='custom.300' textAlign={'left'}>
                        <Text pt={10} w='100%' fontSize={30}>HI THERE,</Text>
                        <Text w='100%' fontFamily='heading' fontWeight='bold' fontSize={40} color='custom.400'>I'm Annisa Dian Nugrahani</Text>
                        <Text w='100%' fontSize={20}>a Final Year Computer Science Student</Text>
                        <Text w='100%' fontSize={20}>at Universitas Indonesia</Text>
                    </Center>
                </Flex>
            </Flex>
            <Flex h='30%'>
                <Image
                    bottom={0}
                    position={'absolute'}
                    src='/waves3.svg'
                />
                <Container w='100%' zIndex={0} centerContent>
                    <Flex gap={4}>
                    <ToscaButton>Experiences</ToscaButton>
                    <RedButton>Achievements</RedButton>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    )
}

export default Profile;