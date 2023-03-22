// Base imports
import React from 'react';

// Stuff import
import { Grid, GridItem, Image } from '@chakra-ui/react';

// Project imports
import BannerAbout from '../../../../assests/webp/bannerAbout.webp';
import MiscGirls from '../../../../assests/webp/miscGirls.webp';

export const ContentJourney = () => {
  return (
    <>
      {/* Our Journey Section Grid Layout */}
      <Grid
        className='mt-0 max-w-screen-2xl justify-self-center'
        templateAreas={`'sectionHeader sectionHeader'
                        'sectionTextOne sectionImage'
                        'sectionTextTwo sectionImage'
                        'sectionTextThree sectionImage'
                        'sectionBanner sectionBanner'`}
      >
        {/* First Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextOne'
        >
          Lykkå Village was born out of our own personal struggles as parents of
          a little girl, with no extended family. We were uncomfortable asking
          for help and, as such, we found ourselves routinely overwhelmed. We
          realized that we had to create a trusted community in our little
          family, and fast!
        </GridItem>

        {/* Second Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextTwo'
        >
          We both had experience living with roommates before we became a
          family, so our first solution was to simply create a community in our
          home. We have now lived like this for 12 years.
        </GridItem>

        {/* Third Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextThree'
        >
          Co-living has certainly had its ups and downs, but the journey has
          taught us so much and has improved our quality of life more than we
          could have imagined. The extra hands and eyes have been invaluable in
          our ability to walk the dog, take a shower, parent in a meaningful
          way, run multiple businesses, deal with health issues, and actively be
          involved in bettering our community..
        </GridItem>

        {/* Misc Girls */}
        <GridItem area='sectionImage'>
          <Image
            className='rounded-full hidden md:block w-96 mt-6'
            src={MiscGirls}
          />
        </GridItem>

        {/* Banner */}
        <GridItem
          area='sectionBanner'
          className='my-4 flex justify-center md:mt-4'
        >
          <Image className='scale-90' src={BannerAbout} />
        </GridItem>
      </Grid>
    </>
  );
};
