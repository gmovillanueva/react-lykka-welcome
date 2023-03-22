// Base imports
import React from 'react';

// Stuff import
import { Center, Grid, GridItem } from '@chakra-ui/react';

// Project imports
import { LykkaLogo } from 'components';

export const ContentVision = () => {
  return (
    <>
      {/* Our Vision Section Grid Layout */}
      <Grid
        className='mt-0 max-w-screen-2xl justify-self-center mb-8'
        templateAreas={`'sectionHeader sectionHeader'
                        'sectionTextOne sectionImage'
                        'sectionTextTwo sectionImage'
                        'sectionTextThree sectionImage'
                        'sectionTextFour sectionImage'
                        'sectionTextFive sectionImage'
                        'sectionTextSix sectionImage'
                        'sectionTextSeven sectionImage'
                        'lykkaLogo lykkaLogo'`}
      >
        {/* One Paragraph */}
        <GridItem
          className='text-ocean text-4xl mt-8 mr-8 mb-0 ml-16'
          area='sectionTextOne'
        >
          Dear Parents,
        </GridItem>

        {/* Two Paragraph */}
        <GridItem className='text-xl mt-8 mr-6 mb-0 ml-8' area='sectionTextTwo'>
          We don’t think we’re alone in saying that our current model of urban
          family living is kind of killing us. There’s so much loneliness,
          stress, and depression, not to mention an affordable housing crisis.
          So many of us are living right on the edge.
        </GridItem>

        {/* Three Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextThree'
        >
          Things have got to change, starting with breaking down the myth of
          independence.
        </GridItem>

        {/* Four Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextFour'
        >
          Ask yourself, who’s there for you when you need a playdate for your
          kids, a moment to answer an important call or email, or just a little
          moment to breathe? Who’s there for you in times of crisis? Who gives
          you peace of mind while you keep yourself and running?
        </GridItem>

        {/* Five Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextFive'
        >
          With the modern challenges of urban living, we envision a future where
          families are empowered to build their own resilient support networks,
          while raising the next generation of children and looking after our
          elders. It’s time we started taking care of ourselves and each other,
          together.
        </GridItem>

        {/* Six Paragraph */}
        <GridItem
          className='text-xl mt-16 mr-6 mb-0 ml-8'
          area='sectionTextSix'
        >
          This is the underlying belief system upon which Lykkå Village rests.
          This is why we believe Lykkå Village is important, will make a
          difference, and be part of a needed shift in our society to help heal
          ourselves, our communities, and the planet. The benefits at all levels
          are both great and critical. Real societal shift can come from
          families, from how they are supported, and how the next generation is
          nurtured.
        </GridItem>

        {/* Seven Paragraph */}
        <GridItem
          className='text-2xl mt-8 mr-8 mb-0 ml-16'
          area='sectionTextSeven'
        >
          Always,
        </GridItem>

        {/* Logo */}
        <GridItem area='lykkaLogo'>
          <Center>
            <LykkaLogo className='mt-6 w-48' />
          </Center>
        </GridItem>
      </Grid>
    </>
  );
};
