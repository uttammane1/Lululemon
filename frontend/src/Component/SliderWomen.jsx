import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 const SliderWomen = () => {
    const [data, setData] = useState([])
useEffect(() => {
    fetch('http://localhost:5050/women')
      .then((e) => e.json())
      .then((e) => setData(e))
  })



    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    }

  return (
    <div>
        <div>
        <Slider
        {...settings}
      >
        {data.map((ele) => (
        <div>
          <Box w={350} p={6} key={ele.id}>
            <Link to={`/women/${ele.id}`}>
              <Box>
                <img
                  style={{ width: '300px', alignItems: 'center' }}
                  src={ele.image_url}
                  alt="men"
                />
              </Box>
              <Flex justifyContent="space-between">
                <Box fontWeight={500}>{ele.name}</Box> <Box>{ele.price}</Box>
              </Flex>
            </Link>
          </Box>
        </div>
      ))}
       </Slider>
       
        </div>
    </div>
  )
}

export default SliderWomen

