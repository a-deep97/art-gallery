import React, { useState } from 'react'
import '../styles/ArtworkPanel.css'

export default function ArtworkPanel({ artwork, isActive, index }) {
  const [placardOpen, setPlacardOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const hasDetails = artwork.dimensions || artwork.note

  return (
    <section
      className={`panel ${isActive ? 'panel--active' : ''}`}
      aria-roledescription="slide"
      aria-label={`Artwork ${index + 1}: ${artwork.title}`}
    >
      <div className="panel__wall" aria-hidden="true" />
      <div className="panel__vignette" aria-hidden="true" />

      <div className="panel__canvas-zone">
        <div className="panel__frame">
          <img
            className={`panel__image ${loaded ? 'panel__image--loaded' : ''}`}
            src={`./art/${artwork.src}`}
            alt={artwork.title}
            loading={Math.abs(index) <= 1 ? 'eager' : 'lazy'}
            onLoad={() => setLoaded(true)}
            draggable={false}
          />
          {!loaded && <div className="panel__shimmer" aria-hidden="true" />}
        </div>
        <div className="panel__spotlight" aria-hidden="true" />
      </div>

      <button
        className={`panel__placard-toggle ${placardOpen ? 'panel__placard-toggle--open' : ''}`}
        onClick={() => setPlacardOpen((o) => !o)}
        aria-expanded={placardOpen}
        aria-label={placardOpen ? 'Hide artwork details' : 'Show artwork details'}
      >
        <span className="panel__placard-toggle-bar" />
      </button>

      <div className={`panel__placard ${placardOpen ? 'panel__placard--open' : ''}`}>
        <div className="panel__placard-row">
          <h2 className="panel__title">{artwork.title}</h2>
          <span className="panel__year">{artwork.year}</span>
        </div>
        <p className="panel__medium">
          {artwork.medium}
          {artwork.dimensions ? <span className="panel__dim"> · {artwork.dimensions}</span> : null}
        </p>
        {artwork.note && (
          <p className="panel__note">{artwork.note}</p>
        )}
      </div>
    </section>
  )
}
