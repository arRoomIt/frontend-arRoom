import React from "react";
import { Box, Flex, Image, Badge, useColorModeValue,Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Card = (props) => {

    const {
        _id,
        title,
        price,
        totalOccupancy,
        // images,
        reviews
    } = props.workspace;


  const property = {
    imageUrl: images,
    imageAlt: title,
    people: totalOccupancy,
    title: title,
    formattedPrice: price,
    reviewCount: reviews.length,
    // rating: 4,
  };

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.800")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.900")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        
        <Link as={ReachLink} to={`/detail/${_id}`}>
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          roundedTop="lg"
        />
        </Link>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.people} people &bull;
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / day
            </Box>
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            {/* {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))} */}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Card;