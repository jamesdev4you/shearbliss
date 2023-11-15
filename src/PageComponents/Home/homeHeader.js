import React from 'react';
import { Typography, Box } from '@mui/material';
import '../../index.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../sanityClient';

export default function homeHeader(props) {
  const { title, desc, Button, background } = props.headerOp || {};

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${urlFor(background)})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        borderBottom: '2px solid #E4DCC0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: { lg: '600px', md: '400px', sm: '400px', xs: '98vw' },
          height: { lg: '300px', md: '25vh', sm: '25vh', xs: '30vh' },
          background: '#E4DCC0',
          borderRadius: '15px',
          border: '4px solid #1B1E1E',
        }}
      >
        <Typography
          color='primary.main'
          sx={{
            fontFamily: 'Birds',
            fontSize: { lg: '98px', md: '64px', sm: '64px', xs: '74px' },
            lineHeight: { xs: '.7em', sm: '.7em', md: '1em', lg: '1em' },
          }}
        >
          {title}
        </Typography>
        <Typography
          color='primary.main'
          sx={{
            fontFamily: 'Birds',
            fontSize: { lg: '58px', md: '44px', sm: '44px', xs: '44px' },
          }}
        >
          {desc}
        </Typography>
        <Button />
      </Box>
    </Box>
  );
}
