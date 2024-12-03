import React, { useEffect, useState } from 'react'
import MenProduct from '../Component/MenProduct'
import { Box, Button, Flex, Grid, GridItem, grid } from '@chakra-ui/react'
import '../App.css';
import { Text } from '@chakra-ui/react'
import SliderMen from '../Component/SliderMen';
import { Link } from 'react-router-dom';

const Men = () => {
 
  return (
    <div >
       <Box height={500} paddingTop={20} backgroundImage={"https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_3_1_D?wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}>
      <Box  border="1px solid" w={230} backgroundColor="white" paddingTop={10} paddingBottom={10} paddingRight={12} paddingLeft={8}    >
        <Flex flexDirection="column" gap={6} >
          <Box fontWeight={500}>lululemon men's</Box>
          <Flex flexDirection="column" gap={3}>
        <Link to='/men/allmen'>  <Box>Shorts</Box></Link>
        <Link to='/men/allmen'><Box>ABC Pants</Box></Link>
        <Link to='/men/allmen'> <Box>T-Shirts</Box></Link>
        <Link to='/men/allmen'> <Box>Joggars</Box></Link>
        <Link to='/men/allmen'><Box>Trousers</Box></Link>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent="end" marginRight={5}><Link to='/men/allmen'> <Button size='lg' backgroundColor="white" color="black">Shop What's New</Button></Link></Flex>
      </Box>

      <Flex padding={5} justifyContent="space-between" alignItems="center"><Box marginLeft={12} fontSize={40} fontWeight={500}>Full steam, zero stick.</Box><Box>License to Train tops won’t cling when your<br />workout heats up—leaving you feeling unstoppable.
</Box>
</Flex>

<Flex gap={7} padding={5}><Box>
             <img  src="https://images.lululemon.com/is/image/lululemon/LM7B99S_047780_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>More power to you.</Text>
             <Text p={2}>Stand up to the toughest workout in the abrasion-resistant License to Train Short.</Text>
           <Link to='/men/allmen'>  <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHORTS</Button></Link>
           </Box> 
        
        <Box>
        <img src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_1_2_Lg_MediaAction_D_TShirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>Push past plateaus.</Text>
             <Text p={2}>Less cling in the License to Train Shirt gives you one more reason to up the intensity.</Text>
            <Link to='/men/allmen'> <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP T-SHIRTS</Button></Link>
          </Box></Flex>

          <Box>
            <SliderMen/>
          </Box>

          <Box textAlign="center" marginTop={12}><Link to='/men/allmen'><Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP WHAT'S NEW</Button></Link></Box>
           
          <Flex backgroundColor="#e5e6e7" p={5} marginTop={10} justifyContent="space-between" alignItems="center">
            <Text paddingLeft={10} fontSize={30} fontWeight={500}>Looking for a gift?</Text>
             <Text>Find the perfect gift with our quiz.</Text>
             <Box paddingRight={10}>
             <Link to='/men/allmen'> <Button size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SKIRTS</Button></Link>
             </Box>
             </Flex>

             <Flex justifyContent="space-between" gap={5} p={10}>
            <Box>
              <img style={{width:"400px",height:"475px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Shorts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500} >No shortage of movement.</Text>
             <Link to='/men/allmen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHORTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Shirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>More performance up your sleeve.</Text>
              <Link to='/men/allmen'><Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP T-SHIRTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Pants_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Bottom line: committed to comfort.</Text>
             <Link to='/men/allmen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP PANTS</Button></Link>
            </Box>
            </Flex>


            <Box>
            <SliderMen/>
          </Box>


          <Box textAlign="center" marginTop={12}><Link><Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP BESTSELLERS</Button></Link></Box>
          
          <Flex justifyContent="space-between" p={10}>
            <Box>
              <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_HoodiesSweatshirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500} >You’ll miss it when </Text>
              <Link to='/men/allmen'><Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP HOODIES & SWEATSHIRTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk1_M_Golf_1_3_Med_MediaAction_D_GolfPolo?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Every collar a call </Text>
             <Link to='/men/allmen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP POLOS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Shoes_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Step into limitless </Text>
             <Link to='/men/allmen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHOES</Button></Link>
            </Box>
            </Flex>

            <Box display="flex" justifyContent="center" alignItems="center" margin={0}>
               <Box width={1333} height={350} backgroundColor="black" display="flex" justifyContent="center" alignItems="center"  >
                 <Box width={650} h={250} backgroundColor="white" display="flex" flexDirection="column" gap={5} justifyContent="center" alignItems="center" >
                  <Text fontSize={30} fontWeight={500}>Score a new favourite fit for your goals.</Text>
                 <Link to='/men/allmen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP WE MADE TOO MUCH</Button></Link>
                 </Box>
               </Box>
           </Box>
   </div>
  )
}

export default Men