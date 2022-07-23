import { Flex, Icon, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { IoLocationSharp, IoPersonCircle } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { FaBirthdayCake, FaGraduationCap, FaLinkedin } from 'react-icons/fa';

interface IBio {
    finalRef: any;
    isOpen: any;
    onClose: any;
}

const BioModal: React.FC<IBio> = (props) => {
    const { finalRef, isOpen, onClose } = props;
    return (
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                <Flex justify='center' pt={2} fontFamily='heading' color='custom.400'>
                    Nisadian&apos;s Bio
                </Flex>
            </ModalHeader>
            <ModalBody mb={6}>
                <Flex direction='column' gap={2} px={2} color='custom.400'>
                {bio.map((val: Bio, index: number) => (
                <Flex key={index} gap={2}>
                    <Flex>
                    <Icon as={val.icon} w={6} h={6} aria-label='name' />
                    </Flex>
                    <Flex pt='1%'>{val.text}</Flex>
                </Flex>
                ))}
                </Flex>

            </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default BioModal;

type Bio = {
    icon: any;
    text: string;
}
const bio: Bio[] = [
    {
        icon: IoPersonCircle,
        text: 'Annisa Dian Nugrahani',
    },{
        icon: FaBirthdayCake,
        text: 'Sept 7, 2001'
    },{
        icon: FaGraduationCap,
        text: 'Final year Computer Science student, Universitas Indonesia',
    },{
        icon: IoLocationSharp,
        text: 'Depok, West Java, Indonesia',
    },{
        icon: IoMdMail,
        text: 'nugrahani07@gmail.com',
    },{
        icon: FaLinkedin,
        text: 'linkedin.com/in/annisa-dian-nugrahani-8345b7130/',
    }
]