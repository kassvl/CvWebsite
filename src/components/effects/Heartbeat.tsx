/**
 * EKG / patient-monitor trace. A dim full heartbeat line with a bright segment that sweeps
 * across it, the way a vitals monitor scans. Ties the page to the "Git Hospital" family of his
 * OSS work (MeshMedic, Helmbulance) without touching the "Workshop at night" palette: the sweep
 * uses the existing brand vermilion, which already reads as an emergency red.
 *
 * The sweep is a pure CSS animation on `stroke-dashoffset`, normalised with `pathLength`, so it
 * is length-independent and stops under `prefers-reduced-motion` (see `.ekg-sweep` in index.css).
 */
type HeartbeatProps = {
  /** Height of the strip in px. Width always fills the parent. */
  height?: number
  className?: string
}

// One heartbeat (160px wide), baseline y = 24: flat, P wave, QRS spike, T wave, flat tail.
function beatAt(x: number): string {
  return (
    `L${x} 24 ` +
    'l6 0 q4 -7 8 0 l10 0 ' + // flat + P wave
    'l4 3 l5 -19 l5 31 l5 -16 ' + // QRS complex
    'l10 0 q5 -6 10 0 ' + // T wave
    'l97 0' // flat tail to the next beat
  )
}

// Three beats across the 480-wide box.
const FULL = ['M0 24', beatAt(0), beatAt(160), beatAt(320)].join(' ')

export function Heartbeat({ height = 48, className = '' }: HeartbeatProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height={height}
      viewBox="0 0 480 48"
      fill="none"
      preserveAspectRatio="none"
    >
      {/* dim baseline trace */}
      <path
        d={FULL}
        stroke="rgb(var(--rgb-brand-primary) / 0.28)"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* bright segment that sweeps across like a monitor scan */}
      <path
        className="ekg-sweep"
        d={FULL}
        pathLength={100}
        stroke="rgb(var(--rgb-brand-primary))"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
