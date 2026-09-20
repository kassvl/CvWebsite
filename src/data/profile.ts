export const profile = {
  name: 'Kadirhan Emre',
  shortName: 'Kadirhan',
  monogram: 'KEM',
  role: 'Full-Stack Developer',
  tagline:
    'I build web apps end to end: React and Next.js front ends, APIs in Python and TypeScript, PostgreSQL, and the Docker, CI and AWS setup that ships them. Paying clients in production since April 2026.',
  location: 'Wrocław, Poland',
  region: 'EU · UTC+1',
  status: 'Open to work: full-stack internship or working student',
  email: 'kadirhanemre@proton.me',
  // Phone stays out of the public site on purpose (scrapers, spam); it is on the CV only.
  github: 'https://github.com/kassvl',
  linkedin: 'https://linkedin.com/in/kadirhan-emre',
  website: 'https://kadirhanemrememis.xyz',
  avatar: 'https://avatars.githubusercontent.com/u/195515554?v=4',
  resumeUrl: '#contact',
  // Portfolio status (hero floating card): real, checkable numbers only
  systemStatus: {
    region: 'wrocław · eu',
    role: 'full-stack dev',
    status: 'available now',
    liveSites: 2,
  },
  // Hero terminal: each line must be true today
  terminal: [
    { cmd: 'ls', arg: '~/live', out: 'braidss.xyz   loomr.net' },
    { cmd: 'cat', arg: 'stack.txt', out: 'React · Next.js · FastAPI · PostgreSQL' },
  ],
} as const

export type Profile = typeof profile
