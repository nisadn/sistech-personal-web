import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { blogApi } from "../../config/service/blogApi";
import { CustomIcon } from "./";


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

export default LikeIcon;