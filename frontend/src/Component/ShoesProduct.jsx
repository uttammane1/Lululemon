import { Box, Flex, Grid, GridItem, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShoesProduct = () => {
  const [data, setData] = useState([])
useEffect(() => {
    fetch('http://localhost:5050/shoes')
      .then((e) => e.json())
      .then((e) => setData(e))
  })
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
      {data.map((ele) => (
        <div>
          <Box w={350} p={6} key={ele.id}>
            <Link to={`/shoes/${ele.id}`}>
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
    </div>
  )
}

export default ShoesProduct
