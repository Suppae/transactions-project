import { Container, Flex } from "@chakra-ui/react";


const NavBar = () => { 
  return <Container maxW={"1140px"} px ={4}>
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row",
      }}
    >
    </Flex>
  </Container>;
};

export default NavBar;