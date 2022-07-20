import { Button } from "@chakra-ui/react"

const CustomButton = ({bg, children}: {bg: any, children: any}) => {
    return (
        <Button 
            borderRadius={'full'} 
            pt={1}
            bg={bg.default} 
            color='white' 
            fontWeight={'regular'}
            _hover={{
                bg:`${bg.hover}`,
                transform:'scale(105%)',
                transition:'0.5s'
            }}
            _active={{
                bg:`${bg.active}`
            }}
        >
            {children.toUpperCase()}
        </Button>
    )
}

const ToscaButton = ({children}: {children: any}) => {
    return (
        <CustomButton bg={{default: 'custom.300', hover: '#37627E', active: '#294A5E'}}>{children}</CustomButton>
    )
}

const RedButton = ({children}: {children: any}) => {
    return (
        <CustomButton bg={{default: 'custom.500', hover: '#CF333F', active: '#8A222A'}}>{children}</CustomButton>
    )
}

export { ToscaButton, RedButton }