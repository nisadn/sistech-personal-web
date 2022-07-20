import { Box, Center, Flex, Grid, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { StyledWaves } from "../StyledComponents";

const Experiences = () => {
    return (
        <StyledWaves bgImg="/waves2.svg" bgColor="#F1FAEE" height="100%">
            <Flex pt='2%' pb='10%' px='20%' direction={'column'}>
                <Flex mb={8}>
                    <Text 
                        fontFamily={'heading'} 
                        textAlign={'center'} 
                        w='100%' 
                        fontSize={'3xl'}
                        id='Experiences'
                    >Experiences</Text>
                </Flex>
                <Grid
                    templateRows={`repeat(${exp.length}, fit)`}
                    gap={4}
                    color='custom.300'
                >
                    {exp.map((val: Exp, index: number) => (
                        <GridItem key={index}>
                        <Grid 
                            templateColumns={'1fr 0.15fr 2.85fr'}
                            gap={4}
                        >
                            <GridItem textAlign={'right'}>{val.year}</GridItem>
                            <GridItem>
                                <StyleBullet />
                                {!val.isLast && <LongLine />}
                            </GridItem>
                            <GridItem>
                                <Flex direction={'column'}>
                                    <Flex fontFamily={'heading'} fontSize='md' fontWeight={'bold'} color='custom.400'>{val.title.toUpperCase()}</Flex>
                                    <Flex color='custom.500'>{val.company}</Flex>
                                    {val.desc && <Flex fontSize='sm'>{val.desc}</Flex>}
                                </Flex>
                            </GridItem>
                        </Grid>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </StyledWaves>
    )
}

export default Experiences;

const StyleBullet = styled.div`
    width: 8px;
    height: 8px;
    background-color: #A8DADC;
    border-radius: 10px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`

const LongLine = styled.div`
    width: 2px;
    height: 100%;
    background-color: #C5E6E4;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
`

type Exp = {
    year: string,
    title: string,
    company: string,
    desc?: string,
    isLast?: boolean,
}

const exp: Exp[] = [
    {
        year: 'FEB 2022 - PRESENT',
        title: 'SECRETARY',
        company: 'FUKI Fasilkom UI',
    },{
        year: 'JAN 2021 - JUN 2022',
        title: 'TEACHING ASSISTANT',
        company: 'Faculty of Computer Science, Universitas Indonesia',
        desc: 'Discrete Mathematics 1, Integrated Personality Development, Data Structure & Algorithm, Programming Foundations 1',
    },{
        year: 'FEB 2021 - JAN 2022 ',
        title: 'HEAD OF MEDIA BUREAU',
        company: 'FUKI Fasilkom UI',
    },{
        year: 'FEB 2020 - DEC 2020 ',
        title: 'Staff of KMF Bureau',
        company: 'FUKI Fasilkom UI',
    },{
        year: 'MAY 2020 - NOV 2020',
        title: 'VPIC of Documentation and Creative',
        company: 'SIWAK-NG 2020',
    },{
        year: 'DEC 2019 - JUN 2020',
        title: 'Staff of Creative',
        company: 'Betis Fasilkom UI',
        isLast: true,
    },
]