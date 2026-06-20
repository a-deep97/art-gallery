// ─────────────────────────────────────────────────────────────────────────
// THE COLLECTION
// ─────────────────────────────────────────────────────────────────────────
// This is the only file you need to edit to populate your gallery.
//
// 1. Drop your image files into:  public/art/
// 2. Add one entry below per artwork, in the order you want them to appear
//    as you swipe through the gallery (like rooms in a museum).
// 3. `src` should be the filename only — it's resolved against /art/.
//
// Fields:
//   id       — unique short string, used as a React key (e.g. "001")
//   src      — filename inside public/art/, e.g. "midnight-orchard.jpg"
//   title    — artwork title, shown on the wall placard
//   year     — year created, e.g. "2024" (string, so "c. 2023" also works)
//   medium   — e.g. "Oil on canvas", "Digital", "Charcoal on paper"
//   dimensions — optional, e.g. "60 × 80 cm"
//   note     — optional short curator's note / artist statement (1-2 lines)
//
// Leave the array empty (as it is now) and the gallery will show a friendly
// "empty room" state until you add your first piece.
// ─────────────────────────────────────────────────────────────────────────

export const artworks = [
  // Example of the shape to copy — delete or keep commented out:
  // {
  //   id: '001',
  //   src: 'midnight-orchard.jpg',
  //   title: 'Midnight Orchard',
  //   year: '2024',
  //   medium: 'Oil on canvas',
  //   dimensions: '60 × 80 cm',
  //   note: 'Painted over three nights in late autumn.',
  // },
]

export const artistInfo = {
  name: 'Your Name',
  tagline: 'A collection of recent works',
}
