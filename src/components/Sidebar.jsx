import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowTrendUp,
  faCompass,
  faStar,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const data = [
    {
      i: faHouse,
      title: "Home",
    },
    {
      i: faArrowTrendUp,
      title: "Trending",
    },
    {
      i: faCompass,
      title: "Explore",
    },
    {
      i: faStar,
      title: "Favourites",
    },
    {
      i: faGear,
      title: "Settings",
    },
  ];
  return (
    <Flex w="100%" bg="#edf2f7" h="760">
      <Box w="18%" bg="white">
        <Box>
          <Heading as="h2" size="lg" p="10">
            Logo
          </Heading>
        </Box>
        <Box p="5">
          {data.map((d) => (
            <Box display="flex" p="4">
              <FontAwesomeIcon icon={d.i} />
              <Text pl="4">{d.title}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default Sidebar;
