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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Home Route */}
      <Route index element={<Landingpage/>} />

      {/* InputPage Route */}
      <Route path="/input-page" element={<Inputpage />} />
    </Route>
  )
);



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-xl'>Persona AI</h2>
      
      <RouterProvider router={router} />
   

    </>
  )
}

export default App
