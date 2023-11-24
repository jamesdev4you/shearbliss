import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { MyServiceButton } from '../styledComponents.js';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

var myAtoi = function (menuItems) {
  // Loop through each menu item
  for (const menuItem of menuItems) {
    // Dynamically determine the keys for items and prices
    let itemKeys = Object.keys(menuItem).filter(key => key.startsWith('item'));
    let priceKeys = Object.keys(menuItem).filter(key => key.startsWith('price'));

    // For each item, add periods until the desired length is reached
    itemKeys.forEach((itemKey, index) => {
      const priceKey = priceKeys[index];
      if (menuItem[itemKey] && menuItem[priceKey]) {
        // Calculate the number of periods needed
        let totalLength = menuItem[itemKey].length + menuItem[priceKey].toString().length;
        let periodsNeeded = 22 - totalLength;
        let periods = periodsNeeded > 0 ? '.'.repeat(periodsNeeded) : '';

        // Concatenate item, periods, and price
        menuItem[itemKey] = `${menuItem[itemKey]}${periods}${menuItem[priceKey]}`;
      }
    });
  }

  return menuItems;
};

const HomeMenu = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { menuOp } = props;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  if (!menuOp || !menuOp[0] || !menuOp[0].hair) {
    // Handle the loading state or show an error message
    return <div>Loading...</div>; // Or display an error message
  }

  const menuItems = [
    {
      id: 1,
      title: 'Hair',
      priceOne: props.menuOp[0].hair.ItemOnePrice,
      itemOne: props.menuOp[0].hair.ItemOne,
      priceTwo: props.menuOp[0].hair.ItemTwoPrice,
      itemTwo: props.menuOp[0].hair.ItemTwo,
      priceThree: props.menuOp[0].hair.ItemThreePrice,
      itemThree: props.menuOp[0].hair.ItemThree,
    },
    {
      id: 2,
      title: 'Mani-Pedi',
      priceOne: props.menuOp[0].manipedi.ItemOnePrice,
      itemOne: props.menuOp[0].manipedi.ItemOne,
      priceTwo: props.menuOp[0].manipedi.ItemTwoPrice,
      itemTwo: props.menuOp[0].manipedi.ItemTwo,
      priceThree: props.menuOp[0].manipedi.ItemThreePrice,
      itemThree: props.menuOp[0].manipedi.ItemThree,
    },
    {
      id: 3,
      title: 'Facial',
      priceOne: props.menuOp[0].facial.ItemOnePrice,
      itemOne: props.menuOp[0].facial.ItemOne,
      priceTwo: props.menuOp[0].facial.ItemTwoPrice,
      itemTwo: props.menuOp[0].facial.ItemTwo,
      priceThree: props.menuOp[0].facial.ItemThreePrice,
      itemThree: props.menuOp[0].facial.ItemThree,
      itemFour: props.menuOp[0].facial.ItemFour,
      priceFour: props.menuOp[0].facial.ItemFourPrice,
      itemFive: props.menuOp[0].facial.ItemFive,
      priceFive: props.menuOp[0].facial.ItemFivePrice,
    },
    {
      id: 4,
      title: 'Color',
      priceOne: props.menuOp[0].color.ItemOnePrice,
      itemOne: props.menuOp[0].color.ItemOne,
      priceTwo: props.menuOp[0].color.ItemTwoPrice,
      itemTwo: props.menuOp[0].color.ItemTwo,
      priceThree: props.menuOp[0].color.ItemThreePrice,
      itemThree: props.menuOp[0].color.ItemThree,
      itemFour: props.menuOp[0].color.ItemFour,
      priceFour: props.menuOp[0].color.ItemFourPrice,
    },
    {
      id: 5,
      title: 'Custom Colors',
      priceOne: props.menuOp[0].customcolor.ItemOnePrice,
      itemOne: props.menuOp[0].customcolor.ItemOne,
      priceTwo: props.menuOp[0].customcolor.ItemTwoPrice,
      itemTwo: props.menuOp[0].customcolor.ItemTwo,
    },
    {
      id: 6,
      title: 'Wax',
      priceOne: props.menuOp[0].wax.ItemOnePrice,
      itemOne: props.menuOp[0].wax.ItemOne,
      priceTwo: props.menuOp[0].wax.ItemTwoPrice,
      itemTwo: props.menuOp[0].wax.ItemTwo,
      priceThree: props.menuOp[0].wax.ItemThreePrice,
      itemThree: props.menuOp[0].wax.ItemThree,
      itemFour: props.menuOp[0].wax.ItemFour,
      priceFour: props.menuOp[0].wax.ItemFourPrice,
    },
    {
      id: 7,
      title: 'Textures',
      priceOne: props.menuOp[0].textures.ItemOnePrice,
      itemOne: props.menuOp[0].textures.ItemOne,
      priceTwo: props.menuOp[0].textures.ItemTwoPrice,
      itemTwo: props.menuOp[0].textures.ItemTwo,
    },
    {
      id: 8,
      title: 'Extensions',
      priceOne: props.menuOp[0].extensions.ItemOnePrice,
      itemOne: props.menuOp[0].extensions.ItemOne,
    },
  ];

  // Access menuOptions properties safely after data has been fetched
  const modifiedMenuItems = myAtoi(menuItems);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        background: '#1B1E1E',
        paddingTop: {
          xl: '100px',
          lg: '100px',
          md: '100px',
          sm: '50px',
          xs: '50px',
        },
        paddingBottom: '7em',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          fontFamily: 'Birds',
          fontSize: { lg: '98px', md: '64px', sm: '64px', xs: '54px' },
        }}
        color='secondary.main'
      >
        Our Menu
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          fontFamily: 'Birds',
          fontSize: { lg: '38px', md: '24px', sm: '18px', xs: '18px' },
        }}
        color='secondary.main'
      >
        Prices may vary
      </Typography>
      <motion.div
        className='homeMenuBox'
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
        style={{height: 'auto', flexWrap: 'wrap', }}
      >
        {modifiedMenuItems.map(
          ({
            id,
            title,
            priceOne,
            itemOne,
            itemTwo,
            priceTwo,
            itemThree,
            priceThree,
            itemFour,
            priceFour,
            itemFive,
            priceFive,
            itemSix,
            priceSix,
          }) => (
            <Box
              key={id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                fontAlign: 'center',
                width: {
                  xs: '90%',
                  sm: '70%',
                  md: '550px',
                  lg: '450px',
                  xl: '550px',
                },
                height: {
                  xs: '450px',
                  sm: '550px',
                  md: '550px',
                  lg: '60vh',
                  xl: '60vh',
                },
                padding: '15px',
                backgroundColor: '#E4DCC0',
                borderRadius: '15px',
                borderBottom: '3px solid black',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              }}
            >
              <Box
                sx={{
                  width: '95%',
                  height: '95%',
                  border: '3px solid #1B1E1E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '40px',
                      sm: '60px',
                      md: '50px',
                      lg: '50px',
                      xl: '50px',
                    },
                    lineHeight: '1em',
                    fontFamily: 'Birds',
                    width: '90%',
                    paddingTop: '.2em',
                    borderBottom: '3px solid #1B1E1E',
                    textAlign: 'center',
                    color: '#1B1E1E',
                    marginBottom: '1em',
                  }}
                >
                  {title}
                </Typography>
                {itemOne && priceOne && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '32px',
                      md: '34px',
                      lg: '30px',
                      xl: '34px',
                    },
                    lineHeight: '1em',
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemOne}
                  
                </Typography>
                )}
                {itemTwo && priceTwo && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '32px',
                      md: '34px',
                      lg: '30px',
                      xl: '34px',
                    },
                    lineHeight: '1em',
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemTwo}
                  
                </Typography>
                )}
                {itemThree && priceThree && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '32px',
                      md: '34px',
                      lg: '30px',
                      xl: '34px',
                    },
                    lineHeight: '1em',
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemThree}
                  
                </Typography>
                )}
                {itemFour && priceFour && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '32px',
                      md: '34px',
                      lg: '30px',
                      xl: '34px',
                    },
                    lineHeight: '1em',
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemFour}
                  
                </Typography>
                )}
                {itemFive && priceFive && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '32px',
                      md: '34px',
                      lg: '30px',
                      xl: '34px',
                    },
                    lineHeight: '1em',
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemFive}
                  
                </Typography>
                )}
                {itemSix && priceSix && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '32px',
                      md: '34px',
                      lg: '30px',
                      xl: '34px',
                    },
                    lineHeight: '1em',
                    fontFamily: 'Mono',
                    marginBottom: '15px',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    
                  }}
                >
                  {itemSix}
                  
                </Typography>
                )}
                <Box sx={{marginTop: 'auto', marginBottom: '15px'}}>
                <MyServiceButton />
                </Box>
              </Box>
            </Box>
          )
        )}
      </motion.div>
    </Box>
  );
};

export default HomeMenu;
