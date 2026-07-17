export const personalInfo = {
  name: "Fattah Emir Yanuar",
  title: "Senior Cloud Infrastructure Engineer",
  location: "Bekasi, Indonesia",
  email: "fattahemiryanuar@gmail.com",
  phone: "+62 857 8289 1482",
  linkedin: "https://www.linkedin.com/in/fattah-emir-yanuar-7a1982173",
  github: "https://github.com/nizmitz",
  nationality: "Indonesian",
  gender: "Male",
  profile: "Senior Cloud Infrastructure Engineer with 7+ years hardening banking and telco platforms at scale — serving tens of millions of users at 99.9% uptime — across AWS, GCP, Alibaba Cloud, VMware, and OpenShift. Backed by 14 active certifications across Google, AWS, Alibaba Cloud, HashiCorp, and the Linux Foundation, with a track record of driving governance and cross-functional ownership in regulated, high-stakes environments. Built and led a team of 8 engineers from the ground up while operating as a proven remote-first collaborator across distributed, async teams. Outside of work, actively researching NVIDIA AI infrastructure and cybersecurity through a self-hosted LLM environment running quantized 3–7B models in a personal homelab."
};

export const skills = [
  { name: "Terraform", icon: "Boxes" },
  { name: "GCP", icon: "Cloud" },
  { name: "Kubernetes", icon: "Ship" },
  { name: "AWS", icon: "CloudLightning" },
  { name: "Red Hat OpenShift", icon: "Layers" },
  { name: "HashiCorp", icon: "Lock" },
  { name: "Git", icon: "GitBranch" },
  { name: "Ansible", icon: "Terminal" }
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  sublines?: string[];
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "IT DC & DRC (Platform Engineer)",
    company: "PT Bank Jago Tbk",
    location: "Jakarta Metropolitan Area",
    date: "March 2025 — Present",
    sublines: [
      "PT Bank Jago Tbk is a pioneering technology-based bank listed on the Indonesia Stock Exchange and deeply embedded in the GoTo ecosystem (Gojek, GoPay, Tokopedia), delivering life-centric conventional and Sharia banking to over 17 million customers."
    ],
    responsibilities: [
      "Faced with a ~100% VMware licensing cost increase, drove the exit of on-premise workloads to GCP, containing infrastructure spend while modernizing the platform.",
      "Led a parallel VMware exit to Sangfor (on-premise HCI platform) for workloads that cannot meet OJK/BI (Indonesia's financial regulators) compliance in public cloud, avoiding the doubled licensing cost while preserving regulatory compliance.",
      "Automated the VMware Disaster Recovery process with BMC Control-M — integrating PowerCLI, PowerShell, and third-party APIs — cutting the SRM recovery step from 45–60 minutes to 15.",
      "Automated CloudSQL backup and restore, eliminating ~4 hours of recurring manual toil per month while sustaining compliance with OJK and BI regulations.",
      "Led the rollout of BMC Control-M to automate operational toil across AS/400 and other systems, eliminating a recurring 8-hour manual monitoring shift and cutting human error.",
      "Operated a hybrid-cloud environment (GCP, AWS, on-premise VMware) and 13 GKE clusters running 100+ microservices, using Helm, Terraform, ArgoCD, Atlantis, and Istio to sustain continuous uptime.",
      "Maintained and improved core platform tooling (GitLab, ArgoCD, Helm, Terraform, Vault, Dynatrace) used daily by a 500-engineer organization to abstract infrastructure complexity and accelerate delivery."
    ]
  },
  {
    title: "Technology Specialist",
    company: "Amdocs",
    location: "Remote",
    date: "June 2024 — February 2025",
    sublines: [
      "Amdocs is a multinational provider of software and products for telecommunications operators; in Indonesia it delivers the core charging and billing systems for the largest state-owned telco (Telkomsel) and a leading private operator (XL)."
    ],
    responsibilities: [
      "Founded, led, and mentored a team of Cloud and DevOps engineers distributed across Indonesia and India, building the group from the ground up to manage the cloud infrastructure of one of Indonesia's largest privately owned telcos (XL) at high uptime.",
      "Safeguarded the uptime of one of Indonesia's largest privately owned telcos across a multi-cloud and hybrid-cloud environment, delivered fully remote.",
      "Authored the runbooks and documentation enabling the operations team to independently run AWS and GCP infrastructure, using ArgoCD, Terraform, Jenkins, GitLab, and Kubernetes.",
      "Led the end-to-end handover of a complex multi-cloud environment in 3 months, ensuring operational continuity and smooth knowledge transfer.",
      "Defined and enforced cloud governance policies to uphold security and compliance standards."
    ]
  },
  {
    title: "Site Reliability Engineer",
    company: "DKATALIS",
    location: "Remote",
    date: "June 2022 — June 2024",
    sublines: [
      "DKatalis is the digital technology company behind Bank Jago — one of Indonesia's leading app-based digital banks — where a 500+ engineer organization has also delivered products such as the now-retired Amaan and the PX HR platform."
    ],
    responsibilities: [
      "Sustained 99.9% uptime for Bank Jago's digital-banking platform on Google Cloud — GKE, Istio service mesh, ArgoCD, Helm, Terraform, and Vault-based secret injection.",
      "Maintained 99.9% uptime for the Amaan platform on Alibaba Cloud, provisioned with Helm, Terraform, and Vault.",
      "Identified and eliminated idle and oversized cloud resources across both clouds, cutting recurring cloud spend by 15–25%.",
      "Hardened the CI/CD pipeline on self-managed GitLab — container scanning (Grype), secret detection, SAST/IaC scanning, and code-quality gates — alongside SonarQube and Nexus, closing security gaps before production.",
      "Automated patching and security scanning across a 40-host Debian/Ubuntu and CentOS fleet via Ansible, enforcing CIS Ubuntu 20.04 hardening compliance.",
      "Introduced Teleport as the organization's first Zero-Trust access layer, bringing PAM-grade control to production access and closing a standing attack-surface gap.",
      "Codified infrastructure across both clouds with Terraform and GitLab CI — reusable blueprints for a self-service model — and maintained highly available DNS on Cloudflare for reliable service discovery and traffic routing.",
      "Built and maintained the observability stack (ELK, Dynatrace, Cloud Monitoring, custom Python alerting bots) surfacing PostgreSQL health and zombie-pod conditions across Kubernetes.",
      "Led incident response for production security and infrastructure events."
    ]
  },
  {
    title: "System Administrator",
    company: "Amdocs",
    location: "Remote",
    date: "March 2021 — June 2022",
    sublines: [
      "Amdocs is a multinational provider of software and services for the world's leading telecommunications operators, supporting mission-critical systems for two of Indonesia's largest telcos."
    ],
    responsibilities: [
      "Built automation with Ansible Tower, Jenkins, and shell scripting to eliminate repetitive operational toil (filesystem extension, user backup/auditing, DR drills), freeing engineers for higher-value work and reducing human error.",
      "Sustained 99.9% uptime for high-performance RHEL 7/8 systems serving two of Indonesia's largest telcos through proactive performance tuning.",
      "Sustained uptime and resolved cluster- and platform-level issues across Red Hat OpenShift.",
      "Piloted Terraform on GCP to introduce infrastructure-as-code on a per-project basis.",
      "On-call owner in a weekly production rotation, providing L2/L3 support to two of Indonesia's largest telecommunications companies.",
      "Performed security vulnerability scanning and remediation using Ansible Tower and Jenkins with custom playbooks.",
      "Maintained availability across multiple regional VMware sites (ESXi, vSAN, vCenter, SRM, vROps) and hardened the BIND DNS backup strategy for resilience."
    ]
  },
  {
    title: "System Engineer",
    company: "PT. Astra Graphia Information Technology (AGIT)",
    location: "Jakarta Metropolitan Area",
    date: "October 2019 — March 2021",
    sublines: [
      "AGIT is a leading Indonesian ICT and IT-infrastructure solutions provider, part of the Astra International group, serving enterprise clients across the country."
    ],
    responsibilities: [
      "Delivered a zero-downtime VMware upgrade for fintech client AstraPay, migrating 30 TB from local datastore to SAN storage.",
      "Deployed the VMware stack (vCenter + vSphere) for AstraPay — cluster configuration, Huawei Dorado V6 integration, and end-to-end NVMeoF connectivity — with zero service downtime.",
      "Configured SAN over Fibre Channel and iSCSI using Brocade, Cisco MDS, and Dell switches.",
      "Implemented multi-vendor storage and server solutions across 30 client projects, tailored to each customer's requirements.",
      "Installed and configured hypervisor and HCI platforms including Hyper-V, Nutanix, Sangfor, and VMware.",
      "Supported the network team with core routing and email delivery."
    ]
  },
  {
    title: "Technical Support",
    company: "Universitas Gunadarma",
    location: "Indonesia",
    date: "March 2018 — October 2019",
    sublines: [
      "Universitas Gunadarma is one of Indonesia's prominent private universities, long recognized for its computer science and information technology programs."
    ],
    responsibilities: [
      "Collaborated with the team to deliver technical documentation and Level 1 support to management.",
      "Maintained Windows Server 2012 thick-client workstations and the Sanako Study 1200 multimedia language lab and classroom-management systems.",
      "Performed network hardware maintenance and troubleshooting."
    ]
  },
  {
    title: "Translator",
    company: "Wargaming",
    location: "Indonesia",
    date: "October 2011 — June 2012",
    sublines: [
      "Wargaming is a global game developer and publisher, best known for the free-to-play phenomenon World of Tanks, whose franchise has surpassed 350 million registered players worldwide."
    ],
    responsibilities: [
      "Localized English game content into Indonesian to enable World of Tanks' new South-East Asia (SEA) server, opening the title to Indonesian players.",
      "Handled pre-release content under NDA."
    ]
  }
];

