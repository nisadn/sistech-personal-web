import { Icon } from "@chakra-ui/react"

interface CIProps {
    as: any;
    color: any;
    activeCol?: string;
    onClick?: any;
}

const CustomIcon = (props: CIProps) => {
    const { as, color, activeCol, onClick } = props;

    return (
        <Icon 
            as={as} 
            _hover={{
                color: 'custom.100',
                transition: '0.3s',
                cursor: 'pointer',
                bg: `${color}`
            }} 
            _active={{
                color: 'custom.102',
                bg: `${activeCol}`
            }}
            w='7' h='7' color={color} 
            p={1}
            borderRadius='full'
            transition= '0.3s'
            aria-label='custom-icon'
            onClick={onClick} />
    )
}

export default CustomIcon;