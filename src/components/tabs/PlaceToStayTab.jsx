import { Button, Flex, Image, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { locationIcon } from '../../assets/images-and-icons';
// import { Select } from '@chakra-ui/react';

const PlaceToStayTab = () => {
  const [btns] = useState([
    'Resturant',
    `Cottage`,
    `Castle`,
    `fantast city`,
    `beach`,
    `cabin`,
    `off-grid`,
    `farm`,
  ]);

  const tabsBtn = btns.map((btn, index) => {
    return (
      <NavLink key={index}>
        <Text
          textTransform={`capitalize`}
          fontSize={`xl`}
          as={`button`}
          height={`48px`}
        >
          {btn}
        </Text>
      </NavLink>
    );
  });

  const tabsSelect = btns.map((btn, index) => {
    return (
      <option key={index} value={btn}>
        {btn}
      </option>
    );
  });

  return (
    <Flex
      alignItems={`center`}
      justifyContent={`space-between`}
      gap={{ base: 5 }}
    >
      <Flex
        display={{ base: `none`, xl: `flex` }}
        alignItems={`center`}
        gap={12}
      >
        {tabsBtn}
      </Flex>
      <Select
        iconColor="accent"
        variant={`filled`}
        focusBorderColor="transparent"
        size={`lg`}
        display={{ xl: `none` }}
        _focus={{ boxShadow: `0px 0px 0px 4px #A0227930` }}
        _hover={{ boxShadow: `0px 0px 0px 4px #A0227930` }}
      >
        {tabsSelect}
      </Select>
      <Button
        borderRadius={`8px`}
        width={`161px`}
        height={`48px`}
        variant="outline"
        px={`13px`}
        gap={5}
      >
        Location
        <Image alt="locationIcon" src={locationIcon} />
      </Button>
    </Flex>
  );
};

export default PlaceToStayTab;
