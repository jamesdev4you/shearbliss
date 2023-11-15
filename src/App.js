import React, { useEffect, useState } from 'react';
import Home from './PageComponents/Home/home.js';
import Gallery from './PageComponents/Gallery/gallery.js';
import Appointment from '../src/PageComponents/Appointment/appointment.js';
import Reviews from './PageComponents/Reviews/reviews.js';
import Team from './PageComponents/Team/team.js';
import NavBar from './PageComponents/NavBar/navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { MyServiceButton } from '../src/PageComponents/styledComponents.js';
import client from './sanityClient';

const query = '*[_type == "header"]';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B1E1E',
    },
    secondary: {
      main: '#E4DCC0',
    },
  },
});

function App() {
  const [headerOptions, setHeaderOptions] = useState([]);

  useEffect(() => {
    client
      .fetch(query)
      .then((queryResponse) => {
        console.log('Query Response', queryResponse);
        const updatedHeaderOptions = queryResponse.map((item) => {
          return {
            background: item.backgroundImage.asset._ref,
            title: item.heading,
            desc: item.tagline,
            Button: MyServiceButton,
          };
        });
        setHeaderOptions(updatedHeaderOptions);
      })
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<NavBar />} color='secondary'>
          <Route path='/' element={<Home headerOp={headerOptions[1]} />} />
          <Route
            path='/appointment'
            element={<Appointment headerOp={headerOptions[2]} />}
          />
          <Route
            path='/reviews'
            element={<Reviews headerOp={headerOptions[4]} />}
          />
          <Route path='/team' element={<Team headerOp={headerOptions[3]} />} />
          <Route
            path='/gallery'
            element={<Gallery headerOp={headerOptions[0]} />}
          />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

