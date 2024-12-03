import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io5";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { GiChoice } from "react-icons/gi";
import { Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div style={{padding:"5px"}}>
        <Flex flexDirection="column" gap={8} p={5}>
        <Box>
            
        <Flex justifyContent="start" gap={180}>
            <Flex flexDirection="column" gap={5}>
                <Box fontWeight={500}>MY ACCOUNT</Box>
                <Flex flexDirection="column" gap={4}>
                    <p>Membership Program</p>
                    <p>Sign In</p>
                    <p>Register</p>
                    <p>Order Status</p>
                    <p>Returns</p>
                </Flex>
            </Flex>

            <Flex flexDirection="column" gap={5}>
                <Box fontWeight={500}>HELP</Box>
                <Flex flexDirection="column" gap={4}>
                    <p>FAQ</p>
                    <p>Accessibility Statement</p>
                    <p>Services</p>
                    <p>Shipping Policy</p>
                    <p>Returns</p>
                    <p>Redeem Gifts Cards</p>
                    <p>Sizing</p>
                    <p>Our Products</p>
                </Flex>
            </Flex>

            <Flex flexDirection="column" gap={5}>
                <Box fontWeight={500}>ABOUT US</Box>
                <Flex flexDirection="column" gap={4}>
                    <p>Our Business</p>
                    <p>Media</p>
                    <p>Investors</p>
                    <p>Strategic Sales</p>
                    <p>Affiliates and Creators</p>
                    <p>Sweat Collective</p>
                    <p>FURTHER</p>
                </Flex>
            </Flex>

            <Flex flexDirection="column" gap={5}>
                <Box fontWeight={500}>CONTACT US</Box>
                <Flex flexDirection="column" gap={4}>
                    <p>Live Chat</p>
                    <p>Email Sign Up</p>
                    <p>Contact Us</p>
                </Flex>
            </Flex>
        </Flex>
        </Box>

        <Box>
            <Flex justifyContent="start" gap={180}>
        
                <Flex flexDirection="column" gap={4} fontWeight={500}>
                    <p>CAREERS</p>
                    <p>COMMUNITY</p>
                    <p>LIKE NEW</p>
                    <p>SUSTAINABILITY</p>
                    <p>SOCIAL IMPACT</p>
                    <p>DEVERSITY AND INCLUSION</p>
                    <p>LULULEMON APPS</p>
                    <p>SITEMAP</p>
                </Flex>
        

            
                <Flex flexDirection="column" gap={4}>
                    <Box fontWeight={500}>GIFT CARDS</Box>
                    <Box fontWeight={500}>STORE LOCATOR</Box>
                    
                    <p>Privacy Policy</p>
                    <Flex alignItems="center"><p>Your Privacy Choices</p><GiChoice size={25}/></Flex>
                    <p>California Privacy Rights</p>
                    <p>California Transparency Act</p>
                    
                </Flex>


        
            
                <Flex  gap={10}>
                    <p><FaTwitter size={25} /></p>
                    <p><BiLogoPinterestAlt size={25} /></p>
                    <p><IoLogoYoutube size={25} /></p>
                    <p><BiLogoFacebook size={25} /></p>
                    <p><BiLogoInstagram size={25}/></p>
                </Flex>
    
            </Flex>
           
        </Box>
        </Flex>
        <hr/>
        <Flex justifyContent="space-between" alignItems="center" p={5}>
    <Text>© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7</Text>
    <Text>Privacy Policy | Terms of Use</Text>
        </Flex>
    </div>
  )
}

export default Footer