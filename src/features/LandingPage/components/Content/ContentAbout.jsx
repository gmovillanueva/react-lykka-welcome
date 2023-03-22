// Base imports
import React from 'react';

// Stuff import
import { Grid, GridItem, Image } from '@chakra-ui/react';

// Project imports
import MiscMugs from '../../../../assests/webp/miscMugs.webp';
import MiscTrineJM from '../../../../assests/webp/miscTrineJM.webp';

export const ContentAbout = () => {
  return (
    <>
      {/* About Section Grid Layout */}
      <Grid
        className='mt-0 max-w-screen-2xl justify-self-center'
        templateAreas={`'sectionHeader sectionHeader'
                        'sectionTextOne sectionImage'
                        'sectionTextTwo sectionImage'
                        'sectionTextThree sectionImage'
                        'sectionTextFour sectionImage'
                        'sectionBanner sectionBanner'`}
      >
        {/* First Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextOne'
        >
          Hi, we are Trine and Jean-Michel, the parents behind Lykkå Village, a
          community-building and co-living startup wishing to effect social
          justice and innovation... one neighborhood at a time.
        </GridItem>

        {/* Second Paragraph */}
        <GridItem className='text-xl mt-8 mr-6 mb-0 ml-8' area='sectionTextTwo'>
          We respectively come from Denmark, where co-housing originated and
          which today has the most co-housing communities per capita in the
          developed world, and Canada, which has one of the largest immigrant
          populations per capita, and where parents tend to immigrate without
          family support.
        </GridItem>

        {/* Third Paragraph */}
        <GridItem
          className='text-xl mt-8 mr-6 mb-0 ml-8'
          area='sectionTextThree'
        >
          The word Lykkå is a weaving together of two Danish words, ‘Lykke’ and
          ‘å’. ‘Lykke’ means ‘happiness’ and ‘å’ means ‘stream’.
        </GridItem>

        {/* Fourth Paragraph */}
        <GridItem
          className='text-xl mt-8 mr-6 mb-0 ml-8'
          area='sectionTextFour'
        >
          “Many small streams create a big river” is a beautiful Danish proverb
          symbolizing what we’re trying to accomplish together.
        </GridItem>

        {/* Trine JM */}
        <GridItem area='sectionImage'>
          <Image
            className='rounded-full hidden md:block w-96 mt-16'
            src={MiscTrineJM}
          />
        </GridItem>

        {/* Mugs */}
        <GridItem
          area='sectionBanner'
          className='my-4 flex justify-center md:mt-0'
        >
          <Image className='scale-90' src={MiscMugs} />
        </GridItem>
      </Grid>
    </>
  );
};
