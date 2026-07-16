import { Document, Packer, Paragraph, TextRun, AlignmentType } from 'docx';
import { buildLetter, CoverLetterInput } from './coverLetter';

const ACCENT = '0056B3';
const GRAY = '555555';

export async function buildCoverLetterDocx(input: CoverLetterInput): Promise<Blob> {
  const c = buildLetter(input);
  const children: Paragraph[] = [
    new Paragraph({ children: [new TextRun({ text: c.senderName, bold: true, color: ACCENT, size: 32 })] }),
    new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: c.senderTitle, size: 20, color: GRAY })] }),
    new Paragraph({ spacing: { after: 320 }, children: [new TextRun({ text: c.senderContact, size: 18, color: GRAY })] }),
    new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: c.date, size: 22 })] }),
    ...c.recipient.split('\n').map((line) =>
      new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: line, size: 22 })] }),
    ),
    new Paragraph({ spacing: { before: 120, after: 160 }, children: [new TextRun({ text: c.greeting, size: 22 })] }),
    ...c.paragraphs.map((p) =>
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 160 },
        children: [new TextRun({ text: p, size: 22 })],
      }),
    ),
    new Paragraph({ spacing: { before: 120, after: 320 }, children: [new TextRun({ text: c.closing, size: 22 })] }),
    new Paragraph({ children: [new TextRun({ text: c.signature, bold: true, size: 22 })] }),
  ];

  const doc = new Document({
    styles: { default: { document: { run: { font: 'Helvetica', size: 22, color: '222222' } } } },
    sections: [{ children }],
  });
  return Packer.toBlob(doc);
}
