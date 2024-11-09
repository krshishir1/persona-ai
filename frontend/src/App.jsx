import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Inputpage from './pages/inputpage';
import Landingpage from './pages/Landingpage';
import Product from './pages/Product';
import HowItWorks from './pages/HowItWorks';

import Contact from './pages/Contact';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    
      <Route index element={<Landingpage/>} />
     <Route path="/input-page" element={<Inputpage />} />

     <Route path="/product" element={<Product />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
    </Route>
  )
);



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
