import React, { useState, useRef, useCallback, useEffect } from 'react'
import ArtworkPanel from './ArtworkPanel.jsx'
import EmptyRoom from './EmptyRoom.jsx'
import RoomRail from './RoomRail.jsx'
import '../styles/Gallery.css'

export default function Gallery({ artworks, onExit }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentStop, setCurrentStop] = useState(0)
  const scrollerRef = useRef(null)
  const panelRefs = useRef([])
  const endRef = useRef(null)

  const handleScroll = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const idx = Math.round(el.scrollTop / el.clientHeight)
    setCurrentStop(idx)
    setActiveIndex((prev) => {
      const clamped = Math.min(idx, artworks.length - 1)
      return prev !== clamped ? clamped : prev
    })
  }, [artworks.length])

  // Debounced via rAF for smooth, cheap tracking during momentum scroll
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        handleScroll()
        raf = null
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  const goTo = useCallback((idx) => {
    const el = scrollerRef.current
    const panel = panelRefs.current[idx]
    if (el && panel) {
      el.scrollTo({ top: panel.offsetTop, behavior: 'smooth' })
    }
  }, [])

  // Total scrollable stops = every artwork + the closing "end of collection" panel
  const totalStops = artworks.length + 1

  const step = useCallback((delta) => {
    const el = scrollerRef.current
    if (!el) return
    const next = Math.min(Math.max(currentStop + delta, 0), totalStops - 1)
    const target = panelRefs.current[next] || endRef.current
    if (target) {
      el.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
    }
  }, [currentStop, totalStops])

  // Arrow keys / Page Up/Down move through the gallery — handy on laptops
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        step(1)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        step(-1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [step])

  if (!artworks || artworks.length === 0) {
    return <EmptyRoom onExit={onExit} />
  }

  return (
    <div className="gallery">
      <header className="gallery__topbar">
        <button className="gallery__back" onClick={onExit} aria-label="Back to entrance">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="gallery__counter">
          {String(activeIndex + 1).padStart(2, '0')} / {String(artworks.length).padStart(2, '0')}
        </span>
        <span className="gallery__topbar-spacer" />
      </header>

      <RoomRail
        count={artworks.length}
        activeIndex={activeIndex}
        onSelect={goTo}
      />

      <button
        className="gallery__nav gallery__nav--prev"
        onClick={() => step(-1)}
        disabled={currentStop === 0}
        aria-label="Previous artwork"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 16L6.5 10L12.5 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        className="gallery__nav gallery__nav--next"
        onClick={() => step(1)}
        disabled={currentStop === totalStops - 1}
        aria-label="Next artwork"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 4L13.5 10L7.5 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="gallery__scroller" ref={scrollerRef}>
        {artworks.map((art, i) => (
          <div
            key={art.id}
            className="gallery__panel-wrap"
            ref={(node) => (panelRefs.current[i] = node)}
          >
            <ArtworkPanel
              artwork={art}
              isActive={i === activeIndex}
              index={i}
            />
          </div>
        ))}
        <div className="gallery__end" ref={endRef}>
          <span className="gallery__end-mark" aria-hidden="true" />
          <p className="gallery__end-text">End of collection</p>
          <button className="gallery__end-restart" onClick={() => goTo(0)}>
            Back to the first room
          </button>
        </div>
      </div>
    </div>
  )
}