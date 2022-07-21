import { Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react"
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
    return (
        <Modal finalFocusRef={props.finalRef} isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                <Flex justify='center' pt={2} fontFamily='heading'>
                    {props.isUpdate ? 'Update Blog': 'Add Blog'}
                </Flex>
            </ModalHeader>
            <ModalBody>
                <FormControl>
                    <FormLabel fontWeight={'semibold'}>Title</FormLabel>
                    <Input placeholder='Insert title here' value={props.defaultTitle} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel fontWeight={'semibold'}>Content</FormLabel>
                    <Textarea
                        value={props.defaultContent}
                        placeholder='Insert content here'
                    />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Flex w='100%' justify='center' gap={4}>
                <ToscaButton w='25%' >{props.isUpdate ? 'UPDATE' : 'ADD'}</ToscaButton>
                <RedButton w='25%' onClick={props.onClose} >CANCEL</RedButton>
                </Flex>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default BlogModal;