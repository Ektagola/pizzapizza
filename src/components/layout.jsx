import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <Box maxW={'full'} bgColor="white">
        <Navbar/>
        { children }
        <Footer/>
    </Box>
  )
}
