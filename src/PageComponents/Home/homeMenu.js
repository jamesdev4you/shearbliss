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
  let itemsArray = Object.keys(menuItems[0]);
  let filteredItems = itemsArray.filter((item) => item.includes('item'));

  console.log(filteredItems);

  for (const object of menuItems) {
    for (let i = 0; i < filteredItems.length; i++) {
      do {
        object[filteredItems[i]] += '.';
      } while (object[filteredItems[i]].length <= 15);
    }
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
      itemFour: props.menuOp[0].hair.ItemFour,
      priceFour: props.menuOp[0].hair.ItemFourPrice,
      itemFive: props.menuOp[0].hair.ItemFive,
      priceFive: props.menuOp[0].hair.ItemFivePrice,
      itemSix: props.menuOp[0].hair.ItemSix,
      priceSix: props.menuOp[0].hair.ItemSixPrice,
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
      itemFour: props.menuOp[0].manipedi.ItemFour,
      priceFour: props.menuOp[0].manipedi.ItemFourPrice,
      itemFive: props.menuOp[0].manipedi.ItemFive,
      priceFive: props.menuOp[0].manipedi.ItemFivePrice,
      itemSix: props.menuOp[0].manipedi.ItemSix,
      priceSix: props.menuOp[0].manipedi.ItemSixPrice,
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
      itemSix: props.menuOp[0].facial.ItemSix,
      priceSix: props.menuOp[0].facial.ItemSixPrice,
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
          fontSize: { lg: '98px', md: '64px', sm: '64px', xs: '70px' },
        }}
        color='secondary.main'
      >
        Our Menu
      </Typography>
      <motion.div
        className='homeMenuBox'
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
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
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '50px',
                      sm: '60px',
                      md: '90px',
                      lg: '60px',
                      xl: '80px',
                    },
                    lineHeight: '1em',
                    marginBottom: '15px',
                    fontFamily: 'Birds',
                    width: '90%',
                    paddingTop: '.2em',
                    borderBottom: '3px solid #1B1E1E',
                    textAlign: 'center',
                    color: '#1B1E1E',
                  }}
                >
                  {title}
                </Typography>
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
                  {priceOne}
                </Typography>
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
                  {priceTwo}
                </Typography>
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
                  {priceThree}
                </Typography>
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
                  {priceFour}
                </Typography>
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
                  {priceFive}
                </Typography>
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
                    marginBottom: '1em',
                    color: '#1B1E1E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  {itemSix}
                  {priceSix}
                </Typography>
                <MyServiceButton />
              </Box>
            </Box>
          )
        )}
      </motion.div>
    </Box>
  );
};

export default HomeMenu;
