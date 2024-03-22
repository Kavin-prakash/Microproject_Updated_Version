// import React, { useState } from 'react'
// // import { Link } from 'react-router-dom'
// import *as FaIcons from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faBug, faCartShopping, faUserPlus, faMessage, faTicket } from '@fortawesome/free-solid-svg-icons';
// import './Home.css'


// const Home = () => {


//     const [sidebar, setSidebar] = useState(false);

//     const showsidebar = () => setSidebar(!sidebar);
//     return (
//         <>
//             <div className='container'>
//                 <div className='navbar'>
//                     <a to="#" className='menu-bars' onClick={showsidebar} ><FaIcons.FaBars /></a>
//                 </div>
//                 {/* <a className='header-container'>ZaNdo GaMing and  EntertainMent HuB </a> */}

//             </div>

//             <div>
//                 <nav className={sidebar ? 'nav-menuactive' : 'nav-menu'}>
//                     <ul className='nav-menu-items'>
//                         <li>
//                         </li>
//                         <li>
//                             <a  className='nav-text '><FontAwesomeIcon icon={faHouse} /><span>Home</span></a>
//                         </li>
//                         <li>
//                             <a  className='nav-text '><FontAwesomeIcon icon={faBug} /><span>Reports</span></a>
//                         </li>
//                         <li>
//                             <a className='nav-text '><FontAwesomeIcon icon={faCartShopping} /><span>Products</span></a>
//                         </li>
//                         <li>
//                             <a className='nav-text'><FontAwesomeIcon icon={faUserPlus} /><span>Team</span></a>
//                         </li>
//                         <li>
//                             <a className='nav-text '><FontAwesomeIcon icon={faMessage} /><span>Messages</span></a>
//                         </li>
//                         <li>
//                             <a className='nav-text '><FontAwesomeIcon icon={faTicket} /><span>Support</span></a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className='body-container'>

//             </div>


//             <div className='footer-container'>

//             </div>

//         </>
//     )
// }


// export default Home;


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import axios from "axios";
// import { Product } from "./Petproducts";
import { Product } from "./Petproducts";
import './Home.css';
import { useContext } from "react";
import { cartContext } from "../App";


export const Home = () => {


  const { cart, setCart } = useContext(cartContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await axios.get("http://localhost:5066/api/OnlinePetShop/GetAllPetAccessoryy");
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);
  return (
    <Container className="product-container">


      {product.map((product) => (

        <Product key={product.id} product={product} cart={cart} setCart={setCart} />


      ))}
    </Container>




  );
};

export default Home;