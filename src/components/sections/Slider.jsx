import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";

const Slider = () => {
  const slides = [
    {
      img:
        "https://cdn.pixabay.com/photo/2017/08/23/16/03/io-centers-2673317__340.jpg",
        
    
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2020/04/30/23/28/people-5114920__340.jpg",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2021/03/18/19/49/home-office-6105736__340.jpg",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2015/12/08/00/31/office-1081807__340.jpg",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2020/08/25/18/29/workplace-5517762__340.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 10000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, []);

  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.100", "gray.800")}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="90%" overflow="hidden">
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
                
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image src={slide.img} boxSize="full" backgroundSize="cover" />
              
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Slider;