import { Box, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

 const Navbar = () => {
  return (
    <Flex gap={10}>
        <Link href={'/'}>
          <Button> Muhammed Sadique</Button>  </Link>
        <Link href={'/project'}>
          <Button> Project</Button>
         </Link>
    </Flex>
  )
}

export default Navbar
