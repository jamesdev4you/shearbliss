import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../sanityClient';
import HomeHeader from '../Home/homeHeader';
import NavBar from '../NavBar/navbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Typography } from '@mui/material';
import { MyServiceButton } from '../styledComponents.js';
import Footer from '../Footer/footer.js';

const query = '*[_type == "galleryPicture"]';

const Gallery = (props) => {
  const [pictureOptions, setPictureOptions] = useState([]);

  useEffect(() => {
    client
      .fetch(query)
      .then((queryResponse) => {
        console.log('Response', queryResponse);
        const updatedPictureOptions = queryResponse.map((item) => {
          return {
            picture: item?.image?.asset?._ref,
            title: item?.image?.alt,
          };
        });
        setPictureOptions(updatedPictureOptions);
      })
      .catch(console.error);
  }, []);

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  console.log('hiiii', pictureOptions);

  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#1B1E1E',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            marginBottom: '15px',
            fontFamily: 'Birds',
            paddingTop: '.8em',
            fontSize: { lg: '98px', md: '64px', sm: '64px', xs: '54px' },
          }}
          color='secondary.main'
        >
          Our Gallery
        </Typography>
        <ImageList
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '80%',
              lg: '80%',
              xl: '80%',
            },
            marginBottom: '100px',
            marginTop: '100px',
            border: '1px solid #E4DCC0',
          }}
        >
          {pictureOptions.map((item) => (
            <ImageListItem key={item.title}>
              <img
                srcSet={urlFor(item.picture)}
                src={urlFor(item.picture)}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                actionIcon={<MyServiceButton />}
                sx={{
                  padding: '15px',
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'flex',
                    xl: 'flex',
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Footer />
    </div>
  );
};

export default Gallery;
