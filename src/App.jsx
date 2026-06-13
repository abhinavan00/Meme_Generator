import { useState, useEffect } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [meme, setMeme] = useState({
    topText: 'One does not Simply',
    bottomText: 'walk into mordor',
    imgUrl: 'https://i.imgflip.com/1bij.jpg'
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    fetchMemes()
  }, [])

  function handleChange(e) {
    const {value, name} = e.currentTarget

    setMeme(prevMeme => ({...prevMeme, [name]:value}))
  }

  function getMemeImg() {
    const randomIndex = Math.floor(Math.random() * allMemes.length)

    setMeme(prevMeme => {
      return (
        {
          ...prevMeme,
          imgUrl: allMemes[randomIndex].url
        }
      )
    })
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
          <button type='submit' formAction={getMemeImg}>GET A NEW MEME IMAGE  🖼</button>
        </form>
        <div className='img-container'>
          <p className='top-text'>{meme.topText}</p>
          <img 
            src={meme.imgUrl}
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
