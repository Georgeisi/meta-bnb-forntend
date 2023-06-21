import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from '../card/Card';

const GridDisplay = ({ collections }) => {
  const cardCollections = collections.map((collection, index) => {
    return <Card key={index} image={collection} />;
  });
  return (
    <SimpleGrid
      className="page_alignment"
      // px={{ md: 30, lg: 20, xl: `initial` }}
      justifyItems={{ base: `center` }}
      gridRowGap={{ base: 3, md: 6, lg: 7, xl: 4 }}
      gridColumnGap={{ base: 6 }}
      columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
    >
      {cardCollections}
    </SimpleGrid>
  );
};

export default GridDisplay;
