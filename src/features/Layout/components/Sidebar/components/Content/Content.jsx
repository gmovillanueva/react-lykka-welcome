// Base import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';

// @chakra import
import { Box, Link, Flex, Icon } from '@chakra-ui/react';

// Project import
import LykkaLogo from 'components/Logo';
import { sidebarConfig } from 'features/Layout/api';

// -----------------------------------------------------------------------------
function NavSection({ data = [], ...other }) {
  return (
    <Box className='outline-8 outline-granite-900' {...other}>
      {data.map((itemLink) => (
        <NavItem key={itemLink.title} item={itemLink} />
      ))}
    </Box>
  );
}

NavSection.propTypes = {
  data: PropTypes.array,
};

// -----------------------------------------------------------------------------
function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <Link
      as={RouterLink}
      to={path}
      className='
        capitalize
        no-underline
        focus:shadow-none
        aria-[current=page]:font-bold'
    >
      <Flex
        className='
          h-12
          items-center
          justify-center
          hover:bg-snowdrift
          hover:rounded-l-2xl
          hover:before:h-[30px]
          hover:before:w-[30px]
          hover:before:right-0
          hover:before:bottom-full
          hover:before:rounded-br-2xl
          hover:before:bg-[#ff0000]
          hover:before:shadow-[0_15px_0_0_#0000ff]
          hover:after:h-[30px]
          hover:after:w-[30px]
          hover:after:right-0
          hover:after:top-full
          hover:after:rounded-tr-2xl
          hover:after:bg-[#ff0000]
          hover:after:shadow-[0_15px_0_0_#0000ff]
          active:bg-sunrise
          [&.active]:bg-sunrise'
      >
        <Icon
          className='
            w-8
            h-8
            items-center
            justify-center
            text-granite-800'
        >
          {icon && icon}
        </Icon>

        {title && title}
        {info && info}
      </Flex>
    </Link>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

// -----------------------------------------------------------------------------
export const Content = () => (
  <>
    <LykkaLogo
      className='mt-6 ml-16 w-36'
      primarycolor='#fff'
      secondarycolor='#fff'
    />
    <NavSection data={sidebarConfig} />
  </>
);
