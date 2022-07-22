import { Flex, Spinner } from "@chakra-ui/react"

const Loading = () => {
    return (
        <Flex direction="column" align='center' gap={4}>
            <Flex>
                <Spinner
                    thickness='6px'
                    speed='0.65s'
                    emptyColor='custom.300'
                    color='custom.200'
                    size='xl'
                />
            </Flex>
            <Flex color='custom.400'>
                Loading page...
            </Flex>
        </Flex>
    )
}

export default Loading