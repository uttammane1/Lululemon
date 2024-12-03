import { Box, Button, Flex ,Text} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MenData = () => {
    const [data1,setData1]=useState({});
    const{Id}=useParams()

    useEffect(()=>{
        fetch(`http://localhost:5050/men/${Id}`)
        .then(e=>e.json())
        .then(e=>setData1(e))
    })
  return (
    <div>
      <Flex justifyContent="space-evenly">
      <Box w={400} border="2px solid"  ><img src={data1?.image} alt="" /></Box>
        <Box>
        <Box marginTop={8} fontSize={35} fontWeight={500} textAlign="center">{data1?.name}</Box>
        <Flex gap={5} marginTop={8} fontSize={35} fontWeight={500} textAlign="center"> <Text color="#c8102e">Price</Text> : {data1?.price}</Flex>
        <Flex gap={5} marginTop={8} fontSize={35} fontWeight={500} textAlign="center"> <Text color="#c8102e">Category</Text>: {data1?.category}</Flex>
        <Box textAlign="center" marginTop={12}><Button p={2} width={400} size='lg' backgroundColor="#c8102e" color="white" border="1px solid black">ADD TO BAG</Button></Box>
           
        </Box>
      
      </Flex>
         
    </div>
  )
}

export default MenData