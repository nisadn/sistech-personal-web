import styled from "styled-components";

interface SProps {
    bgImg: string;
}

const ProfImg = styled.div<Pick<SProps, 'bgImg'>>`
background-image: url('${(props: any) => props.bgImg}');
background-position: right center;
background-size: 50%;
background-repeat: no-repeat;
height: 100%;
width: 100%;
border-radius: 50px;
`

const ProfImgResp = styled.div<Pick<SProps, 'bgImg'>>`
background-image: url('${(props: any) => props.bgImg}');
background-position: center bottom;
background-size: 40%;
background-repeat: no-repeat;
height: 100%;
width: 100%;
border-radius: 50px;
`

export { ProfImg, ProfImgResp };