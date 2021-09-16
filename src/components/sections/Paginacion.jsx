import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

 function Paginacion() {
  const [current, setCurrent] = React.useState(1);
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.400", "gray.600")}
      p={25}
      alignItems="center"
      justifyContent="center"
    >
      <Pagination
        defaultCurrent={2}
        total={50}
        paginationProps={{ display: "flex" }}
        current={current}
        onChange={(page) => setCurrent(page)}
      />
    </Flex>
  );
}
export default Paginacion;