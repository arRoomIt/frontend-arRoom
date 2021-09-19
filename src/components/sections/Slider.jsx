import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";
import './Slider.css';

const Slider = () => {
  const slides = [
    {
      img:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_517610514_353435.jpg",    
    },
    {
      img:
        "https://spacestor.com/media/scaled_images/160120-084753_medium.jpg",
    },
    {
      img:
        "https://images.squarespace-cdn.com/content/v1/57333f3b044262e0b7ab43a3/1591797552694-7FMLLXF7Y6DZ17J2E3C6/4.jpg?format=1000w",
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
      p={1}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w={[
            "100%", // 0-30em
            "100%", // 30em-48em
            "85%", // 48em-62em
            "60%", // 62em+
          ]} overflow="hidden">
        <Flex className="bflex" pos="relative" w="full" {...carouselStyle}>
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