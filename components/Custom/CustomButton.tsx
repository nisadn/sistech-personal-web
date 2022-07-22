import { Button, Flex } from "@chakra-ui/react"

interface CustomProps {
    bg: any;
    size?: string;
    color?: string;
    children: any;
    onClick?: any;
    w?: any;
    type?: any;
}

interface BProps {
    children: any;
    size?: string;
    onClick?: any;
    w?: any;
    type?: any;
}

const CustomButton = (props: CustomProps) => {
    return (
        <Button 
            borderRadius={'full'} 
            bg={props.bg.default} 
            color={props.color ? props.color : 'white'}  
            fontWeight={'regular'}
            size={props.size ? props.size : 'md'}
            _hover={{
                bg:`${props.bg.hover}`,
                transform:'scale(105%)',
                transition:`${props.size === 'sm' ? '0.3s' : '0.5s'}`
            }}
            _active={{
                bg:`${props.bg.active}`
            }}
            onClick={props.onClick}
            w={props.w}
            type={props.type}
        >
            <Flex pt='5%' >
                {props.children}
            </Flex>
        </Button>
    )
}

const ToscaButton = (props: BProps) => {
    return (
        <CustomButton bg={{default: 'custom.300', hover: 'custom.301', active: 'custom.302'}} 
            size={props.size} w={props.w} onClick={props.onClick} type={props.type}>
                {props.children}
        </CustomButton>
    )
}

const RedButton = (props: BProps) => {
    return (
        <CustomButton bg={{default: 'custom.500', hover: 'custom.501', active: 'custom.502'}} 
            size={props.size} w={props.w} onClick={props.onClick} type={props.type}>
                {props.children}
        </CustomButton>
    )
}

const MoreButton = (props: BProps) => {
    return (
        <CustomButton 
            bg={{default: 'custom.200', hover: 'custom.201', active: 'custom.202'}}
            color='custom.400'
            size='xs'
            onClick={props.onClick}
        >{props.children}</CustomButton>
    )
}

const LessButton = (props: BProps) => {
    return (
        <CustomButton 
            bg={{default: 'custom.300', hover: 'custom.301', active: 'custom.302'}}
            size='xs'
            onClick={props.onClick}
        >{props.children}</CustomButton>
    )
}

export { ToscaButton, RedButton, MoreButton, LessButton }