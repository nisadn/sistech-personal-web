import { Box, Flex, Text } from "@chakra-ui/react";


const Achievements = () => {
    return (
        <Flex w='100vw' bg='special.200' pt='6%' pb='10%' px='20%' direction={'column'} id='Achievements'>
            <Flex mb={8}>
                <Text 
                    fontFamily={'heading'} 
                    textAlign={'center'} 
                    w='100%' 
                    fontSize={'3xl'}
                >Achievements</Text>
            </Flex>
            <Flex direction={'column'} gap={6}>
                {acv.map((val: Acv, index: number) => (
                    <Box boxShadow='md' bg='custom.100' borderRadius='10px' py={4} px={6} key={index} color='custom.400' fontSize='sm'>
                        <Text color='custom.500' fontWeight='extrabold' letterSpacing='4px'>{val.year}</Text>
                        <Text fontFamily={'heading'} fontWeight='extrabold' fontSize='md'>{val.title}</Text>
                        <Text fontFamily={'heading'} mb={2}>{val.subtitle}</Text>
                        <Text color='custom.300'>{val.content}</Text>
                    </Box>
                ))}
            </Flex>
        </Flex>
    )
}

export default Achievements;

type Acv = {
    year: string,
    title: string,
    subtitle: string,
    content: string,
}

const acv = [
    {
        year: '2022',
        title: 'Develop SIRCLO Learning Lab',
        subtitle: 'as college assignment for Software Engineering Project course',
        content: 'I took this course in the first half of 2022 and luckily we got SIRCLO as our client. Our team members — Alif Saddid, Ageng Anugrah, Machffud Tra Harana, Prajna, Wahib Adiyatma, Niti Cahyaning, and me — develop Learning Lab, a Learning Management System for the internal company, so the employees can increase their knowledge and competencies while the people development team can also monitor their progress. After one full semester of development, we successfully completed this project according to the client’s requirements.',
    },{
        year: '2021',
        title: 'First Place of Qur’an Application Design Competition',
        subtitle: 'at MTQ UI 2021',
        content: 'Along with Gita Permatasari and Syifa Rizka, we competed as our faculty representative at MTQ UI which held by Salam UI. The event was held on the second half of 2021. We develop UI/UX design for Quranic Circle, a mobile platform to provide users in learning and memorizing Al-Qur’an with qualified Ustadz/Ustadzah. We used User-Centered Design as our method to focusing on what users really need as our consideration during the design process.',
    }
]