import { Formik, Field } from 'formik'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Textarea,
  HStack,
  Text,
  Image,
} from '@chakra-ui/react'

import {
  openModalError,
  openModalSuccess,
} from '../../layout/sharedSlice/sharedSlice'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import { useNavigate } from 'react-router-dom'
const variantButton = {
  left: {
    x: -100,
    transition: {
      duration: 0.1,
    },
  },
  right: {
    x: 100,
    transition: {
      duration: 0.1,
    },
  },
  middle: {
    x: 0,
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
}
const ContactUs = () => {
  const navigate = useNavigate()
  const [index, setIndex] = useState(-1)
  const formikRef: any = useRef()
  const [isHover, setIsHover] = useState(false)

  const controlButton = useAnimation()

   
  const onHoverAnimation = async () => {
    if (!isHover) {
      setIsHover(true)
      if (index > 2) {
        setIndex(0)
        return
      }

      setIndex(index + 1)
    }
  }

  function validateEmail(value: string) {
    let error
    if (!value) {
      error = 'Saisir votre adresse email'
    } else if (
      !/^[a-zA-Z]+[a-zA-Z0-9]+[_.{1}]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[-.{1}]?[a-zA-Z0-9]+[.][a-zA-Z.]{2,}$/i.test(
        value
      )
    ) {
      error = 'Address email invalide'
    }
    return error
  }

  return (
    <Flex align="center" justify="center">
      <Box
        my="4rem"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        bg="white"
        p={6}
        rounded="md"
        w={480}
        zIndex={15}
        position="relative"
      >
        <Text
          padding={10}
          textTransform="capitalize"
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          fontWeight="extrabold"
          textAlign="center"
        >
          Restons en contact
        </Text>
        <Formik
          innerRef={formikRef}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          }}
          onSubmit={(values) => {
          
            navigate('/')
          }}
        >
          {({ handleSubmit, errors, touched, isValid, dirty }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <HStack>
                  <FormControl
                    isInvalid={!!errors.firstName && touched.firstName}
                  >
                    <FormLabel htmlFor="firstName"> Nom </FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type="text"
                      variant="filled"
                      validate={(value: string) => {
                        let error
                        if (value === '') {
                          error = 'Saisir votre nom'
                        }
                        return error
                      }}
                    />
                    <Box height="2rem">
                      <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.lastName && touched.lastName}
                  >
                    <FormLabel htmlFor="lastName">Pr??nom</FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="text"
                      variant="filled"
                      validate={(value: string) => {
                        let error
                        if (value === '') {
                          error = 'Saisir votre pr??nom'
                        }
                        return error
                      }}
                    />
                    <Box height="2rem">
                      <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </Box>
                  </FormControl>
                </HStack>

                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Adresse email</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={validateEmail}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.message && touched.message}>
                  <FormLabel htmlFor="message">Votre message</FormLabel>
                  <Field
                    as={Textarea}
                    id="message"
                    name="message"
                    type="text"
                    variant="filled"
                    validate={(value: string) => {
                      let error
                      if (value === '') {
                        error = 'Message est obligatoire'
                      }
                      return error
                    }}
                  />
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                <Flex justifyContent="center" w="full">
                  <Button
                    type="submit"
                    bg="primary.500"
                    onMouseOver={onHoverAnimation}
                    color="white"
                    _hover={{ background: 'primary.600' }}
                    width="max-content"
                    mx="auto"
                    display="block"
                    transition="all .3s ease"
                    onClick={() => {
                      if (
                        formikRef.current?.isValid &&
                        formikRef.current?.dirty
                      ) {
                        handleSubmit()
                      } else {
                        
                        
                            
                             
                            
                      }  
                      }
                      }
                    
                  >
                    send
                  </Button>
                </Flex>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default ContactUs
