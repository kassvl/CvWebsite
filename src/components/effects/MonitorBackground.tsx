/**
 * Live patient-monitor wall behind the page. Several vital-sign traces scroll across the viewport
 * the way a real bedside monitor runs: an ECG lead, a pulse-oximeter plethysmograph and a slow
 * respiration wave, each with its own morphology, colour and speed. Fixed behind the content and
 * kept faint, so it reads as a hospital backdrop, not decoration competing with the text.
 *
 * The shapes are sampled from real waveform functions (QRS spike, dicrotic notch, respiratory
 * sine), not generic squiggles, so it looks like clinical kit rather than a template. Each lane
 * is a 200%-wide SVG holding two identical tiles; CSS translates it by -50% on a loop, which is
 * seamless because every waveform period divides the tile width. The scroll stops under
 * `prefers-reduced-motion` (see `.monitor-lane` in index.css).
 */
type Shape = (phase: number) => number

const gauss = (p: number, mu: number, sigma: number) =>
  Math.exp(-((p - mu) ** 2) / (2 * sigma * sigma))

// ECG lead II: small P wave, sharp QRS complex, rounded T wave.
const ecg: Shape = (p) =>
  0.16 * gauss(p, 0.09, 0.03) -
  0.1 * gauss(p, 0.145, 0.012) +
  1.0 * gauss(p, 0.17, 0.012) -
  0.32 * gauss(p, 0.198, 0.016) +
  0.3 * gauss(p, 0.33, 0.05)

// Pulse-oximeter plethysmograph: steep systolic upstroke, then the dicrotic notch.
const pleth: Shape = (p) => gauss(p, 0.22, 0.1) + 0.34 * gauss(p, 0.46, 0.07)

// Respiration: a slow, smooth breathing wave.
const resp: Shape = (p) => 0.5 + 0.5 * Math.sin(2 * Math.PI * p)

const TILE = 1000
const WIDTH = TILE * 2 // two identical tiles for a seamless -50% scroll

function buildPath(shape: Shape, period: number, amp: number, baseline: number): string {
  const step = 3
  let d = ''
  for (let x = 0; x <= WIDTH; x += step) {
    const phase = (x % period) / period
    const y = baseline - amp * shape(phase)
    d += `${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)} `
  }
  return d.trim()
}

type Lane = {
  key: string
  label: string
  colorVar: string
  shape: Shape
  period: number
  amp: number
  top: string
  duration: string
  opacity: number
}

const LANES: Lane[] = [
  { key: 'ecg1', label: 'ECG II', colorVar: '--rgb-vital', shape: ecg, period: 250, amp: 20, top: '9%', duration: '13s', opacity: 0.5 },
  { key: 'pleth1', label: 'SpO₂', colorVar: '--rgb-brand-primary', shape: pleth, period: 200, amp: 17, top: '27%', duration: '9s', opacity: 0.42 },
  { key: 'resp1', label: 'RESP', colorVar: '--rgb-brand-accent', shape: resp, period: 500, amp: 11, top: '45%', duration: '22s', opacity: 0.4 },
  { key: 'ecg2', label: 'ECG V5', colorVar: '--rgb-vital', shape: ecg, period: 250, amp: 16, top: '64%', duration: '16s', opacity: 0.4 },
  { key: 'pleth2', label: 'SpO₂', colorVar: '--rgb-brand-primary', shape: pleth, period: 200, amp: 13, top: '82%', duration: '11s', opacity: 0.36 },
]

export function MonitorBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {LANES.map((lane) => {
        const baseline = 30
        const d = buildPath(lane.shape, lane.period, lane.amp, baseline)
        return (
          <div
            key={lane.key}
            className="absolute left-0 right-0 flex items-center"
            style={{ top: lane.top, opacity: lane.opacity }}
          >
            <span
              className="z-10 ml-5 mr-3 shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.18em]"
              style={{ color: `rgb(var(${lane.colorVar}))`, opacity: 0.7 }}
            >
              {lane.label}
            </span>
            <div className="relative h-14 flex-1 overflow-hidden">
              <svg
                className="monitor-lane absolute inset-y-0 left-0"
                style={{ width: '200%', animationDuration: lane.duration }}
                height="100%"
                viewBox={`0 0 ${WIDTH} 60`}
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d={d}
                  stroke={`rgb(var(${lane.colorVar}))`}
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}
