export const personalInfo = {
  name: "Fattah Emir Yanuar",
  title: "Senior Cloud Infrastructure Engineer",
  location: "Bekasi, Indonesia",
  email: "fattahemiryanuar@gmail.com",
  phone: "+62 857 8289 1482",
  linkedin: "https://www.linkedin.com/in/fattah-emir-yanuar-7a1982173",
  github: "https://github.com/nizmitz",
  profile: "Senior Cloud Infrastructure Engineer with over 7 years of expertise automating and securing high-availability hybrid and multi-cloud environments (AWS, GCP, Alibaba Cloud, VMware, OpenShift). Certified across multiple providers including Google, Alibaba, AWS, HashiCorp, and Kubernetes/Linux Foundation. Experienced across Telco, Banking/FSI, and Consulting domains for organizations requiring 99.9% uptime availability, and has built and led a team of 8 engineers from the ground up. Outside of work, actively researching NVIDIA AI infrastructure and cybersecurity through a self-hosted LLM environment in a personal homelab."
};

export const skills = [
  { name: "Terraform", icon: "Boxes" },
  { name: "GCP", icon: "Cloud" },
  { name: "Kubernetes", icon: "Ship" },
  { name: "AWS", icon: "CloudLightning" },
  { name: "Red Hat Openshift", icon: "Layers" },
  { name: "Hashicorp", icon: "Lock" },
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
      "Implemented automation for CloudSQL backup and restore, eliminating recurring monthly toil while maintaining compliance with OJK and BI regulations.",
      "Led the implementation of BMC Control-M to automate operational toil across AS/400 and other systems, reducing human error and improving reliability.",
      "Administer and maintain uptime Hybrid Cloud setup in GCP, AWS and On-Premise VMware",
      "Drove automation of the VMware Disaster Recovery process using BMC Control-M (integrating PowerCLI, PowerShell, and third-party APIs), cutting execution time, manual steps, and human error.",
      "Spearheaded the VMware exit to GCP, mitigating a sharp cost increase driven by licensing price hikes.",
      "Led a parallel VMware exit to Sangfor for workloads that cannot meet OJK compliance in public cloud, containing licensing cost increases while preserving regulatory compliance.",
      "Maintain and Administer multiple GKE cluster using Helm, Terraform, ArgoCD",
      "Maintained and improved core platform tooling (GitLab, ArgoCD, Helm, Terraform, Vault, Dynatrace) used daily by a large engineering team to abstract infrastructure complexity and accelerate delivery."
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
      "Safeguarded the uptime of one of Indonesia's largest privately owned telcos, running across a multi-cloud and hybrid-cloud environment.",
      "Founded, led, and mentored a strong team of Cloud and DevOps engineers managing the cloud infrastructure of Indonesia's largest telco (XL) at high uptime.",
      "Creating and implementing policy for maintaining governance in cloud",
      "Led the end-to-end handover of a complex multi-cloud environment, ensuring operational continuity and smooth knowledge transfer.",
      "Operated AWS and GCP infrastructure with cloud-native tooling (ArgoCD, Terraform, Jenkins, GitLab, Kubernetes) and authored the runbooks and documentation enabling the operations team to run it."
    ]
  },
  {
    title: "Site Reliability Engineer",
    company: "DKATALIS",
    location: "Jakarta, Jakarta, Indonesia",
    date: "June 2022 — June 2024",
    sublines: [
      "DKatalis is the digital technology company behind Bank Jago — one of Indonesia's leading app-based digital banks — where a 500+ engineer organization has also delivered products such as the now-retired Amaan and the PX HR platform."
    ],
    responsibilities: [
      "Sustained 99.9% uptime for Bank Jago's digital-banking platform on Google Cloud — GKE, Istio service mesh, ArgoCD, Helm, Terraform, and Vault-based secret injection.",
      "Maintained 99.9% uptime for the Amaan platform on Alibaba Cloud, provisioned with Helm, Terraform, and Vault.",
      "Built and maintained the observability stack (ELK, Dynatrace, Cloud Monitoring, custom bots), including Python alerting bots that surface PostgreSQL health and zombie-pod conditions across Kubernetes.",
      "Codified infrastructure across both clouds with Terraform and GitLab CI — reusable blueprints for a self-service model — and maintained highly available DNS on Cloudflare for reliable service discovery and traffic routing.",
      "Administered Debian/Ubuntu and CentOS fleets and automated patching and security scanning via Ansible to enforce CIS Ubuntu 20.04 hardening compliance.",
      "Implemented Teleport as a Zero-Trust access solution, replacing traditional PAM.",
      "Hardened the CI/CD pipeline on self-managed GitLab — container scanning (Grype), secret detection, SAST/IaC scanning, and code-quality gates — alongside SonarQube and Nexus.",
      "Led incident response for production security and infrastructure events.",
      "Drove cloud cost-optimization initiatives to reduce operational expenditure (OPEX)."
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
      "Maintain availability and perform troubleshooting for multiple regional sites of VMware product such as ESXi, vSAN, vCenter, SRM and vROps",
      "Maintain uptime and troubleshoot any cluster/platform level issue that happen in Red Hat Openshift cluster",
      "Administered and performance-tuned RHEL 7/8 Linux to sustain 99.9% uptime for high-performance systems serving two of Indonesia's largest telcos.",
      "Perform some security vulnerabilities scanning and perform remediation to affected system using ansible tower and Jenkins with custom playbook",
      "Standby for weekly on-call rotation",
      "Providing L2/L3 support to two of the biggest telecommunication company in Indonesia",
      "Piloted Terraform on GCP to introduce infrastructure-as-code on a per-project basis.",
      "Maintained BIND DNS configuration and hardened its backup strategy for resilience."
    ]
  },
  {
    title: "System Engineer",
    company: "PT. Astra Graphia Information Technology (AGIT)",
    location: "Greater Jakarta Area, Indonesia",
    date: "October 2019 — March 2021",
    sublines: [
      "AGIT is a leading Indonesian ICT and IT-infrastructure solutions provider, part of the Astra International group, serving enterprise clients across the country."
    ],
    responsibilities: [
      "Implementing various storage and server solution which may vary among all brands depending on the customer needs",
      "Delivered a zero-downtime VMware upgrade for fintech client AstraPay, including migration from local datastore to SAN storage.",
      "Configuration of SAN over FC and ISCSI, with Brocade, Cisco MDS, and Dell switches",
      "Deployed the VMware stack (vCenter + vSphere) for AstraPay — cluster configuration, Huawei Dorado V6 integration, and end-to-end NVMeoF connectivity — with zero service downtime.",
      "installation and Configuration of Hypervisor and HCI such as, HyperV, Nutanix, Sangfor, VMware",
      "Assist Network team with core routing and email delivery."
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
      "Collaborate with team members in providing technical documentation and level 1 technical support to management level.",
      "Engaging and maintaining windows 2012 server and thick client.",
      "Maintaining equipment of Sanako Study 1200 multimedia language and classroom management software.",
      "Perform basic network hardware maintenance and troubleshooting."
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
  { name: "Indonesia", proficiency: "Native proficiency", detail: "" },
  { name: "English", proficiency: "Professional proficiency", detail: "IELTS rating C1/7.5" },
  { name: "Japan", proficiency: "Rudimentary", detail: "" }
];
