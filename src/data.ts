export const personalInfo = {
  name: "Fattah Emir Yanuar",
  title: "Senior Cloud Infrastructure Engineer",
  location: "Bekasi, Indonesia",
  email: "fattahemiryanuar@gmail.com",
  phone: "+62 857 8289 1482",
  linkedin: "https://www.linkedin.com/in/fattah-emir-yanuar-7a1982173",
  github: "https://github.com/nizmitz",
  profile: "Senior Cloud Infrastructure Engineer with over 6 years of expertise architecting, automating, and securing high-availability hybrid and multi-cloud environments (AWS, GCP, Alibaba Cloud, VMware, OpenShift). Distinguished by top-tier industry certifications (AWS SAPro, GCP PCA, CKA), I specialize in orchestrating robust containerized architectures with Kubernetes, driving infrastructure-as-code (IaC) via Terraform and Ansible, and implementing advanced CI/CD pipelines (GitLab CI, Jenkins). Proven track record of leveraging Vault and modern observability stacks to deliver resilient, compliant, and scalable enterprise solutions."
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

export const experiences = [
  {
    title: "IT Data Center & Disaster Recovery",
    company: "PT Bank Jago Tbk",
    location: "Jakarta Metropolitan Area",
    date: "March 2025 — Present",
    responsibilities: [
      "Improve Automation for backup and restore on CloudSQL for Compliance",
      "Set up BMC ControlM for automating toils in AS 400 system",
      "Administer and maintain both On-premises and Cloud based technologies",
      "Automating Swingover and Swingback process using BMC ControlM",
      "Spearheading Project for VMware to GCP migration using M2VM and MCDC"
    ]
  },
  {
    title: "Technology Specialist",
    company: "Amdocs",
    location: "Jakarta, Indonesia",
    date: "June 2024 — February 2025",
    responsibilities: [
      "Maintain uptime of services in a multi and hybrid cloud setup of a one of the biggest privately owned Telco company in Indonesia",
      "Leading and mentoring a team of cloud engineer",
      "Creating and implementing policy for maintaining governance in cloud",
      "Spearheading project handover for a complex multi cloud setup",
      "Maintaining cloud infrastructure with cloud native tooling"
    ]
  },
  {
    title: "Site Reliability Engineer",
    company: "DKATALIS",
    location: "Jakarta, Jakarta, Indonesia",
    date: "June 2022 — June 2024",
    responsibilities: [
      "Improve and Maintain current monitoring stack (ELK, Dynatrace, Cloud Monitor, Custom Bots)",
      "Create alerting bots using Python to increase visibility in Postgres Database and Zombie Pods in Kubernetes",
      "Maintain current cloud infrastructure on Alibaba Cloud using Terraform and GitLab-CI",
      "Manage and Administer multiple Kubernetes Cluster using Helm and Terraform",
      "Maintain and handle Debian/Ubuntu and CentOS operating system",
      "Perform Patching and Security Scanning using ansible with custom script and open source script for UBUNTU-CIS-20 standard and compliance",
      "Implemented Teleport Zero Trust as alternative to PAM system",
      "Research on GitLab self managed instance, GitLab Container(grype), Secret, SAST/SAST IaC and Code Quality implementation.",
      "Perform Incident Response on production security and system infrastructure",
      "Perform cloud efficiency to reduce OPEX on cloud",
      "Maintain Sonarqube and Nexus configuration",
      "Maintain HashiCorp Vault configuration and improve secret injector to pods",
      "Maintain configuration of Internal DNS and External DNS",
      "Maintain Infrastructure on GCP using Terraform",
      "Create and maintain terraform with blueprint and self service model",
      "Administer and Maintain Istio Service Mesh in GKE"
    ]
  },
  {
    title: "System Administrator",
    company: "Amdocs",
    location: "Indonesia",
    date: "March 2021 — June 2022",
    responsibilities: [
      "Implementing automation with Ansible Tower and Jenkins to reduce repetitive toil such as (FS Extension, Backup User, User Checking, User auditing, DR drill)",
      "Maintain availability and perform troubleshooting for multiple regional sites of VMware product such as ESXi, vSAN, vCenter, SRM and vROps",
      "Maintain uptime and troubleshoot any cluster/platform level issue that happen in Red Hat Openshift cluster",
      "Maintain, Tune and Administer RHEL 7/8 Linux to ensure performance and up-time of 99.9% of a high performance system of two of the biggest telco company in Indonesia",
      "Perform some security vulnerabilities scanning and perform remediation to affected system using ansible tower and Jenkins with custom playbook",
      "Standby for weekly on-call rotation",
      "Providing L2/L3 support to two of the biggest telecommunication company in Indonesia",
      "Researching implementation of Terraform on GCP as per project basis",
      "Scripting using shell and ansible to reduce toils",
      "Maintain configuration and improve backup strategy of Bind DNS server"
    ]
  },
  {
    title: "System Engineer",
    company: "PT. Astra Graphia Information Technology (AGIT)",
    location: "Greater Jakarta Area, Indonesia",
    date: "October 2019 — March 2021",
    responsibilities: [
      "Implementing various storage and server solution which may vary among all brands depending on the customer needs",
      "Migration of Vmware 6.7 to 7.0 in production environment including migration of local datastore to SAN datastore",
      "Configuration of SAN over FC and ISCSI, with Brocade, Cisco MDS, and Dell switches",
      "Installation of Vmware 7.0 (Vcenter + Vsphere) including Cluster configuration, Huawei Dorado v6 integration, Integrating NVMEoF end to end connection, Create powershell scripts to automate snapshots and backup of VM.",
      "installation and Configuration of Hypervisor and HCI such as, HyperV, Nutanix, Sangfor, VMware",
      "Assist Network team with core routing and email delivery."
    ]
  },
  {
    title: "Technical Support",
    company: "Universitas Gunadarma",
    location: "Indonesia",
    date: "March 2018 — October 2019",
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
    responsibilities: [
      "Localization of English contents to Indonesian language for World Of Tanks SEA",
      "Translation contents are under NDA restriction"
    ]
  }
];

export const certifications = [
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
  { name: "Alibaba Cloud Certified Associate Big Data", issuer: "Alibaba Cloud", date: "May 2024 — May 2026" },
  { name: "Alibaba Cloud Certified Professional Cloud Computing", issuer: "Alibaba Cloud", date: "Mar 2024 — Mar 2026" },
  { name: "Alibaba Cloud Certified Associate Cloud Computing", issuer: "Alibaba Cloud", date: "Feb 2024 — Feb 2026" },
  { name: "Associate Cloud Engineer", issuer: "Google", date: "May 2021 — Apr 2024" },
  { name: "Citrix Certified Associate - Virtualization (CCE - V)", issuer: "Citrix", date: "Aug 2020 — Jan 2023" },
  { name: "HPE ASE - Storage Solutions Architect V3", issuer: "Hewlett Packard Enterprise", date: "Apr 2020 — Apr 2023" },
  { name: "HPE Product Certified - OneView [2020]", issuer: "Hewlett Packard Enterprise", date: "Apr 2020 — Apr 2023" },
  { name: "HPE ATP - Hybrid IT Solutions V2", issuer: "Hewlett Packard Enterprise", date: "Apr 2020 — Apr 2023" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "Feb 2020 — No Expiration" },
  { name: "MTA: Database Fundamentals - Certified 2019", issuer: "Microsoft", date: "Oct 2019 — No Expiration" }
];

export const education = [
  {
    degree: "Bachelor's degree in Information Technology",
    school: "Universitas Gunadarma",
    date: "August 2015 — September 2019"
  }
];
