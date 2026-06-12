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
          <div>
            <label for='top-text'>Top Text</label>
            <input 
              type='text'
              id='top-text'
              name='top-text'
              placeholder='Top Text...'
            />
          </div>
          <div>
            <label for='bottom-text'>Bottom Text</label>
            <input 
              type='text'
              id='bottom-text'
              name='bottom-text'
              placeholder='Bottom Text...'
            />
          </div>
        </form>
      </main>
    </>
  )
}

export default App
