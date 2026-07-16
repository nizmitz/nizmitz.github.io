import { pdf } from '@react-pdf/renderer';
import { ResumePDF } from '../components/ResumePDF';
import { DEFAULT_RESUME_OPTIONS, ResumeOptions } from './resumeOptions';

/**
 * Build the resume as a PDF Blob for the given format/options. Statically imports
 * @react-pdf here so the whole PDF library sits behind a single dynamic import of
 * this module (keeps it out of the initial bundle — mirrors utils/resumeDocx.ts).
 */
export async function buildResumePdf(options: ResumeOptions = DEFAULT_RESUME_OPTIONS): Promise<Blob> {
  return pdf(<ResumePDF options={options} />).toBlob();
}
