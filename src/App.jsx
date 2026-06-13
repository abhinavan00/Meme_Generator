import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')

  function getInputValues(e) {
    const {value, name} = e.currentTarget

    setText(prevText => value)
  }

  return (
    <>
      <header>
        <img src={logo} alt='troll face icon' />
        <p>Meme Generator</p>
      </header>
      <main>
        <form>
          <div className='input-fields-container'>
            <div>
              <label htmlFor='top-text'>Top Text</label>
              <input 
                type='text'
                id='top-text'
                name='top-text'
                placeholder='Top Text...'
                onChange={getInputValues}
              />
            </div>
            <div>
              <label htmlFor='bottom-text'>Bottom Text</label>
              <input 
                type='text'
                id='bottom-text'
                name='bottom-text'
                placeholder='Bottom Text...'
                onChange={getInputValues}
              />
            </div>
          </div>
          <button type='submit'>GET A NEW MEME IMAGE  🖼</button>
        </form>
        <div className='img-container'>
          <p className='top-text'>{text}</p>
          <img 
            src='https://i.imgflip.com/1bij.jpg' 
            alt='One Does Not Simply' 
            className='meme-img'  
          />
          <p className='bottom-text'>{text}</p>
        </div>
      </main>
    </>
  )
}

export default App
