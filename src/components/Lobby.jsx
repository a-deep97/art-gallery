import React from 'react'
import { artistInfo } from '../artworks.js'
import '../styles/Lobby.css'

export default function Lobby({ count, onEnter }) {
  return (
    <div className="lobby">
      <div className="lobby__texture" aria-hidden="true" />

      <div className="lobby__frame" aria-hidden="true">
        <div className="lobby__frame-inner" />
      </div>

      <div className="lobby__content">
        <span className="lobby__eyebrow">Pocket&nbsp;Gallery</span>

        <h1 className="lobby__title">
          {artistInfo.name}
        </h1>

        <p className="lobby__tagline">{artistInfo.tagline}</p>

        <div className="lobby__meta">
          <span className="lobby__meta-dot" aria-hidden="true" />
          <span>
            {count === 0
              ? 'Collection opening soon'
              : `${count} work${count === 1 ? '' : 's'} on view`}
          </span>
        </div>

        <button
          className="lobby__enter"
          onClick={onEnter}
          aria-label="Enter the gallery"
        >
          <span>Enter Gallery</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 9H14M14 9L9.5 4.5M14 9L9.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <p className="lobby__hint lobby__hint--touch">Swipe up once inside</p>
        <p className="lobby__hint lobby__hint--pointer">Use the arrows — or your keyboard — once inside</p>
      </div>
    </div>
  )
}