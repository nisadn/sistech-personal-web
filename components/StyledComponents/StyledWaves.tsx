import styled from 'styled-components';

interface SProps {
    bgImg: string;
    bgColor: string;
    height?: string;
}

const StyledWaves = styled.div<Pick<SProps, 'bgImg' | 'bgColor' | 'height'>>`
    background-color: ${(props: any) => props.bgColor};
    background-image: url('${(props: any) => props.bgImg}');
    background-position: center bottom;
    background-size: contain;
    background-repeat: no-repeat;
    height: ${(props: any) => props.height ? props.height: '100vh'};
    width: 100vw;
`

export default StyledWaves;