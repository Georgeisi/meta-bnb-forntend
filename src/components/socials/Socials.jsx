import { Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {
  copyright,
  facebook,
  instagram,
  twitter,
} from '../../assets/images-and-icons';

export default function Socials({ isMobile }) {
  return (
    <Flex
      display={{ base: isMobile ? `flex` : `none`, lg: `flex` }}
      gap={8}
      mt={{ lg: `96px` }}
      mb={{ lg: `55px` }}
    >
      <Link
        isExternal
        href="#"
        _hover={{ background: `accentLight` }}
        p={2}
        borderRadius={`100%`}
      >
        <Image src={facebook} alt={`logo`} />
      </Link>
      <Link
        isExternal
        href="#"
        _hover={{ background: `accentLight` }}
        p={2}
        borderRadius={`100%`}
      >
        <Image src={instagram} alt={`logo`} />
      </Link>
      <Link
        isExternal
        href="#"
        _hover={{ background: `accentLight` }}
        p={2}
        borderRadius={`100%`}
      >
        <Image src={twitter} alt={`logo`} />
      </Link>
    </Flex>
  );
}

export const Copyright = ({ isMobile }) => {
  return (
    <Flex
      display={{ base: isMobile ? `flex` : `none`, lg: `flex` }}
      alignItems={`center`}
      gap={2}
    >
      <Image src={copyright} alt={`copyright`} />
      <Text>2022 Metabnb</Text>
    </Flex>
  );
};
