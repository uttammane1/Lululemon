import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import SliderWomen from '../Component/SliderWomen'
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <div>
       <Box height={500} paddingTop={20} backgroundImage={"https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_3_1_D?wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"}>
      <Box  border="1px solid" w={230} backgroundColor="white" paddingTop={10} paddingBottom={10} paddingRight={12} paddingLeft={8}    >
        <Flex flexDirection="column" gap={6} >
          <Box fontWeight={500}>lululemon</Box>
          <Flex flexDirection="column" gap={3}>
        <Link to='/women/allwomen' >  <Box>Shorts</Box> </Link>
        <Link to='/women/allwomen'>  <Box>Skirts</Box> </Link>
        <Link to='/women/allwomen'>  <Box>Tank tops</Box></Link>
        <Link to='/women/allwomen'> <Box>Dresses</Box></Link>
        <Link to='/women/allwomen'>  <Box>Leggings</Box></Link>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent="end" marginRight={5}> <Link to='/women/allwomen'> <Button size='lg' backgroundColor="white" color="black">Shop What's New</Button></Link></Flex>
      </Box>
      <Flex padding={5} justifyContent="space-between" alignItems="center"><Box marginLeft={12} fontSize={40} fontWeight={500}>Set the scene.</Box><Box>Of the moment, in multiple lengths—these skirts pave the way for play.</Box></Flex>

      <Flex gap={7} padding={5}><Box>
             <img src="https://images.lululemon.com/is/image/lululemon/LW1EA5S_064820_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>Move like a main character.</Text>
             <Text p={2}>Whether you’re sticking to the plan or going off script, these skirts can keep up.</Text>
            <Link to='/women/allwomen'> <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SKIRTS</Button></Link>
           </Box> 
        
        <Box>
        <img src="https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_1_2_Lg_MediaAction_D_Casual?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>A story with stretch.</Text>
             <Text p={2}>These skirts are the through-line to a flexible summer wardrobe</Text>
            <Link to='/women/allwomen'> <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP CASUAL</Button></Link>
          </Box></Flex>
          <Box>
            <SliderWomen/>
          </Box>
          <Box textAlign="center" marginTop={12}><Link><Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP WHAT'S NEW</Button></Link></Box>
          <Flex backgroundColor="#e5e6e7" p={5} marginTop={10} justifyContent="space-between" alignItems="center">
            <Text paddingLeft={10} fontSize={30} fontWeight={500}>Looking for a gift?</Text>
             <Text>Find the perfect gift with our quiz.</Text>
             <Box paddingRight={10}>
             <Link to='/women/allwomen'><Button size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SKIRTS</Button></Link>
             </Box>
             </Flex>

             <Flex justifyContent="space-between" p={10}>
            <Box>
              <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/NA_May24_Wk2_W_SU24Shorts_1_3_Med_MediaAction_D_WLP_BlueAlign?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500} >Shorts on. Limits off.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHORTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Shirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Close, for comfort.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHIRTS</Button> </Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Pants_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Comfort’s got legs.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP PANTS</Button></Link>
            </Box>
            </Flex>

            <Box>
            <SliderWomen/>
          </Box>

          <Box textAlign="center" marginTop={12}><Link><Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP BESTSELLERS</Button></Link></Box>

          <Flex justifyContent="space-between" p={10}>
            <Box>
              <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_HoodiesSweatshirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500} >Cozy at the ready.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP HOODIES & SWEATSHIRTS</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Shoes_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>More possibilities, every step.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHOES</Button></Link>
            </Box>
            <Box>
            <img style={{width:"400px"}} src="https://images.lululemon.com/is/image/lululemon/na_May24_Q2_W_Bags_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
              <Text p={2} fontSize={30} fontWeight={500}>Options, in the bag.</Text>
             <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP BAGS</Button></Link>
            </Box>
            </Flex>

            <Box display="flex" justifyContent="center" alignItems="center" margin={0}>
               <Box width={1333} height={350} backgroundColor="black" display="flex" justifyContent="center" alignItems="center"  >
                 <Box width={650} h={250} backgroundColor="white" display="flex" flexDirection="column" gap={5} justifyContent="center" alignItems="center" >
                  <Text fontSize={30} fontWeight={500}>Score a new favourite fit for your goals.</Text>
                 <Link to='/women/allwomen'> <Button p={2}  size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP WE MADE TOO MUCH</Button></Link>
                 </Box>
               </Box>
           </Box>




    </div>

  )
}

export default Women