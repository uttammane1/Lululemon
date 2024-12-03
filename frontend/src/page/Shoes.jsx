import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MenProduct from '../Component/MenProduct'
import ShoesProduct from '../Component/ShoesProduct'

const Shoes = () => {
  return (
    <div>
      <Flex>

<Box h="auto" w={300} >
  <Box fontSize={20} fontWeight={500} p={10} >Shoes</Box>
  <hr />
  <Box p={10}>
  <Text fontSize={20} fontWeight={500}>Catagory</Text>
  <Text>Slides</Text>
  <Text>Sneakers</Text>
  <Text>Cross Training Shoes</Text>
  <Text>Trail Training Shoes</Text>
  </Box>
  
</Box>
<Box>
  <Box >
    <img style={{width:"1030px", height:"300px"}} src="https://th.bing.com/th/id/OIP.24cSqpCRAwjBxKAs5lF4mgHaE8?w=342&h=186&c=7&r=0&o=5&pid=1.7" alt="" />
  </Box>
  <Text p={5} textDecoration="underline" textDecorationColor="gray">All Items</Text>
  <ShoesProduct/>
</Box>
</Flex>
    </div>
  )
}

export default Shoes