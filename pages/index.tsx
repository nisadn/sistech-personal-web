import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Achievements, Experiences, Profile } from '../components/Container'
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout page='home' >
      <Flex direction={'column'}>
        <Profile />
        <Experiences />
        <Achievements />
      </Flex>
    </Layout>
  )
}

export default Home
