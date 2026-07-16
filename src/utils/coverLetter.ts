import { personalInfo } from '../data';

export interface CoverLetterInput {
  company: string;
  role: string;
  hiringManager?: string;
  notes?: string;
}

export interface LetterContent {
  senderName: string;
  senderTitle: string;
  senderContact: string;
  date: string;
  recipient: string;
  greeting: string;
  paragraphs: string[];
  closing: string;
  signature: string;
}

function todayLong(): string {
  return new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Build the cover-letter content from form input + personalInfo. Renderer-agnostic
 * (returns plain strings) so the PDF and DOCX generators share one source of truth.
 */
export function buildLetter(input: CoverLetterInput): LetterContent {
  const company = input.company.trim() || 'your organization';
  const role = input.role.trim() || personalInfo.title;
  const greeting = input.hiringManager?.trim()
    ? `Dear ${input.hiringManager.trim()},`
    : 'Dear Hiring Manager,';

  const paragraphs: string[] = [
    `I am writing to express my strong interest in the ${role} position at ${company}. As a ${personalInfo.title} with over seven years of experience automating and securing high-availability hybrid and multi-cloud environments, I believe I can make an immediate and lasting contribution to your team.`,
    `Across the Telco, Banking/FSI, and Consulting domains, I have delivered infrastructure that meets demanding 99.9% uptime requirements — spanning AWS, GCP, Alibaba Cloud, VMware, and OpenShift. I have built and led an engineering team from the ground up, driven large-scale platform migrations, and championed automation, observability, and Zero-Trust security practices that reduce toil and operational risk.`,
  ];

  if (input.notes?.trim()) {
    paragraphs.push(input.notes.trim());
  }

  paragraphs.push(
    `I would welcome the opportunity to discuss how my background in cloud infrastructure and reliability engineering aligns with the goals of ${company}. Thank you for your time and consideration.`,
  );

  return {
    senderName: personalInfo.name,
    senderTitle: personalInfo.title,
    senderContact: `${personalInfo.location} | ${personalInfo.email} | ${personalInfo.phone}`,
    date: todayLong(),
    recipient: input.hiringManager?.trim() ? `${input.hiringManager.trim()}\n${company}` : company,
    greeting,
    paragraphs,
    closing: 'Sincerely,',
    signature: personalInfo.name,
  };
}

/** Safe filename slug from the company name. */
export function coverLetterFileName(input: CoverLetterInput, ext: 'pdf' | 'docx'): string {
  const slug = (input.company.trim() || 'Application')
    .replace(/[^a-z0-9]+/gi, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 40);
  return `Fattah_Emir_Yanuar_Cover_Letter_${slug}.${ext}`;
}
