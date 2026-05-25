/**
 * Full-bleed grid background + radial brand glow.
 * Uses utility classes from index.css.
 */
export function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgb(var(--rgb-bg))] to-transparent" />
    </div>
  )
}
