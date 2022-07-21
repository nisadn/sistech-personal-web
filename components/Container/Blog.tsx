import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { ToscaButton } from "../Button/CustomButton";
import { BiEdit, BiLike } from 'react-icons/bi';


const Blog = () => {
    return (
        <Flex direction={'column'} w='100vw' h='100vh' px='10%' py='6%' bg='custom.100'>
            <Flex mb={2}>
                {/* <Flex w='100%'> */}
                <Text
                    fontFamily={'heading'} 
                    textAlign={'center'} 
                    w='100%' 
                    fontSize={'3xl'}
                    // fontWeight='bold'
                    >Blog</Text>
                {/* </Flex> */}
            </Flex>
            <Flex mb={8} justifyContent='center'>
                <ToscaButton>Add Blog</ToscaButton>
            </Flex>
            <Flex direction={'column'} gap={6}>
                <Box boxShadow='md' bg='white' borderRadius='10px' py={4} px={6} color='custom.400' fontSize='md' 
                    display='flex'
                    flexDirection='column'
                >
                    <Flex>
                        <Flex w='100%' align='center' bg='black'>
                            <Text fontFamily={'heading'} fontWeight='extrabold' fontSize='md'>Judul</Text>
                        </Flex>
                        <IconButton variant={'ghost'} icon={<BiEdit size='20px' />} aria-label='edit' />
                        <Flex align='center' gap={1}>
                            <Icon as={BiLike} w='20px' h='20px' color='custom.500' aria-label='edit' />
                            <Flex m='auto' pt={1} color='custom.500' fontSize='md'>99</Flex>
                        </Flex>
                    </Flex>
                    <Text color='custom.300'>{content}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Blog;

const content = 'content content content content content content content content content content content cont content content content content content content content content content content content content '