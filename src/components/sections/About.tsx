import { Section } from '../ui/Section'

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="about"
      title={
        <>
          Engineer at the{' '}
          <span className="text-[rgb(var(--rgb-brand-primary))]">cloud-native</span> layer.
        </>
      }
      description={
        <>
          Third-year IT student at WSB Merito Wrocław, currently a Cloud &amp; DevOps Trainee at
          EPAM. I work where infrastructure meets traffic — Kubernetes clusters, Istio service
          meshes, Terraform modules and the observability stacks that keep them honest.
        </>
      }
      containerSize="narrow"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="What I'm building right now"
          body="A multi-cluster Istio service mesh demonstrating mTLS-by-default and east–west cross-cluster traffic, plus production-shaped Terraform IaC for an EKS-based payment platform with KMS, IRSA and Istio Ambient."
        />
        <Card
          title="How I work"
          body="Infra as code, GitOps over click-ops, golden signals over vibes. I document everything, ship small, and keep policies explicit (mTLS, NetworkPolicy, OPA where it earns its place)."
        />
        <Card
          title="What I'm looking for"
          body="A junior Cloud / DevOps role in Wrocław or remote across the EU — full-time, working-student or internship — somewhere I can ship platform improvements and grow next to senior SREs."
        />
        <Card
          title="Outside the terminal"
          body="Native Turkish, English C1+, learning Polish (A2 → B1). Holder of a Polish Karta Pobytu, full work authorisation."
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
