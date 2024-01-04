import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
// import AuthRoute from "./components/AuthRoute";

import MainPage from './components/MainPage.jsx';
// import Timer from './components/Timer/Timer';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
      {/* <Route path="/login" element={} /> */}

        <Route
          path="/"
          element={
            // <AuthRoute>
              <MainPage/>
            // </AuthRoute>
          }
        />
        
        {/* <Route path="/search" element={<SearchPage />} /> 
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ExploreProducts/>} />
        <Route path="/products/:idParam" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} /> */}
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
