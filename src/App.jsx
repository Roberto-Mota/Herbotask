import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleTheme from './components/ToggleTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ToggleTheme/>
      </div>
    </>
  )
}

export default App
