import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import ButtonVariant from '../button/ButtonVariant';

const MetabnbNFTs = () => {
  return (
    <Flex
      flexDir={{ base: `column`, lg: `row` }}
      color={`white`}
      alignItems={`center`}
      justifyContent={`end`}
      gap={{ base: 10, lg: 32 }}
    >
      <Box width={{ lg: `40%` }}>
        <Heading className="heading_title" fontSize={`5xl`}>
          Metabnb NFTs
        </Heading>
        <Text fontSize={`lg`} lineHeight={8} mt={8} mb={14}>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </Text>
        <ButtonVariant
          isMobile
          bg={`white`}
          color={`accent`}
          height={`48px`}
          width={`156px`}
          name={`Learn more`}
        />
      </Box>
      <Box width={{ lg: `60%` }}>
        <Image
          alt="three_img"
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186165/hng/Metabnb/images-and-icons/Frame_59546-1_m7v2v3.png`}
        />
      </Box>
    </Flex>
  );
};

export default MetabnbNFTs;
