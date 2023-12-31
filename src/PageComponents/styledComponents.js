import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import '../index.css';
import '../navlink.css';

const MyStyledButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '30px',
      background: `linear-gradient(to bottom left, #5B5C50, #1B1E1E)`,
      color: '#F5DE6D',
      borderRadius: '15px',
      '&:hover': {
        color: '#5B5C50',
        background: '#F5DE6D',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '2px solid #F5DE6D',
      fontFamily: 'Birds',
    }}
  >
    <NavLink to='/appointment' className='nav_links'>
      Book Today!
    </NavLink>
  </Button>
);

const MyServiceButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '35px',
      background: `primary.main`,
      color: 'secondary.main',
      fontWeight: 'bold',
      borderRadius: '15px',
      '&:hover': {
        color: 'primary.main',
        background: '#E4DCC0',
        border: '2px solid #1B1E1E',
        fontWeight: 'bold',
      },
      border: '2px solid #E4DCC0',
      fontFamily: 'Birds',
    }}
    href='/appointment'
  >
    <NavLink to='/appointment' className='nav_links'>
      Schedule Today!
    </NavLink>
  </Button>
);

const MyTeamButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '6px',
      width: '200px',
      height: '30px',
      background: `primary.main`,
      color: 'secondary.main',
      fontWeight: 'bold',
      '&:hover': {
        color: 'primary.main',
        background: '#E4DCC0',
        border: '2px solid #1B1E1E',
        fontWeight: 'bold',
      },
      border: '2px solid #E4DCC0',
      marginTop: 'auto',
      fontFamily: 'Birds',
      borderRadius: '15px',
    }}
    href='/appointment'
  >
    <NavLink to='/appointment' className='nav_links'>
      Schedule Today!
    </NavLink>
  </Button>
);

const MyTeamButtonDark = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '6px',
      width: '200px',
      height: '30px',
      background: `#C2AD90`,
      color: '#1B1E1E',
      '&:hover': {
        color: '#C2AD90',
        background: '#1B1E1E',
        border: '2px solid #C2AD90',
        fontWeight: 'bold',
      },
      border: '2px solid #1B1E1E',
      marginTop: 'auto',
      fontFamily: 'Birds',
      borderRadius: '15px',
    }}
  >
    <NavLink to='/appointment' className='nav_links'>
      Schedule Today!
    </NavLink>
  </Button>
);

const MyShop = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '6px',
      width: '200px',
      height: '30px',
      background: `primary.main`,
      color: 'secondary.main',
      fontWeight: 'bold',
      '&:hover': {
        color: 'primary.main',
        background: '#E4DCC0',
        border: '2px solid #1B1E1E',
        fontWeight: 'bold',
      },
      border: '2px solid #E4DCC0',
      marginTop: 'auto',
      fontFamily: 'Birds',
      borderRadius: '15px',
    }}
    href='https://shop.saloninteractive.com/store/ShearBlissBeautyBar'
  >
    Shop Now!
  </Button>
);

export {
  MyStyledButton,
  MyServiceButton,
  MyTeamButton,
  MyTeamButtonDark,
  MyShop,
};
