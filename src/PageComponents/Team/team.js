import React, { useState, useEffect } from 'react';
import HomeHeader from '../Home/homeHeader.js';
import NavBar from '../NavBar/navbar.js';
import { Typography, Box } from '@mui/material';
import { MyTeamButton, MyTeamButtonDark } from '../styledComponents.js';
import '../../index.css';
import Footer from '../Footer/footer.js';
import { useLocation } from 'react-router-dom';
import client from '../../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const query = '*[_type == "ourStylists"]';


const Team = (props) => {
  const { state } = useLocation();
  const { targetId } = state || {};
  const [stylistOptions, setStylistOptions] = useState([]);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }

    client
      .fetch(query)
      .then((queryResponse) => {
        console.log('Response', queryResponse);
        const updatedStylistOptions = queryResponse.map((item) => {
          return {
            backgroundImg: item?.Stylist?.image?.asset?._ref,
            name: item?.Stylist?.Name,
            title: item?.Stylist?.Title,
            descriptionOne: item?.Stylist?.descriptionOne,
            descriptionTwo: item?.Stylist?.descriptionTwo,
            descriptionThree: item?.Stylist?.descriptionThree,
          };
        });
        setStylistOptions(updatedStylistOptions);
      })
      .catch(console.error);
  }, [targetId]);

  if (stylistOptions.length === 0) {
    return null;
  }

  const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

  const teamSections = [
    {
      picture: stylistOptions[0]?.backgroundImg,
      title: stylistOptions[0]?.name,
      job: stylistOptions[0]?.title,
      desc1: stylistOptions[0]?.descriptionOne,
      desc2: stylistOptions[0]?.descriptionTwo,
      desc3: stylistOptions[0]?.descriptionThree,
      primaryColor: '#1B1E1E',
      backgroundColor: '#E4DCC0',
      dabutton: <MyTeamButtonDark />,
      section: 'womanOne',
    },
    {
      picture: stylistOptions[1]?.backgroundImg,
      title: stylistOptions[1]?.name,
      job: stylistOptions[1]?.title,
      desc1: stylistOptions[1]?.descriptionOne,
      desc2: stylistOptions[1]?.descriptionTwo,
      desc3: stylistOptions[1]?.descriptionThree,
      primaryColor: '#E4DCC0',
      backgroundColor: '#1B1E1E',
      dabutton: <MyTeamButton />,
      section: 'womanTwo',
    },
    {
      picture: stylistOptions[2]?.backgroundImg,
      title: stylistOptions[2]?.name,
      job: stylistOptions[2]?.title,
      desc1: stylistOptions[2]?.descriptionOne,
      desc2: stylistOptions[2]?.descriptionTwo,
      desc3: stylistOptions[2]?.descriptionThree,
      primaryColor: '#1B1E1E',
      backgroundColor: '#E4DCC0',
      dabutton: <MyTeamButtonDark />,
      section: 'womanThree',
    },
    {
      picture: stylistOptions[3]?.backgroundImg,
      title: stylistOptions[3]?.name,
      job: stylistOptions[3]?.title,
      desc1: stylistOptions[3]?.descriptionOne,
      desc2: stylistOptions[3]?.descriptionTwo,
      desc3: stylistOptions[3]?.descriptionThree,
      primaryColor: '#E4DCC0',
      backgroundColor: '#1B1E1E',
      dabutton: <MyTeamButton />,
      section: 'womanFour',
    },
  ];

  console.log(teamSections)

  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <Box
        sx={{
          height: 'auto',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B1E1E',
        }}
      >
        {teamSections.map(
          ({
            picture,
            title,
            job,
            desc1,
            desc2,
            desc3,
            primaryColor,
            backgroundColor,
            dabutton,
            section,
          }) => (
            <Box
              id={section}
              sx={{
                width: '100%',
                height: {
                  xs: 'auto',
                  sm: 'auto',
                  md: 'auto',
                  lg: 'auto',
                  xl: '80vh',
                },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                padding: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: '1em',
                  xl: '14em',
                },
                backgroundColor: backgroundColor,
              }}
            >
              <Box
                sx={{
                  width: '30%',
                  height: '62vh',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: primaryColor,
                  borderRadius: '15px',
                  background: `url(${urlFor(
                    picture
                  )})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'none',
                  backgroundPosition: 'center',
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'none',
                    xl: 'flex',
                  },
                }}
              />
              <Box
                sx={{
                  width: {
                    xs: '90%',
                    sm: '90%',
                    md: '90%',
                    lg: '80%',
                    xl: '70%',
                  },
                  height: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'auto',
                    xl: '62vh',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '15px',
                  borderWidth: {
                    xs: '0px',
                    sm: '0px',
                    md: '0px',
                    lg: '0px',
                    xl: '3px',
                  },
                  borderStyle: 'solid',
                  borderColor: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'none',
                    xl: primaryColor,
                  },
                  borderRadius: '15px',
                  padding: '15px',
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: '200px',
                      sm: '200px',
                      md: '300px',
                      lg: '300px',
                      xl: 'none',
                    },
                    height: {
                      xs: '200px',
                      sm: '200px',
                      md: '300px',
                      lg: '300px',
                      xl: 'none',
                    },
                    borderColor: primaryColor,
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderRadius: '50%',
                    background: `url(${urlFor(
                      picture
                    )})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    display: {
                      xs: 'flex',
                      sm: 'flex',
                      md: 'flex',
                      lg: 'flex',
                      xl: 'none',
                    },
                  }}
                />
                <Typography
                  sx={{
                    color: primaryColor,
                    fontFamily: 'Birds',
                    fontSize: {
                      lg: '98px',
                      md: '64px',
                      sm: '64px',
                      xs: '60px',
                    },
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    color: primaryColor,
                    fontFamily: 'Birds',
                    fontSize: {
                      xl: '50px',
                      lg: '58px',
                      md: '54px',
                      sm: '44px',
                      xs: '24px',
                    },
                  }}
                >
                  {job}
                </Typography>
                <Typography
                  variant='p'
                  sx={{ color: primaryColor, width: '90%' }}
                >
                  {desc1}
                </Typography>
                <Typography
                  variant='p'
                  sx={{ color: primaryColor, width: '90%' }}
                >
                  {desc2}
                </Typography>
                <Typography
                  variant='p'
                  sx={{ color: primaryColor, width: '90%' }}
                >
                  {desc3}
                </Typography>
                {dabutton}
              </Box>
            </Box>
          )
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default Team;
