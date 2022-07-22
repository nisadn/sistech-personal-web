import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CustomIcon, BlogModal, LikeIcon, MoreButton, LessButton } from "./";

type BlogT = {
    id: string;
    title: string;
    content: string;
    like: number;
}

const BlogCard = (props: BlogT) => {

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    return (
        <Box boxShadow='md' bg='white' borderRadius='10px' py={4} px={6} color='custom.400' key={props.id} fontSize='md' 
            display='flex'
            flexDirection='column'
            gap={4}
        >
            <Flex gap={1}>
                <Flex w='100%' align='center'>
                    <Text fontFamily={'heading'} fontWeight='extrabold' fontSize='md'>{props.title}</Text>
                </Flex>
                <Flex align='center'>
                    <CustomIcon as={BiEdit} onClick={onOpen} color='custom.300' activeCol="custom.302" />
                    <BlogModal id={props.id} isOpen={isOpen} onClose={onClose} finalRef={finalRef} isUpdate defaultContent={props.content} defaultTitle={props.title} />
                </Flex>
                <LikeIcon id={props.id} like={props.like} />
            </Flex>
            {props.content.length > 300 ? 
            <Flex direction='column' gap={2}>
                <Text color='custom.300'>
                    {isReadMore ? props.content.substring(0, 300) + '...' : props.content}
                </Text>
                <Flex>
                {isReadMore ? 
                    <MoreButton onClick={toggleReadMore}>
                        READ MORE
                    </MoreButton> : 
                    <LessButton onClick={toggleReadMore}>
                        SHOW LESS
                    </LessButton>
                }
                </Flex>
            </Flex>
            : 
            <Flex>
                <Text color='custom.300'>{props.content}</Text>
            </Flex>
            }
        </Box>
    )
}

export default BlogCard;