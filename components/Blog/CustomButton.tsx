import { Button, Flex } from "@chakra-ui/react"
import React from "react";

interface CustomProps {
    bgList: any;
    size?: string;
    color?: string;
    children: any;
    onClick?: any;
    w?: any;
    type?: any;
    isLoading?: boolean;
}

interface BProps {
    children: any;
    size?: string;
    onClick?: any;
    w?: any;
    type?: any;
    isLoading?: boolean;
}

const CustomButton: React.FC<CustomProps> = (props) => {
    const { children, bgList, size, color, onClick, w, type, isLoading } = props;
    return (
        <Button 
            borderRadius={'full'} 
            bg={bgList.default} 
            color={color ? color : 'white'}  
            fontWeight={'regular'}
            size={size ? size : 'md'}
            _hover={{
                bg:`${bgList.hover}`,
                transform:'scale(105%)',
                transition:`${size === 'sm' ? '0.3s' : '0.5s'}`
            }}
            _active={{
                bg:`${bgList.active}`
            }}
            onClick={onClick}
            w={w}
            type={type}
            isLoading={isLoading}
        >
            <Flex pt='5%' >
                {children}
            </Flex>
        </Button>
    )
}

const ToscaButton: React.FC<BProps> = (props) => {
    const { size, w, onClick, type, children, isLoading } = props;
    return (
        <CustomButton bgList={{default: 'custom.300', hover: 'custom.301', active: 'custom.302'}} 
            size={size} w={w} onClick={onClick} type={type} isLoading={isLoading}>
                {children}
        </CustomButton>
    )
}

const RedButton: React.FC<BProps> = (props) => {
    const { size, w, onClick, type, children } = props;
    return (
        <CustomButton bgList={{default: 'custom.500', hover: 'custom.501', active: 'custom.502'}} 
            size={size} w={w} onClick={onClick} type={type}>
            {children}
        </CustomButton>
    )
}

const MoreButton: React.FC<BProps> = (props) => {
    const { onClick, children } = props;
    return (
        <CustomButton 
            bgList={{default: 'custom.200', hover: 'custom.201', active: 'custom.202'}}
            color='custom.400' size='xs' onClick={onClick}
        >{children}</CustomButton>
    )
}

const LessButton: React.FC<BProps> = (props) => {
    const { onClick, children } = props;
    return (
        <CustomButton 
            bgList={{default: 'custom.300', hover: 'custom.301', active: 'custom.302'}}
            size='xs' onClick={onClick}
        >{children}</CustomButton>
    )
}

export { ToscaButton, RedButton, MoreButton, LessButton }