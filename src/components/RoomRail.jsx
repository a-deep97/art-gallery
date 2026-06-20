import React from 'react'
import '../styles/RoomRail.css'

export default function RoomRail({ count, activeIndex, onSelect }) {
  // For very large collections, cap visible dots and compress with a "..." feel
  // by scaling dot size near the edges. Simpler: just render all, they're tiny.
  return (
    <nav className="rail" aria-label="Gallery rooms">
      <div className="rail__track">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`rail__dot ${i === activeIndex ? 'rail__dot--active' : ''}`}
            onClick={() => onSelect(i)}
            aria-label={`Go to artwork ${i + 1} of ${count}`}
            aria-current={i === activeIndex}
          />
        ))}
      </div>
    </nav>
  )
}
