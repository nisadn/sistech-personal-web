import { Button } from "@chakra-ui/react"

interface CustomProps {
    bg: any;
    size?: string;
    color?: string;
    children: any;
}

interface BProps {
    children: any;
    size?: string;
}

const CustomButton = (props: CustomProps) => {
    return (
        <Button 
            borderRadius={'full'} 
            pt={1}
            bg={props.bg.default} 
            color={props.color ? props.color : 'white'}  
            fontWeight={'regular'}
            size={props.size ? props.size : 'md'}
            _hover={{
                bg:`${props.bg.hover}`,
                transform:'scale(105%)',
                transition:'0.5s'
            }}
            _active={{
                bg:`${props.bg.active}`
            }}
        >
            {props.children.toUpperCase()}
        </Button>
    )
}

const ToscaButton = (props: BProps) => {
    return (
        <CustomButton bg={{default: 'custom.300', hover: '#37627E', active: '#294A5E'}} size={props.size}>{props.children}</CustomButton>
    )
}

const RedButton = ({children}: {children: any}) => {
    return (
        <CustomButton bg={{default: 'custom.500', hover: '#CF333F', active: '#8A222A'}}>{children}</CustomButton>
    )
}

const MoreButton = ({children}: {children: any}) => {
    return (
        <CustomButton 
            bg={{default: 'custom.200', hover: '#CF333F', active: '#8A222A'}}
            color='custom.300'
            size='sm'
        >{children}</CustomButton>
    )
}

export { ToscaButton, RedButton, MoreButton }