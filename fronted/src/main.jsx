import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Footer from './footer';
import Homepage from './Landing page/Home/HomePage';
import PricingPage from './Landing page/Pricing/PricingPage';
import AboutPage from './Landing page/about/AboutPage';
import SupportPage from './Landing page/Support/SupportPage';
import ProductPage from './Landing page/Products/ProductPage';
import Singup from './Landing page/singup/SignUp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='*' element={<Homepage/>}/>
      <Route path='/singup'element={<Singup/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
     </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
