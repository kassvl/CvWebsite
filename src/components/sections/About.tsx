import { Section } from '../ui/Section'

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="about"
      title={
        <>
          A developer who ships the{' '}
          <span className="text-[rgb(var(--rgb-brand-primary))]">whole stack</span>.
        </>
      }
      description={
        <>
          Final-year IT student at WSB Merito Wrocław, graduating in February 2027. Since April 2026
          I have been building websites and web apps for paying clients, from the first call to the
          domain and TLS. Before that I trained as a Cloud &amp; DevOps engineer at EPAM, so I can
          also run what I build.
        </>
      }
      containerSize="narrow"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="What I'm building right now"
          body="A booking system for a braiding studio in Wrocław (live at braidss.xyz), and the API and admin web of a team inventory SaaS that syncs listings to Allegro, Amazon and eBay."
        />
        <Card
          title="How I work"
          body="Small pull requests, tests in CI before merge, and a README that lets someone else run the project. I show clients something they can click early and change it from their feedback."
        />
        <Card
          title="What I'm looking for"
          body="A full-stack internship or working-student role in Wrocław or remote in the EU, starting now, where I ship features to real users and learn from a senior team."
        />
        <Card
          title="Outside the terminal"
          body="Turkish native, English C1+, Polish A2-B1 and improving. Polish Karta Pobytu: full work authorisation in Poland, no sponsorship needed."
        />
      </div>
    </Section>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-5 md:p-6">
      <h3 className="font-display text-base font-semibold text-[rgb(var(--rgb-ink-50))]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--rgb-ink-200))]">{body}</p>
    </div>
  )
}
