import React, { useState, useEffect } from 'react'
import Lobby from './components/Lobby.jsx'
import Gallery from './components/Gallery.jsx'
import { artworks } from './artworks.js'
import './styles/App.css'

export default function App() {
  const [entered, setEntered] = useState(false)

  // Lock real viewport height on mobile browsers (address bar resize jank)
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
    }
    setVh()
    window.addEventListener('resize', setVh)
    window.addEventListener('orientationchange', setVh)
    return () => {
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
    }
  }, [])

  return (
    <div className="app-root">
      {!entered ? (
        <Lobby count={artworks.length} onEnter={() => setEntered(true)} />
      ) : (
        <Gallery artworks={artworks} onExit={() => setEntered(false)} />
      )}
    </div>
  )
}
