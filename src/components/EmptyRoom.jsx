import React from 'react'
import '../styles/EmptyRoom.css'

export default function EmptyRoom({ onExit }) {
  return (
    <div className="empty-room">
      <header className="gallery__topbar">
        <button className="gallery__back" onClick={onExit} aria-label="Back to entrance">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="gallery__counter">00 / 00</span>
        <span className="gallery__topbar-spacer" />
      </header>

      <div className="empty-room__content">
        <div className="empty-room__frame">
          <span className="empty-room__frame-label">Awaiting<br/>installation</span>
        </div>
        <p className="empty-room__title">This room is empty</p>
        <p className="empty-room__body">
          Add images to <code>public/art/</code> and list them in{' '}
          <code>src/artworks.js</code> — they'll hang here automatically.
        </p>
      </div>
    </div>
  )
}
