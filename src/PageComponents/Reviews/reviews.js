import React, { useState, useEffect } from 'react';
import { Typography, Box, Link } from '@mui/material';
import HomeHeader from '../Home/homeHeader.js';
import NavBar from '../NavBar/navbar.js';
import Woman from '../assets/woman.jpg';
import Woman2 from '../assets/woman2.jpg';
import Woman3 from '../assets/woman3.jpg';
import Woman4 from '../assets/woman4.jpg';
import Woman5 from '../assets/woman5.jpg';
import '../../index.css';
import Footer from '../Footer/footer.js';
import SingleReview from './singleReview.js';
import client from '../../sanityClient';

const query = '*[_type == "testimonials"]';

const Reviews = (props) => {
  const [reviewOptions, setReviewOptions] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    client
      .fetch(query)
      .then((queryResponse) => {
        const updatedReviewOptions = queryResponse.map((item) => {
          return {
            backgroundImg: item?.Testimonial?.image?.asset?._ref || '',
            name: item?.Testimonial?.Name || 'N/A',
            description: item?.Testimonial?.Quote || 'N/A',
          };
        });

        setReviewOptions(updatedReviewOptions);
        setLoading(false);
      })
      .catch(console.error);
  });

  console.log('REVIEWS', reviewOptions);

  if (loading) {
    return <div>Loading...</div>;
  }

  const testimonials = [
    {
      picture: reviewOptions[0]?.backgroundImg,
      name: reviewOptions[0]?.name,
      description: reviewOptions[0]?.description,
    },
    {
      picture: reviewOptions[1]?.backgroundImg,
      name: reviewOptions[1]?.name,
      description: reviewOptions[1]?.description,
    },
    {
      picture: reviewOptions[2]?.backgroundImg,
      name: reviewOptions[2]?.name,
      description: reviewOptions[2]?.description,
    },
    {
      picture: reviewOptions[3]?.backgroundImg,
      name: reviewOptions[3]?.name,
      description: reviewOptions[3]?.description,
    },
    {
      picture: reviewOptions[4]?.backgroundImg,
      name: reviewOptions[4]?.name,
      description: reviewOptions[4]?.description,
    },
    {
      picture: reviewOptions[5]?.backgroundImg,
      name: reviewOptions[5]?.name,
      description: reviewOptions[5]?.description,
    },
  ];

  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <Box
        sx={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B1E1E',
          gap: '50px',
          paddingBottom: '50px',
        }}
      >
        <Typography
          sx={{
            paddingTop: '50px',
            fontFamily: 'Birds',
            color: '#E4DCC0',
            fontSize: { lg: '98px', md: '64px', sm: '64px', xs: '60px' },
          }}
        >
          Testimonials
        </Typography>
        <SingleReview
          picture={testimonials[0].picture}
          description={testimonials[0].description}
          name={testimonials[0].name}
        />
        <SingleReview
          picture={testimonials[1].picture}
          description={testimonials[1].description}
          name={testimonials[1].name}
        />
        <SingleReview
          picture={testimonials[2].picture}
          description={testimonials[2].description}
          name={testimonials[2].name}
        />
        <SingleReview
          picture={testimonials[3].picture}
          description={testimonials[3].description}
          name={testimonials[3].name}
        />
        <SingleReview
          picture={testimonials[4].picture}
          description={testimonials[4].description}
          name={testimonials[4].name}
        />
        <SingleReview
          picture={testimonials[5].picture}
          description={testimonials[5].description}
          name={testimonials[5].name}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default Reviews;
