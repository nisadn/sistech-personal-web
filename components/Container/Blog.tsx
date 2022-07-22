import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { blogApi } from "../../config/service/blogApi";
import { BlogCard, BlogModal, ToscaButton } from "../Blog";
import { Loading } from "../Common";

type BlogT = {
    id: string;
    title: string;
    content: string;
    like: number;
}

const Blog = () => {

    const [data, setData] = useState<[]>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await blogApi.get();
            setData(res);
        };

        fetchData();
    }, []);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef(null);

    return ( 
        <Flex direction={'column'} w='100vw' minH='100vh' px={['5%','10%','10%']} py={['18%','18%','6%']} bg='custom.100'>
            <Flex mb={2}>
                <Text
                    fontFamily={'heading'} 
                    textAlign={'center'} 
                    w='100%' 
                    fontSize={'3xl'}
                    color='custom.400'
                    >Blog</Text>
            </Flex>
            <Flex mb={8} justifyContent='center'>
                <ToscaButton onClick={onOpen}>ADD BLOG</ToscaButton>
                <BlogModal isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
            </Flex>
            <Flex direction={'column'} gap={6}>
            {data ?  
                data.map((val: BlogT) => (
                    <Box key={val.id}>
                        <BlogCard id={val.id} title={val.title} content={val.content} like={val.like} />
                    </Box>
                ))
            : <Loading />}
            </Flex>
        </Flex>
    )
}

export default Blog;
