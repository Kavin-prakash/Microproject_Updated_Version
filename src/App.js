import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './Components/Mainpage';
import React, { useState, useEffect,createContext } from 'react';
import UploadPetDetail from './Components/Postpetdetail';
import UploadPetAccessory from './Components/PostPetAccessory';
// import UpdatePetAccessoryForm from './Components/UpdatePetAccssory';
// import UpdatePetAccessory from './Components/UpdatePetAccssory';
import Loading from './Components/LoadingComponent';
import Home from './Components/Home'
import UpdatePetDetails from './Components/UpdatePetDet';
import { Viewcart } from './Components/Viewcart';
import { Header } from './Components/Homeheader';


export const cartContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);

  // const logintimeout = 5000; // time out 


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }), []

  return (

    <div className='App'>
      {isLoading ? (<Loading />) : (
        <cartContext.Provider value={{ cart, setCart }}>
          <BrowserRouter>
          <Header cart={cart}/>
            <Routes>
              <Route>
                <Route path="/" element={<Mainpage />} />
                <Route path="Register" element={<Registration />} />
                <Route path="Login" element={<Login setIsLoading={setIsLoading} />} />
                <Route path="home" element={<Home />} />
                <Route path="postpets" element={<UploadPetDetail />} />
                <Route path="postaccessory" element={<UploadPetAccessory />} />
                <Route path="putpetdetail" element={<UpdatePetDetails />} />
                <Route path='putaccessorydetail' element={<UploadPetAccessory />} />
                <Route path="/Cart" element={<Viewcart />}/>

              </Route>
            </Routes>
          </BrowserRouter>
        </cartContext.Provider>

      )}

      {/* <UploadeFile/> */}
      {/* <UploadForm/> */}
      {/* <Home/> */}

      {/* <UploadPetDetail/> */}
      {/* <UploadPetAccess/> */}
      {/* <UpdatePetAccessory/> */}
    </div>

  );
}

export default App;
{/* <Route path="Login" element={<Login setIsLoading={setIsLoading} logintimeout={logintimeout} />} /> */ }
