import React, { useEffect, useState } from 'react';
import HomeHeader from '../Home/homeHeader.js';
import HomeServices from '../Home/homeServices.js';
import HomeStylists from './homeStylists.js';
import HomeMenu from './homeMenu.js';
import NavBar from '../NavBar/navbar.js';
import Footer from '../Footer/footer.js';
import client from '../../sanityClient';
import { color } from 'framer-motion';

const query = '*[_type == "ourMenu"]';
const query2 = '*[_type == "ourServices"]';

export default function Home(props) {
  const { headerOp } = props;
  const [menuOptions, setMenuOptions] = useState([]);
  const [servicesOptions, setServicesOptions] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both queries separately using Promise.all()
        const [queryResponse, query2Response] = await Promise.all([
          client.fetch(query),
          client.fetch(query2),
        ]);

        // Process the first query response
        const updatedMenuOptions = queryResponse.map((item) => {
          return {
            facial: item.Facial,
            manipedi: item.ManiPedi,
            hair: item.Hair,
            color: item.Color,
            customcolor: item.CustomColor,
            wax: item.Wax,
            textures: item.Textures,
            extensions: item.Extensions,
          };
        });
        setMenuOptions(updatedMenuOptions);

        // Process the second query response
        const updatedServicesOptions2 = query2Response.map((item) => {
          return {
            facial: item.Facials,
            manipedi: item.ManiPedi,
            hair: item.HairStylist,
          };
        });
        setServicesOptions(updatedServicesOptions2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []);

  return (
    <div>
      <NavBar />
      <HomeHeader headerOp={props.headerOp} />
      <HomeServices servicesOp={servicesOptions} />
      <HomeStylists />
      <HomeMenu menuOp={menuOptions} />
      <Footer />
    </div>
  );
}
