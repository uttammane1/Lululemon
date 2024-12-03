import React from 'react'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { IoBagHandleSharp } from "react-icons/io5";
import { GiPriceTag } from "react-icons/gi";
import { MdVideoSettings } from "react-icons/md";
import { MdRememberMe } from "react-icons/md";
import { BsBox2HeartFill } from "react-icons/bs";
import { MdOutlineCropFree } from "react-icons/md";

const SignIn = () => {
  return (
    <div>
    <Text marginTop={8} fontSize={45} fontWeight={700} textAlign="center">Wellbeing made easier. We’ve got you.</Text>
    <hr aria-setsize={100}/>
    <Flex justifyContent="space-evenly">
      <Box>
        <Box>
          <Text marginTop={8} fontSize={25} fontWeight={700} textAlign="center">Discover lululemon Membership</Text>
          <Text textAlign="center" marginTop={5}>One account. Tons of benefits. Endless possibilities.</Text>
        </Box>
        <Flex textAlign="center" flexDirection="column" justifyContent="center" gap={5}>
          <Text marginTop={8} fontSize={25} fontWeight={700} textAlign="center">Membership benefits include</Text>
          <Flex alignItems="center" gap={5}><IoBagHandleSharp /><Text>Early Access to Product Drops</Text></Flex>
          <Flex  alignItems="center" gap={5}><GiPriceTag /><Text>Exchange or Credit on Sale Items</Text></Flex>
          <Flex alignItems="center" gap={5}><MdVideoSettings /><Text>Select Peloton Classes</Text></Flex>
          <Flex alignItems="center" gap={5}><MdRememberMe /><Text>Membership Events</Text></Flex>
          <Flex alignItems="center" gap={5}><BsBox2HeartFill /><Text>Receipt-Free Returns</Text></Flex>
          <Flex alignItems="center" gap={5}><MdOutlineCropFree /><Text>Early Access to Product Drops</Text></Flex>
        </Flex>
      </Box>
      <hr />
      <Box>
      <Text marginTop={8} fontSize={25} fontWeight={700} textAlign="center">Sign in to your member account</Text>
      <Flex flexDirection="column">
        <Box>
          <Text>Email address</Text>
          <Input placeholder='' size='lg' />
        </Box>
        <Box>
          <Text>Password</Text>
          <Input placeholder='' size='lg' />
        </Box>
        <Text>Forgot Your Password</Text>
        <Box textAlign="center" marginTop={12}><Button p={2} width={500} size='lg' backgroundColor="#c8102e" color="white" border="1px solid black">SIGN IN</Button></Box>
        <Text marginTop={10}>By signing in, you agree to the Terms of Use and acknowledge the Privacy</Text>
        <Text>Policy. California consumers, see our Notice of Financial Incentives.</Text>
        <hr />
        <Text marginTop={8} fontSize={25} fontWeight={700} textAlign="center">Create a member account</Text>
      </Flex>
      </Box>
    </Flex>
    </div>
  )
}

export default SignIn