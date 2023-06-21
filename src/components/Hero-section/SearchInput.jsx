import {
  FormControl,
  InputGroup,
  Input,
  InputRightAddon,
} from '@chakra-ui/react';
import React from 'react';

const SearchInput = () => {
  return (
    <FormControl width={{ base: `100%`, md: `38.7rem` }}>
      <InputGroup height={`54px`}>
        <Input
          borderRadius={`8px`}
          fontSize={`sm`}
          placeholder="Search for location"
          height={`100%`}
          _focus={{ boxShadow: `0px 0px 0px 3px #A0227930` }}
          _hover={{ boxShadow: `0px 0px 0px 3px #A0227930` }}
        />
        <InputRightAddon
          height={`100%`}
          borderRadius={`8px`}
          fontSize={`md`}
          px={{ base: 10, md: `5.2rem` }}
          as={`button`}
          size={`lg`}
          children="Search"
          backgroundColor={`accent`}
          color={`white`}
          _hover={{ boxShadow: `0px 0px 0px 3px #A0227930` }}
        />
      </InputGroup>
    </FormControl>
  );
};

export default SearchInput;
