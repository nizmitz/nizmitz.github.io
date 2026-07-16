import { pdf } from '@react-pdf/renderer';
import { ResumePDF } from '../components/ResumePDF';

/**
 * Build the resume as a PDF Blob. Statically imports @react-pdf here so the whole
 * PDF library sits behind a single dynamic import of this module (keeps it out of
 * the initial bundle — mirrors utils/resumeDocx.ts).
 */
export async function buildResumePdf(): Promise<Blob> {
  return pdf(<ResumePDF />).toBlob();
}
