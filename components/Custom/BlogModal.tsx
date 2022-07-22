import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { RedButton, ToscaButton } from "./CustomButton";

interface IModal {
    finalRef: any;
    isOpen: any;
    onClose: any;
    isUpdate?: boolean;
    defaultTitle?: string;
    defaultContent?: string;
}

const BlogModal = (props: IModal) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data, errors);

    return (
        <Modal finalFocusRef={props.finalRef} isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                <Flex justify='center' pt={2} fontFamily='heading'>
                    {props.isUpdate ? 'Update Blog': 'Add Blog'}
                </Flex>
            </ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>

                <FormControl isInvalid={errors.title !== undefined}>
                    <FormLabel fontWeight={'semibold'}>Title</FormLabel>
                    <Input 
                        value={props.defaultTitle} 
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
                        value={props.defaultContent}
                        placeholder='Insert content here'
                        {...register("content", {required: true})}
                    />
                    <FormErrorMessage>This field is required</FormErrorMessage>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Flex w='100%' justify='center' gap={4}>
                <ToscaButton type='submit' w='25%' >{props.isUpdate ? 'UPDATE' : 'ADD'}</ToscaButton>
                <RedButton w='25%' onClick={props.onClose} >CANCEL</RedButton>
                </Flex>
            </ModalFooter>

            </form>
            </ModalContent>
        </Modal>
    )
}

export default BlogModal;