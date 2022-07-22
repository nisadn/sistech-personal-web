import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { LessButton, MoreButton, ToscaButton } from "../Custom/CustomButton";
import { BiEdit, BiLike } from 'react-icons/bi';
import CustomIcon from "../Custom/CustomIcon";
import { useEffect, useRef, useState } from "react";
import BlogModal from "../Custom/BlogModal";
import { blogApi } from "../../config/service/blogApi";

type BlogT = {
    id: string;
    title: string;
    content: string;
    like: number;
}

const LikeIcon = ({id, like}: {id: string, like: number}) => {

    const [likes, setLikes] = useState(like);

    const handleLike = () => {
        const likeBlog = async (data: any) => {
            blogApi.like(data).then((res) => setLikes(res.like));
        }
        
        likeBlog({id});
    };

    return (
        <Flex align='center' gap={1}>
            <CustomIcon as={BiLike} color='custom.500' activeCol="custom.502" onClick={handleLike} />
            <Flex m='auto' pt='10%' color='custom.500' fontSize='md' w='6'>{likes}</Flex>
        </Flex>
    )
}

const BlogBox = (props: BlogT) => {

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


const Blog = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await blogApi.get();
            setData(res);
        };

        fetchData();
    }, []);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    return ( data &&
        <Flex direction={'column'} w='100vw' minH='100vh' px='10%' py='6%' bg='custom.100'>
            <Flex mb={2}>
                <Text
                    fontFamily={'heading'} 
                    textAlign={'center'} 
                    w='100%' 
                    fontSize={'3xl'}
                    >Blog</Text>
            </Flex>
            <Flex mb={8} justifyContent='center'>
                <ToscaButton onClick={onOpen}>ADD BLOG</ToscaButton>
                <BlogModal isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
            </Flex>
            <Flex direction={'column'} gap={6}>
                {data.map((val: BlogT) => (
                    <Box key={val.id}>
                        <BlogBox id={val.id} title={val.title} content={val.content} like={val.like} />
                    </Box>
                ))}
            </Flex>
        </Flex>
    )
}

export default Blog;
