import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '30px',
      background: `linear-gradient(to bottom left, #5B5C50, #1B1E1E)`,
      color: '#F5DE6D',
      '&:hover': {
        color: '#5B5C50',
        background: '#F5DE6D',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '2px solid #F5DE6D',
    }}
  >
    Book Today!
  </Button>
);

const MyServiceButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
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
    }}
  >
    Schedule Today!
  </Button>
);

const MyTeamButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
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
    }}
  >
    Schedule Today!
  </Button>
);

const MyTeamButtonDark = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '30px',
      background: `#C2AD90`,
      color: '#1B1E1E',
      fontWeight: 'bold',
      '&:hover': {
        color: '#C2AD90',
        background: '#1B1E1E',
        border: '2px solid #C2AD90',
        fontWeight: 'bold',
      },
      border: '2px solid #1B1E1E',
      marginTop: 'auto',
    }}
  >
    Schedule Today!
  </Button>
);

export { MyStyledButton, MyServiceButton, MyTeamButton, MyTeamButtonDark };
