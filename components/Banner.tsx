import React from 'react';
import Slider from 'react-slick';
import { Show, Hide } from '@chakra-ui/react'
import
{
  Box,
} from '@chakra-ui/react';

export default function Banner()
{
  return (
    <Box
      position={'absolute'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}>
      {/* Slider */}
        <Slider >
          <Box
            height={"400px"}
            position="relative"
            backgroundPosition="flex"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            backgroundImage={bg}>
          </Box>
        </Slider>
    </Box>
  );
}
