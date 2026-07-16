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

// Matches the PDF accent colour (ResumePDF.tsx #0056b3).
const ACCENT = '0056B3';
const GRAY = '666666';
const RIGHT_TAB = 9638; // ~A4 content width in twips, for right-aligned dates

/** Section heading: accent, bold, with a bottom border — mirrors PDF sectionTitle. */
function sectionTitle(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 240, after: 120 },
    border: {
      bottom: { color: ACCENT, style: BorderStyle.SINGLE, size: 6, space: 1 },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        color: ACCENT,
        size: 24, // half-points → 12pt
      }),
    ],
  });
}

/** A line with left text and right-aligned text on the same row (title/date). */
function twoColumnLine(
  left: TextRun[],
  right: string,
): Paragraph {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    spacing: { after: 20 },
    children: [
      ...left,
      new TextRun({ text: `\t${right}`, bold: true }),
    ],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 20 },
    children: [new TextRun({ text, size: 20 })],
  });
}

/**
 * Build the resume as a .docx Blob from the shared data in `../data`.
 * Kept framework-free so it lazy-loads as its own chunk (no React cost).
 */
export async function buildResumeDocx(): Promise<Blob> {
  const children: Paragraph[] = [];

  // Header
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        new TextRun({ text: personalInfo.name, bold: true, color: ACCENT, size: 48 }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        new TextRun({ text: personalInfo.title.toUpperCase(), bold: true, size: 28 }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: `${personalInfo.location} | ${personalInfo.email} | ${personalInfo.phone}`,
          size: 20,
        }),
      ],
    }),
  );

  // Profile
  children.push(
    sectionTitle('Profile'),
    new Paragraph({
      spacing: { after: 120 },
      children: [new TextRun({ text: personalInfo.profile, size: 20 })],
    }),
  );

  // Technical Skills — single wrapping line keeps the generator simple to maintain.
  children.push(
    sectionTitle('Technical Skills'),
    new Paragraph({
      spacing: { after: 120 },
      children: [new TextRun({ text: skills.map((s) => s.name).join('  •  '), size: 20 })],
    }),
  );

  // Professional Experience
  children.push(sectionTitle('Professional Experience'));
  experiences.forEach((exp) => {
    children.push(
      twoColumnLine(
        [new TextRun({ text: `${exp.title}, ${exp.company}`, bold: true, size: 20 })],
        exp.date,
      ),
      new Paragraph({
        spacing: { after: 20 },
        children: [new TextRun({ text: exp.location, italics: true, size: 20 })],
      }),
    );
    exp.sublines?.forEach((line) => {
      children.push(
        new Paragraph({
          spacing: { after: 20 },
          children: [new TextRun({ text: line, italics: true, color: GRAY, size: 18 })],
        }),
      );
    });
    exp.responsibilities.forEach((resp) => children.push(bullet(resp)));
    children.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
  });

  // Certifications
  children.push(sectionTitle('Certifications'));
  certifications.forEach((cert) => {
    children.push(
      twoColumnLine(
        [new TextRun({ text: `${cert.name}, ${cert.issuer}`, size: 20 })],
        cert.date,
      ),
    );
  });

  // Education
  children.push(sectionTitle('Education'));
  education.forEach((edu) => {
    children.push(
      twoColumnLine(
        [new TextRun({ text: edu.school, bold: true, size: 20 })],
        edu.date,
      ),
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: edu.degree, italics: true, size: 20 }),
          ...(edu.gpa
            ? [new TextRun({ text: `   GPA: ${edu.gpa}`, bold: true, color: ACCENT, size: 20 })]
            : []),
        ],
      }),
    );
    if (edu.activities) {
      children.push(
        new Paragraph({
          spacing: { after: 20 },
          children: [new TextRun({ text: `Activities: ${edu.activities}`, italics: true, color: GRAY, size: 18 })],
        }),
      );
    }
    if (edu.finalProject) {
      children.push(
        new Paragraph({
          spacing: { after: 20 },
          children: [new TextRun({ text: `Final Project: ${edu.finalProject}`, italics: true, color: GRAY, size: 18 })],
        }),
      );
    }
  });

  // Languages
  children.push(sectionTitle('Languages'));
  languages.forEach((lang) => {
    children.push(
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: `${lang.name}: `, bold: true, size: 20 }),
          new TextRun({ text: lang.proficiency, italics: true, color: ACCENT, size: 20 }),
          ...(lang.detail ? [new TextRun({ text: `  (${lang.detail})`, color: GRAY, size: 18 })] : []),
        ],
      }),
    );
  });

  const doc = new Document({
    styles: { default: { document: { run: { font: 'Helvetica', size: 20, color: '333333' } } } },
    sections: [{ children }],
  });

  return Packer.toBlob(doc);
}
