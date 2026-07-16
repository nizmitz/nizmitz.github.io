import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  TabStopType,
  AlignmentType,
  BorderStyle,
} from 'docx';
import {
  personalInfo,
  skills,
  experiences,
  certifications,
  education,
  languages,
} from '../data';
import { DEFAULT_RESUME_OPTIONS, ResumeOptions } from './resumeOptions';

// Matches the PDF accent colour (ResumePDF.tsx #0056b3).
const ACCENT = '0056B3';
const GRAY = '666666';
const RIGHT_TAB = 9638; // ~A4 content width in twips, for right-aligned dates

const RIREKISHO_MOTIVATION =
  'Eager to bring my multi-cloud infrastructure and reliability engineering experience to a forward-thinking organization in Japan, and to grow alongside a team that values automation, security, and operational excellence.';

/** Section heading: accent, bold, with a bottom border — mirrors PDF sectionTitle. */
function sectionTitle(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 240, after: 120 },
    border: {
      bottom: { color: ACCENT, style: BorderStyle.SINGLE, size: 6, space: 1 },
    },
    children: [
      new TextRun({ text: text.toUpperCase(), bold: true, color: ACCENT, size: 24 }),
    ],
  });
}

/** A line with left text and right-aligned text on the same row (title/date). */
function twoColumnLine(left: TextRun[], right: string): Paragraph {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    spacing: { after: 20 },
    children: [...left, new TextRun({ text: `\t${right}`, bold: true })],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 20 },
    children: [new TextRun({ text, size: 20 })],
  });
}

function para(text: string, opts: { size?: number; italics?: boolean; color?: string; after?: number } = {}): Paragraph {
  return new Paragraph({
    spacing: { after: opts.after ?? 120 },
    children: [new TextRun({ text, size: opts.size ?? 20, italics: opts.italics, color: opts.color })],
  });
}

// ---- Section builders (return Paragraph[]) -----------------------------------

function headerBlock(options: ResumeOptions): Paragraph[] {
  const block: Paragraph[] = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [new TextRun({ text: personalInfo.name, bold: true, color: ACCENT, size: 48 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [new TextRun({ text: personalInfo.title.toUpperCase(), bold: true, size: 28 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: options.format === 'international' ? 120 : 20 },
      children: [new TextRun({
        text: `${personalInfo.location} | ${personalInfo.email} | ${personalInfo.phone}`,
        size: 20,
      })],
    }),
  ];
  if (options.format !== 'international') {
    block.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [new TextRun({
        text: `Nationality: ${personalInfo.nationality}  |  Gender: ${personalInfo.gender}`,
        size: 18,
        color: GRAY,
      })],
    }));
  }
  return block;
}

function profileSection(title: string): Paragraph[] {
  return [sectionTitle(title), para(personalInfo.profile)];
}

function skillsSection(): Paragraph[] {
  return [sectionTitle('Technical Skills'), para(skills.map((s) => s.name).join('  •  '))];
}

function experienceSection(title: string, showSublines: boolean, chronological = false): Paragraph[] {
  const out: Paragraph[] = [sectionTitle(title)];
  const list = chronological ? [...experiences].reverse() : experiences;
  list.forEach((exp) => {
    out.push(
      twoColumnLine([new TextRun({ text: `${exp.title}, ${exp.company}`, bold: true, size: 20 })], exp.date),
      para(exp.location, { italics: true, after: 20 }),
    );
    if (showSublines) {
      exp.sublines?.forEach((line) => out.push(para(line, { italics: true, color: GRAY, size: 18, after: 20 })));
    }
    exp.responsibilities.forEach((resp) => out.push(bullet(resp)));
    out.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  });
  return out;
}

function certSection(title: string): Paragraph[] {
  const out: Paragraph[] = [sectionTitle(title)];
  certifications.forEach((cert) => {
    out.push(twoColumnLine([new TextRun({ text: `${cert.name}, ${cert.issuer}`, size: 20 })], cert.date));
  });
  return out;
}

function educationSection(chronological = false): Paragraph[] {
  const out: Paragraph[] = [sectionTitle('Education')];
  const list = chronological ? [...education].reverse() : education;
  list.forEach((edu) => {
    out.push(
      twoColumnLine([new TextRun({ text: edu.school, bold: true, size: 20 })], edu.date),
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: edu.degree, italics: true, size: 20 }),
          ...(edu.gpa ? [new TextRun({ text: `   GPA: ${edu.gpa}`, bold: true, color: ACCENT, size: 20 })] : []),
        ],
      }),
    );
    if (edu.activities) out.push(para(`Activities: ${edu.activities}`, { italics: true, color: GRAY, size: 18, after: 20 }));
    if (edu.finalProject) out.push(para(`Final Project: ${edu.finalProject}`, { italics: true, color: GRAY, size: 18, after: 20 }));
  });
  return out;
}

function languagesSection(withCefr = false): Paragraph[] {
  const out: Paragraph[] = [sectionTitle('Languages')];
  languages.forEach((lang) => {
    out.push(new Paragraph({
      spacing: { after: 20 },
      children: [
        new TextRun({ text: `${lang.name}: `, bold: true, size: 20 }),
        new TextRun({
          text: withCefr ? `${lang.proficiency} (CEFR ${lang.cefr})` : lang.proficiency,
          italics: true,
          color: ACCENT,
          size: 20,
        }),
        ...(!withCefr && lang.detail ? [new TextRun({ text: `  (${lang.detail})`, color: GRAY, size: 18 })] : []),
      ],
    }));
  });
  return out;
}

// ---- Per-format composition ---------------------------------------------------

function bodyFor(options: ResumeOptions): Paragraph[] {
  switch (options.format) {
    case 'europass':
      return [
        ...profileSection('About Me'),
        ...experienceSection('Work Experience', false),
        ...educationSection(),
        ...certSection('Certifications'),
        ...skillsSection(),
        ...languagesSection(true),
      ];
    case 'rirekisho':
      return [
        ...educationSection(true),
        ...experienceSection('Work History', false, true),
        ...certSection('Qualifications'),
        ...profileSection('Self-PR'),
        sectionTitle('Motivation'),
        para(RIREKISHO_MOTIVATION),
      ];
    case 'international':
    default:
      return [
        ...profileSection('Profile'),
        ...skillsSection(),
        ...experienceSection('Professional Experience', options.sublines),
        ...certSection('Certifications'),
        ...educationSection(),
        ...languagesSection(),
      ];
  }
}

/**
 * Build the resume as a .docx Blob for the given format/options. Framework-free so
 * it lazy-loads as its own chunk.
 */
export async function buildResumeDocx(options: ResumeOptions = DEFAULT_RESUME_OPTIONS): Promise<Blob> {
  const children = [...headerBlock(options), ...bodyFor(options)];
  const doc = new Document({
    styles: { default: { document: { run: { font: 'Helvetica', size: 20, color: '333333' } } } },
    sections: [{ children }],
  });
  return Packer.toBlob(doc);
}
