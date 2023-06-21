import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation-bar/Navbar';

const DefaultLayout = ({ children,token,setToken }) => {
  return (
    <>
      {/* navbar */}
      <Box
        pos={{ base: `sticky`, xl: `initial` }}
        top={0}
        zIndex={999}
        backgroundColor={`#ffffff90`}
        py={{ base: 5, xl: `43px` }}
        backdropFilter={`blur(5px)`}
      >
        <Navbar token={token} setToken={setToken} />
      </Box>
      {children}
      <Box
        borderTop={`3px solid white`}
        backgroundColor={`black`}
        color={`white`}
      >
        <Flex className="cc-container" pt={14} pb={8}>
          <Footer />
        </Flex>
      </Box>
    </>
  );
};

export default DefaultLayout;
