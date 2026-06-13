import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [meme, setMeme] = useState({
    topText: 'One does not Simply',
    bottomText: 'walk into mordor',
    imgUrl: 'https://i.imgflip.com/1bij.jpg'
  })

  function handleChange(e) {
    const {value, name} = e.currentTarget

    setMeme(prevMeme => ({...prevMeme, [name]:value}))
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
                name='topText'
                placeholder='Top Text...'
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='bottom-text'>Bottom Text</label>
              <input 
                type='text'
                id='bottom-text'
                name='bottomText'
                placeholder='Bottom Text...'
                onChange={handleChange}
              />
            </div>
          </div>
          <button type='submit'>GET A NEW MEME IMAGE  🖼</button>
        </form>
        <div className='img-container'>
          <p className='top-text'>{meme.topText}</p>
          <img 
            src='https://i.imgflip.com/1bij.jpg' 
            alt='One Does Not Simply' 
            className='meme-img'  
          />
          <p className='bottom-text'>{meme.bottomText}</p>
        </div>
      </main>
    </>
  )
}

export default App
