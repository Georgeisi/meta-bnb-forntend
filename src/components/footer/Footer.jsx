import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Center,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Socials, { Copyright } from '../socials/Socials';

const Footer = () => {
  return (
    <Grid
      className="page_alignment"
      gridRowGap={20}
      width={`100%`}
      templateColumns={`repeat(12, 1fr)`}
      textAlign={{ base: `center`, lg: `initial` }}
    >
      <GridItem colSpan={{ base: 12, lg: 4 }}>
        <Link as={RouterLink} to={`/`}>
          <Image
            mx={{ base: `auto`, lg: `initial` }}
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186165/hng/Metabnb/images-and-icons/Group_pg8mto.png`}
            alt={`logo`}
          />
        </Link>
        <Socials />
        <Copyright />
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 3 }}>
        <Heading fontSize={`xl`}>Community</Heading>
        <Flex flexDir={`column`} mt={`1.56rem`} gap={4}>
          <Link fontSize={`sm`}>NFT</Link>
          <Link fontSize={`sm`}>Tokens</Link>
          <Link fontSize={`sm`}>Landlords</Link>
          <Link fontSize={`sm`}>Discord</Link>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 3 }}>
        <Heading fontSize={`xl`}>Places</Heading>
        <Flex flexDir={`column`} mt={`1.56rem`} gap={4}>
          <Link fontSize={`sm`}>Castle</Link>
          <Link fontSize={`sm`}>Farms</Link>
          <Link fontSize={`sm`}>Beach</Link>
          <Link fontSize={`sm`}>Learn more</Link>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 2 }}>
        <Heading fontSize={`xl`}>About us</Heading>
        <Flex flexDir={`column`} mt={`1.56rem`} gap={4}>
          <Link fontSize={`sm`}>Road map</Link>
          <Link fontSize={`sm`}>Creators</Link>
          <Link fontSize={`sm`}>Career</Link>
          <Link fontSize={`sm`}>Contact us</Link>
        </Flex>
      </GridItem>
      <GridItem
        as={Center}
        flexDir={`column`}
        display={{ lg: `none` }}
        colSpan={{ base: 12, lg: 2 }}
        gap={32}
      >
        <Socials isMobile />
        <Copyright isMobile />
      </GridItem>
    </Grid>
  );
};

export default Footer;
