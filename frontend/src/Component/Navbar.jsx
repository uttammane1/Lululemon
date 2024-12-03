import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';
import { HiMiniGiftTop } from 'react-icons/hi2';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { CiGlobe } from 'react-icons/ci';
import { IoMdContact } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { IoBagHandleOutline } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ height: '140px' }}>
        <Text
          as="p"
          textAlign="center"
          textTransform="lowercase"
          fontSize="sm"
        >
          aero blue’s coming back in fan favourites. members get early access, starting thursday, december 5. download the app.
        </Text>

      <Box paddingRight={4} backgroundColor="#fafafa">
        <Flex gap={5} justifyContent="end" p={1} alignItems="center">
          <Flex gap={2} alignItems="center">
            <CiLocationOn />
            <Box>Store Locator</Box>
          </Flex>
          <Flex gap={2} alignItems="center">
            <HiMiniGiftTop />
            <Box>Gift Cards</Box>
          </Flex>
          <Flex gap={2} alignItems="center">
            <IoMdHelpCircleOutline />
            <Box>Get Help</Box>
          </Flex>
          <Flex gap={2} alignItems="center">
            <CiGlobe />
            <Box>USA</Box>
          </Flex>
        </Flex>
      </Box>
      <Box p={3}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap={15} alignItems="center">
            <Link to='/'>
              <img
                width={120}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtYlhCUE03nWOPCYydFIX_b6mezezHqLG-g&s"
                alt="Logo"
              />
            </Link>
            <Flex gap={12} alignItems="center" fontWeight={650}>
              <Link to='/women'><Box>WOMEN</Box></Link>
              <Link to='/men'><Box>MEN</Box></Link>
              <Link to='/accessories'><Box>ACCESSORIES</Box></Link>
              <Link to='/shoes'><Box>SHOES</Box></Link>
              <Link to='/likenew'><Box>WHAT'S NEW</Box></Link>
            </Flex>
          </Flex>

          <Flex gap={10} alignItems="center">
            {/* Search Bar */}
            <InputGroup>
              <InputLeftElement pointerEvents="none" fontSize="1.2em">
                <IoSearch />
              </InputLeftElement>
              <Input placeholder="Search" size="lg" borderColor="black" />
            </InputGroup>

            {/* Sign In and Icons */}
            <Flex gap={1} alignItems="center">
              <Link to='/signin'>
                <IoMdContact size={30} />
                <Box fontSize={15}>SignIn</Box>
              </Link>
            </Flex>
            <Box>
              <BsHeart size={25} />
            </Box>
            <Box>
              <IoBagHandleOutline size={25} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
