import { Icon } from "@chakra-ui/react"

interface CIProps {
    as: any;
    color: any;
    activeCol?: string;
    onClick?: any;
}

const CustomIcon = (props: CIProps) => {
    return (
        <Icon 
            as={props.as} 
            _hover={{
                color: 'custom.100',
                transition: '0.3s',
                cursor: 'pointer',
                bg: `${props.color}`
            }} 
            _active={{
                color: 'custom.102',
                bg: `${props.activeCol}`
            }}
            w='7' h='7' color={props.color} 
            p={1}
            borderRadius='full'
            transition= '0.3s'
            aria-label='custom-icon'
            onClick={props.onClick} />
    )
}

export default CustomIcon;