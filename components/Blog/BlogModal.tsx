import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { blogApi } from "../../config/service/blogApi";
import { RedButton, ToscaButton } from "./";

type BlogT = {
    id: string;
    title: string;
    content: string;
}

interface IModal {
    id?: any;
    finalRef: any;
    isOpen: any;
    onClose: any;
    isUpdate?: boolean;
    defaultTitle?: string;
    defaultContent?: string;
}

const BlogModal = (props: IModal) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [ loadSubmit, setLoadSubmit ] = useState(false);

    const onSubmit = (data: any) => {
        const updateBlog = async (data: BlogT) => {
            blogApi.update(data).then(() => {
                router.reload();
            })
        }

        const createBlog = async (data: BlogT) => {
            blogApi.create(data).then(() => {
                router.reload();
            })
        }

        setLoadSubmit(true);
        data.id = props.id;

        if (props.isUpdate) {
            updateBlog(data);
        } else {
            createBlog(data);
        }
    };

    return (
        <Modal size={['xs','xl','3xl']} finalFocusRef={props.finalRef} isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                <Flex justify='center' pt={2} fontFamily='heading' color='custom.400'>
                    {props.isUpdate ? 'Update Blog': 'Add Blog'}
                </Flex>
            </ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>

                <FormControl isInvalid={errors.title !== undefined}>
                    <FormLabel fontWeight={'semibold'}>Title</FormLabel>
                    <Input 
                        defaultValue={props.defaultTitle} 
                        placeholder='Insert title here' 
                        {...register("title", {
                            required: true, 
                            maxLength: 100
                        })} 
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isInvalid={errors.content !== undefined}>
                    <FormLabel fontWeight={'semibold'}>Content</FormLabel>
                    <Textarea
                        defaultValue={props.defaultContent}
                        placeholder='Insert content here'
                        minHeight={['300px','300px','250px']}
                        {...register("content", {required: true})}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Flex w='100%' justify='center' gap={4}>
                <ToscaButton type='submit' w='25%' isLoading={loadSubmit} >{props.isUpdate ? 'UPDATE' : 'ADD'}</ToscaButton>
                <RedButton w='25%' onClick={props.onClose} >CANCEL</RedButton>
                </Flex>
            </ModalFooter>

            </form>
            </ModalContent>
        </Modal>
    )
}

export default BlogModal;