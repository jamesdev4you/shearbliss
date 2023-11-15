import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import '../../navlink.css';
import client from '../../sanityClient';

const query = '*[_type == "info"]';

const Footer = () => {
  const [testimonialOptions, setTestimonialOptions] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    client
      .fetch(query)
      .then((queryResponse) => {
        console.log('hiii', queryResponse);
        const updatedTestimonialOptions = queryResponse.map((item) => {
          return {
            phone: item?.phone,
            email: item?.email,
            address: item?.address,
            Monday: item?.hours?.Monday,
            Tuesday: item?.hours?.Tuesday,
            Wednesday: item?.hours?.Wednesday,
            Thursday: item?.hours?.Thursday,
            Friday: item?.hours?.Friday,
            Saturday: item?.hours?.Saturday,
            Sunday: item?.hours?.Sunday,
          };
        });
        setTestimonialOptions(updatedTestimonialOptions);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(console.error);
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  // Render loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E4DCC0' }}>
      <Box
        sx={{
          width: '90%',
          height: 'auto',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Pages{' '}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Ubuntu',
            }}
          >
            <NavLink to='/' className='nav_link'>
              {' '}
              Home{' '}
            </NavLink>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Appointment
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/reviews' className='nav_link'>
              Reviews
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/team' className='nav_link'>
              Team
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/gallery' className='nav_link'>
              Gallery
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Services{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Hair
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Nails
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Facials
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Contact{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            <a
              href='tel:7274879698'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {testimonialOptions[0].phone}
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'black' }}>
            {' '}
            {testimonialOptions[0].email}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Hours{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            {testimonialOptions[0]?.Monday || 'N/A'}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            {testimonialOptions[0]?.Tuesday || 'N/A'}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            {testimonialOptions[0]?.Wednesday || 'N/A'}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            {testimonialOptions[0]?.Thursday || 'N/A'}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            {testimonialOptions[0]?.Friday || 'N/A'}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            {testimonialOptions[0]?.Saturday || 'N/A'}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            {testimonialOptions[0]?.Sunday || 'N/A'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
