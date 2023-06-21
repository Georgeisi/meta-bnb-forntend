import { Heading, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';

const HeroSection = () => {
  return (
    <Flex
      className="page_alignment"
      flexDir={{ base: `column-reverse`, xl: `row` }}
      justifyContent={`space-between`}
      my={5}
      gap={{ base: 10, xl: `initial` }}
    >
      <Flex
        flexDir={`column`}
        width={{ xl: `60%` }}
        justifyContent={`center`}
        alignItems={{ base: `center`, xl: `initial` }}
        pr={{ xl: 20 }}
        textAlign={{
          base: `center`,
          xl: `initial`,
        }}
      >
        <Heading
          className="heading_title"
          fontSize={{ base: `4xl`, sm: `3.5rem` }}
          fontWeight={`medium`}
          lineHeight={{ base: `35px`, sm: `60px`, md: `78.4px` }}
          color={`textBlack`}
        >
          Rent a{' '}
          <Text
            as={`span`}
            fontSize={{ base: `4xl`, sm: `3.5rem` }}
            fontWeight={`bold`}
            color={`accent`}
          >
            Place
          </Text>{' '}
          away from{' '}
          <Text
            as={`span`}
            fontSize={{ base: `4xl`, sm: `3.5rem` }}
            fontWeight={`bold`}
            color={`accent`}
          >
            Home
          </Text>{' '}
          in the{' '}
          <Text
            as={`span`}
            fontSize={{ base: `4xl`, sm: `3.5rem` }}
            fontWeight={`bold`}
            color={`accent`}
          >
            Metaverse
          </Text>
        </Heading>

        <Text fontSize={`2xl`} my={12} lineHeight={`2.18rem`}>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </Text>
        <SearchInput />
      </Flex>
      <Flex width={{ xl: `50%`, '2xl': `40%` }} justifyContent={{ xl: `end` }}>
        <Image
          mx={{ base: `auto`, xl: `initial` }}
          alt="hero-image"
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668364170/hng/Metabnb/images-and-icons/Group_4028_1_rglugm.png`}
        />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
