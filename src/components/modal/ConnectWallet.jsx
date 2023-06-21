import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Button,
  Image,
  Center,
  Box,
} from '@chakra-ui/react';
import ButtonVariant from '../button/ButtonVariant';

const ConnectWallet = ({ isSidenav }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = () => {
    onOpen();
  };

  return (
    <>
      <ButtonVariant
        hover={{ boxShadow: `0px 0px 0px 4px #A0227950` }}
        onClick={openModal}
        bg={`accent`}
        color={`white`}
        width={isSidenav ? `100%` : { base: `none`, xl: `block` }}
        height="3em"
        name="Connect wallet"
        display={
          isSidenav
            ? { base: `block`, xl: `none` }
            : { base: `none`, xl: `block` }
        }
      />

      <Modal
        size={{ base: `full`, md: `2xl` }}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scr
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={{ base: `16px` }}
          height={{ base: `100vh`, md: `initial` }}
        >
          <ModalHeader p={8} fontSize={`2xl`}>
            Connet Wallet
          </ModalHeader>
          <ModalCloseButton size={`xs`} p={1} my={6} mx={8} />
          <ModalBody borderTop={`1px solid lightgrey`} p={8}>
            <Text my={`1rem`}>Choose your preferred wallet:</Text>
            <Box width={`100%`}>
              <Button
                display={`flex`}
                justifyContent={`space-between`}
                borderRadius={`12px`}
                border={`1px solid #CFD8DC`}
                mb={`1rem`}
                bg={`white`}
                height={`68px`}
                width={`100%`}
                _hover={{ bg: `#F1F1F1` }}
              >
                <Center gap={3}>
                  <Image
                    alt="dorge"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186166/hng/Metabnb/images-and-icons/image_66_aaqp0s.png"
                  />
                  <Text fontWeight={600} fontSize={`lg`}>
                    Metamask
                  </Text>
                </Center>
                <Box boxSize={`20px`}>
                  <Image
                    alt="logo"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668294845/hng/Metabnb/images-and-icons/icons8-chevron-24_gnodw9.png"
                  />
                </Box>
              </Button>
              <Button
                display={`flex`}
                justifyContent={`space-between`}
                borderRadius={`12px`}
                border={`1px solid #CFD8DC`}
                my={`1rem`}
                bg={`white`}
                height={`68px`}
                width={`100%`}
                _hover={{ bg: `#F1F1F1` }}
              >
                <Center gap={3}>
                  <Image
                    alt="dorge"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186166/hng/Metabnb/images-and-icons/image_69_mcqmbo.png"
                  />
                  <Text fontWeight={600} fontSize={`lg`}>
                    WalletConnect
                  </Text>
                </Center>
                <Box boxSize={`20px`}>
                  <Image
                    alt="logo"
                    src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668294845/hng/Metabnb/images-and-icons/icons8-chevron-24_gnodw9.png"
                  />
                </Box>
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectWallet;
