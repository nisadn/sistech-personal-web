import { Box, Center, Flex, Heading, Square, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Profile } from '../components/Container'

const Home: NextPage = () => {
  return (
    <Flex direction={'column'}>
      <Profile />
    </Flex>
  )
}

export default Home
