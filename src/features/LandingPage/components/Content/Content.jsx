// Base imports
import React from 'react';

// Stuff import
import { Box, Image, Stack } from '@chakra-ui/react';

// Project imports
import HeroMap from '../../../../assests/webp/map.webp';
import { ContentAbout } from './ContentAbout.jsx';
import { ContentJourney } from './ContentJourney.jsx';
import { ContentVision } from './ContentVision.jsx';
import SectionHeader from './SectionHeader.jsx';

export const Content = () => {
  return (
    <>
      {/* Content Container */}
      <Box>
        <Stack className='grid'>
          <Image
            src={HeroMap}
            className='block'
            alt='lykka landing image'
            aria-label='Lykka landing page - image of Montreal'
          />
          <SectionHeader title='about us' />

          {/* About Section */}
          <ContentAbout />

          <SectionHeader title='our journey' />

          {/* Journey Section */}
          <ContentJourney />

          {/* Vision Section */}

          <SectionHeader title='our vision' />
          <ContentVision />
        </Stack>
      </Box>
    </>
  );
};
