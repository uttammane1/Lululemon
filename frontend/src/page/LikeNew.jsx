import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'

const LikeNew = () => {
  return (
    <div>
      <Text marginTop={8} fontSize={35} fontWeight={500} textAlign="center">lululemon Like New keeps good gear going.</Text>
      <Box marginTop={8}>
      <Text textAlign="center">Like New launched across the US in April 2022. Since then, we’ve kept more than 1.7 million pieces of gently used</Text>
      <Text textAlign="center">lululemon gear in action. Explore the Like New online resale shop to score unique finds and get the good feeling of</Text>
      <Text textAlign="center">contributing to a circular ecosystem.</Text>
      </Box>

      <Box textAlign="center" marginTop={12}><Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP LIKE NEW</Button></Box>

      <Text marginTop={5} textAlign="center">Like New is available across the US. Stay tuned for Like New in Canada.</Text>
      <Box marginTop={10}>
        <img src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_1_Lg_MediaAction_D?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
      </Box>

      <Text marginTop={8} fontSize={35} fontWeight={500} textAlign="center">Every score does more.</Text>
      <Box marginTop={8}>
      <Text textAlign="center">Since 2022, 100% of Like New profits have gone to support the Apparel Impact Institute’s Fashion Climate Fund,</Text>
      <Text textAlign="center">which aims to implement and advance projects that reduce industry carbon emissions by 2030.*</Text>
      </Box>

      <Flex gap={7} padding={5}><Box>
             <img src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_2_Med_MediaAction_D_AnotherRound?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>Back for another round.</Text>
             <Text p={2}>Extending the life of lululemon gear means you score great finds from seasons past.</Text>
             <Flex gap={5}>
             <Button p={2} size='lg' backgroundColor="black" color="white" border="1px solid black">SHOP WOMEN'S</Button>
             <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP MEN'S</Button>
             </Flex>
           </Box> 
        
        <Box>
        <img src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_2_Med_MediaAction_D_TradeIn?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
             <Text p={1} fontSize={30} fontWeight={500}>Trade in. Get rewarded.</Text>
             <Text paddingLeft={2}>lululemon gear is made to last—and may outlast your needs. When it does, there’s a</Text>
             <Text paddingLeft={2}>lululemon gift card waiting for you.</Text>
             <Button p={2} size='lg' backgroundColor="white" color="black" border="1px solid black">SHOP SHORTS</Button>
          </Box></Flex>

          <Box marginTop={10}>
            <img src="https://images.lululemon.com/is/image/lululemon/LN_24_APR_Q1_PartB_Mainline_Ecomm_StoryPage_1_1_Med_MediaAction_D?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="" />
          </Box>

          <Text marginTop={10} textAlign="center">When you're done with your lululemon gear, bring it into a store. Gently used items are carefully cleaned and put on</Text>
      <Text textAlign="center">the Like New online resale shop for others to discover.</Text>
      <Text marginTop={10} textAlign="center">*100% of program profits or 2% of revenue, whichever is higher.</Text>
    </div>
  )
}

export default LikeNew