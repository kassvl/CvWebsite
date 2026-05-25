export interface SkillGroup {
  title: string
  caption: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud',
    caption: 'Infra layer — where workloads run.',
    items: ['AWS', 'OCI', 'GCP (lab)', 'Azure (lab)', 'Cloudflare'],
  },
  {
    title: 'Containers & Orchestration',
    caption: 'Day-2 operators of clusters.',
    items: ['Kubernetes', 'EKS', 'Kind', 'k3s', 'Docker', 'Helm', 'Kustomize'],
  },
  {
    title: 'Service Mesh & Networking',
    caption: 'Zero-trust traffic, mTLS by default.',
    items: ['Istio', 'Istio Ambient', 'Envoy', 'NGINX', 'Cilium (lab)', 'Linkerd (lab)'],
  },
  {
    title: 'Infrastructure as Code',
    caption: 'Reproducible everything.',
    items: ['Terraform', 'OpenTofu', 'Ansible', 'Helm Charts'],
  },
  {
    title: 'CI / CD & GitOps',
    caption: 'From commit to production, automated.',
    items: ['GitHub Actions', 'GitLab CI', 'Argo CD', 'Flux', 'Jenkins (lab)'],
  },
  {
    title: 'Observability & SRE',
    caption: 'Golden signals + incident-grade tooling.',
    items: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'OpenTelemetry', 'Kiali'],
  },
  {
    title: 'Security',
    caption: 'mTLS, IAM, KMS, policy as code.',
    items: ['mTLS', 'OPA', 'IRSA', 'Trivy', 'Kyverno', 'Falco', 'Checkov', 'tfsec'],
  },
  {
    title: 'Compliance Awareness',
    caption: 'Frameworks I design controls against.',
    items: ['PCI-DSS v4.0', 'GDPR / Schrems II', 'EU DORA', 'CIS AWS Foundations', 'NIST 800-53'],
  },
  {
    title: 'Languages & Scripting',
    caption: 'Tools I reach for when shell stops scaling.',
    items: ['Python', 'TypeScript', 'Go (learning)', 'Bash', 'YAML', 'HCL'],
  },
]