export const certifications = [
  { name: "Generative AI Leader", issuer: "Google", date: "Jul 2026 — Jul 2029" },
  { name: "Google Cloud Certified Professional Cloud DevOps Engineer", issuer: "Google", date: "Jul 2026 — Jul 2028" },
  { name: "KCSA: Kubernetes and Cloud Native Security Associate", issuer: "The Linux Foundation", date: "Nov 2025 — Nov 2027" },
  { name: "KCNA: Kubernetes and Cloud Native Associate", issuer: "The Linux Foundation", date: "Nov 2025 — Nov 2027" },
  { name: "IELTS Academic", issuer: "British Council", date: "Aug 2025 — Aug 2027" },
  { name: "CKA: Certified Kubernetes Administrator", issuer: "The Linux Foundation", date: "Oct 2025 — Oct 2027" },
  { name: "CKAD: Certified Kubernetes Application Developer", issuer: "The Linux Foundation", date: "Jan 2025 — Jan 2027" },
  { name: "AWS Certified Solutions Architect - Professional", issuer: "Amazon Web Services (AWS)", date: "Oct 2024 — Oct 2027" },
  { name: "Alibaba Cloud Certified Associate Cloud Security", issuer: "Alibaba Cloud", date: "Oct 2024 — Oct 2026" },
  { name: "Google Cloud Certified Professional Cloud Architect", issuer: "Google", date: "Oct 2024 — Oct 2027" },
  { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services (AWS)", date: "Aug 2024 — Aug 2027" },
  { name: "HashiCorp Certified: Terraform Associate (003)", issuer: "HashiCorp", date: "Jul 2024 — Jul 2026" },
  { name: "Alibaba Cloud Certified Professional Big Data", issuer: "Alibaba Cloud", date: "Jul 2024 — Jul 2026" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "Feb 2020 — No Expiration" }
];

export const education = [
  {
    degree: "Bachelor's degree in Information Technology",
    school: "Universitas Gunadarma",
    date: "August 2015 — September 2019",
    gpa: "3.11/4",
    activities: "Lab Technical Support",
    finalProject: "Controlling Home Appliance Based on NodeMCU Using Android Smartphone"
  }
];

export const languages = [
  { name: "Indonesian", proficiency: "Native proficiency", detail: "", cefr: "Native / C2" },
  { name: "English", proficiency: "Professional proficiency", detail: "IELTS rating C1/7.5", cefr: "C1" },
  { name: "Japanese", proficiency: "Rudimentary", detail: "", cefr: "A1" }
];
