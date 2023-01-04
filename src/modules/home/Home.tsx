/* eslint-disable */

import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  ImageProps,
  Img,
  shouldForwardProp,
  Text,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import coverPicture from '../../assets/landing/cover.svg'
import bottomNavbarImage from '../../assets/landing/navbar.png'
import AnimatedText from './components/AnimatedText'

import Services from './components/Services'

const Home = () => {
  
  // const ChakraImage = chakra(motion.img, {
  //   /**
  //    * Allow motion props and non-Chakra props to be forwarded.
  //    */
  //   shouldForwardProp: (prop) =>
  //     isValidMotionProp(prop) || shouldForwardProp(prop),
  // })
  const ChakraImage = motion<Omit<ImageProps, 'transition'>>(Image)
  return (
    <Box >
      <Flex
        h="calc(100vh - 7rem)"
        w="100%"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="15"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        flexDirection={{ base: 'row-reverse', md: 'row' }}
      >
        <Flex
          flexDirection="column"
          mx="auto"
          mt="-5rem"
          gap=".5rem"
          order={{ base: 2, md: 'unset' }}
        >
          <AnimatedText
            as="h1"
            fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
            fontWeight="bold"
            color="primary.700"
            textAlign="left"
            maxW="30rem"
            letterSpacing={'.2rem'}
            text="ProSports"
          />

          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            textAlign="left"
            maxW="30rem"
          >
            Une bonne santé, c'est d'abord une bonne alimentation.
          </Text>
          <Text maxW="30rem">
          Vous voulez faire plus attention à ce que vous mangez ? Faites un suivi de vos repas, apprenez-en plus sur vos habitudes et atteignez vos objectifs avec ProSports.
          </Text>
          <Flex gap=".5rem" mt="1rem">
            <Link to="/auth/register">
              <Button
                color="white"
                colorScheme="primary"
                size={{ base: 'md', md: 'lg' }}
              >
                Rejoindre Nous
              </Button>
            </Link>
            <Link to={'/contactus'}>
              <Button size="lg">Contact Us</Button>
            </Link>
          </Flex>
        </Flex>
        <Box flexBasis="50%">
          <ChakraImage
            animate={{
              y: 20,
            }}
            w="80%"
            src={coverPicture}
            alt="cocver"
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        </Box>
      </Flex>
      <Img
        height="5rem"
        mt="-2rem"
        position="absolute"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-6"
      />
      <Services />
    </Box>
  )
}

export default Home
