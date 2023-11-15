import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../index.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../sanityClient';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const SingleReview = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  console.log('props', props.picture);

  return (
    <motion.div animate={controls} variants={squareVariants} initial='hidden'>
      <Box
        ref={ref}
        sx={{
          height: 'auto',
          width: {
            xl: '80%',
            lg: '80%',
            md: '80%',
            sm: '90%',
            xs: '90%',
          },
          padding: '20px',
          borderRadius: '15px',
          backgroundColor: '#E4DCC0',
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          gap: {
            xl: '0px',
            lg: '0px',
            md: '0px',
            sm: '15px',
            xs: '15px',
          },
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 'auto',

          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <Box
          sx={{
            height: {
              xl: '240px',
              lg: '200px',
              md: '180px',
              sm: '140px',
              xs: '140px',
            },
            width: {
              xl: '240px',
              lg: '200px',
              md: '180px',
              sm: '140px',
              xs: '140px',
            },
            borderRadius: '50%',
            backgroundImage: `url(${urlFor(props.picture)})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '3px solid',
            borderColor: '#1B1E1E',
          }}
        ></Box>
        <Box
          sx={{
            width: {
              xl: '60%',
              lg: '60%',
              md: '60%',
              sm: '100%',
              xs: '100%',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xl: '24px',
                lg: '20px',
                md: '18px',
                sm: '16px',
                xs: '14px',
              },
              textAlign: 'center',

              color: '#1B1E1E',
            }}
          >
            {props.description}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xl: '26px',
                lg: '22px',
                md: '20px',
                sm: '18px',
                xs: '22px',
              },
              textAlign: {
                xl: 'right',
                lg: 'right',
                md: 'right',
                sm: 'center',
                xs: 'center',
              },
              paddingTop: '15px',
              color: '#1B1E1E',
              fontFamily: 'Birds',
            }}
          >
            {props.name}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SingleReview;
