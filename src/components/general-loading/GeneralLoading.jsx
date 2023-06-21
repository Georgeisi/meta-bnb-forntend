import { Image, Center, Box, Text } from '@chakra-ui/react';
import React from 'react';

const GeneralLoading = ({ text }) => {
  return (
    <Center height={`85vh`} flexDir={`column`} gap={5}>
      <Box>
        <Image
          alt="logo"
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186165/hng/Metabnb/images-and-icons/Group-1_ytb0ig.png`}
        />
      </Box>
      {text && <Text>{text}</Text>}
    </Center>
  );
};

export default GeneralLoading;
