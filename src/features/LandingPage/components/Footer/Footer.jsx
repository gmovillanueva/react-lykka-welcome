// Base imports
import React from 'react';

// Stuff import
import {
  Container,
  ButtonGroup,
  Button,
  Divider,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

// Project imports

export const Footer = () => {
  return (
    <>
      {/* Container Box */}
      <Container as='footer' className='font-sans bg-ocean max-w-full'>
        {/* Site Map Stack */}
        <Stack spacing='8' direction='row' className='justify-center'>
          {/* About Us Stack */}
          <Stack>
            <Text className='text-granite font-bold'>About Us</Text>
            {/* About Us Button Stack */}
            <Stack spacing='0.1rem' shouldWrapChildren>
              <Button variant='link' size='xs'>
                About Lykkå Village
              </Button>
              <Button variant='link' size='xs'>
                Careers
              </Button>
              <Button variant='link' size='xs'>
                Press Center
              </Button>
              <Button variant='link' size='xs'>
                Investors
              </Button>
              <Button variant='link' size='xs'>
                Affliates & Partners
              </Button>
            </Stack>
          </Stack>

          {/* Help Stack */}
          <Stack>
            <Text className='text-granite font-bold'>Help</Text>
            {/* Help Button Group */}
            <Stack spacing='0.1rem' shouldWrapChildren>
              <Button variant='link' size='xs'>
                Advisors
              </Button>
              <Button variant='link' size='xs'>
                Contact Us
              </Button>
              <Button variant='link' size='xs'>
                Pricing
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {/* Divider */}
        <Divider />

        {/* Social Media & Licensing Stack */}
        <Stack
          justify='space-between'
          direction={{ base: 'column', md: 'row' }}
          align='center'
          className='pt-1 pb-3'
        >
          <ButtonGroup variant='ghost'>
            <IconButton aria-label='Facebook' icon={<FaFacebookSquare />} />
            <IconButton aria-label='Instagram' icon={<FaInstagram />} />
            <IconButton aria-label='LinkedIn' icon={<FaLinkedin />} />
            <IconButton aria-label='Twitter' icon={<FaTwitter />} />
          </ButtonGroup>
          <Text className='text-granite text-sm'>
            &copy; {new Date().getFullYear()} Lykkå Village, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </>
  );
};
