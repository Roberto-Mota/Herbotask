/**
 * Main application component.
 * @returns {JSX.Element} The rendered App component.
 */
import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Form from './components/PlantForm.jsx';
import Header from './components/Header.jsx';
// import AuthRoute from "./components/AuthRoute";

import PageAllPlants from './components/PageAllPlants.jsx';
// import Timer from './components/Timer/Timer';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      {/* <Route path="/login" element={} /> */}

        <Route
          path="/"
          element={
            // <AuthRoute>
              <PageAllPlants/>
            // </AuthRoute>
          }
        />
        
         <Route path="/createPlant" element={<Form />} /> 
        {/*<Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ExploreProducts/>} />
        <Route path="/products/:idParam" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} /> */}
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
