import { Box, Center, Flex, Heading, Square, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Achievements, Experiences, Profile } from '../components/Container'
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex direction={'column'}>
        <Profile />
        <Experiences />
        <Achievements />
      </Flex>
    </Layout>
  )
}

export default Home
