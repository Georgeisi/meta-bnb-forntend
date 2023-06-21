import { Box, Flex, Image, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import HeroSection from '../../components/Hero-section/HeroSection';
import { metaverse } from '../../utilities';

import GridDisplay from '../../components/grid-display/GridDisplay';
import MetabnbNFTs from '../../components/metabnbNFTs/MetabnbNFTs';

const Home = () => {
  return (
    <Box>
      {/* hero section */}
      <Box className="cc-container" my={32}>
        <HeroSection />
      </Box>
      {/* banner */}
      <Box
        display={`flex`}
        height={`4.375rem`}
        color={`white`}
        backgroundColor={`accent`}
        backgroundImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668364806/hng/Metabnb/images-and-icons/grid-png-43582_fh8mgl.png`}
      >
        <Flex
          alignItems={`center`}
          justifyContent={`space-between`}
          className={`cc-container page_alignment`}
          gap={10}
        >
          <Center width={`13.9rem`}>
            <Image
              alt="mbtoken-logo"
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186168/hng/Metabnb/images-and-icons/Group_59537-1_fop9dr.svg`}
            />
          </Center>
          <Center width={`13.9rem`}>
            <Image
              alt="metamask-logo"
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186164/hng/Metabnb/images-and-icons/Group_4040_qdmfbw.svg`}
            />
          </Center>
          <Center width={`13.9rem`}>
            <Image
              alt="opensea-logo"
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186164/hng/Metabnb/images-and-icons/Frame_4041-1_uqxmwd.svg`}
            />
          </Center>
        </Flex>
      </Box>
      <Box>
        <Heading
          textAlign={`center`}
          mt={10}
          mb={11}
          fontSize={{ base: `4xl`, sm: `5xl` }}
          className="heading_title page_alignment"
          color={`black`}
        >
          Inspiration for your next adventure
        </Heading>
        <Box pb={`3.3rem`} className="cc-container">
          <GridDisplay collections={metaverse.slice(0, 8)} />
        </Box>
        <Box backgroundColor={`accent`}>
          <Flex className="cc-container page_alignment" py={24}>
            <MetabnbNFTs />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
