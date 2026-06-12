import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src={logo} alt='troll face icon' />
        <p>Meme Generator</p>
      </header>
      <main>
        <form>
          <input 
            type='text'
            name='top-text'
            placeholder='Top Text...'
          />
        </form>
      </main>
    </>
  )
}

export default App
