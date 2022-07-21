import { Box, Flex, Text } from "@chakra-ui/react";
import { LessButton, MoreButton, ToscaButton } from "../Custom/CustomButton";
import { BiEdit, BiLike } from 'react-icons/bi';
import CustomIcon from "../Custom/CustomIcon";
import { useState } from "react";

type BlogT = {
    id: string;
    title: string;
    content: string;
    like: number;
}

const LikeIcon = ({like}: {like: number}) => {

    const [likes, setLikes] = useState(like);

    const handleLike = () => {
        setLikes(likes+1);
        console.log(likes);
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
                    <CustomIcon as={BiEdit} color='custom.300' activeCol="custom.302" />
                </Flex>
                <LikeIcon like={props.like} />
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

    return (
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
                <ToscaButton>ADD BLOG</ToscaButton>
            </Flex>
            <Flex direction={'column'} gap={6}>
                {blogs.map((val: BlogT) => (
                    <Box key={val.id}>
                        <BlogBox id={val.id} title={val.title} content={val.content} like={val.like} />
                    </Box>
                ))}
            </Flex>
        </Flex>
    )
}

export default Blog;

const blogs: BlogT[] = [
    {
        id: '1',
        title: 'tes blog',
        content: 'ok',
        like: 0,
    },{
        id: '2',
        title: 'Tes Blog Capitalized',
        content: 'content content content content content content content content content content content cont content content content content content content content content content content content content content content content content content content content content content content content cont content content content content content content content content content content content contentcontent content content content content content content content content content content cont content content content content content content content content content content content content ',
        like: 0,
    },{
        id: '3',
        title: 'Tes blog panjang',
        content: 'content content content content content content content content content content content cont content content content content content content content content content content content content content content content content content content content content content content content cont content content content content content content content content content content content contentcontent content content content content content content content content content content cont content content content content content content content content content content content content ',
        like: 0,
    },{
        id: '4',
        title: 'Tes blog sedikit',
        content: 'yak ini blog',
        like: 0,
    },{
        id: '5',
        title: 'ini tes lgi',
        content: 'lorem ipsum sir dolor amet',
        like: 0,
    }
];