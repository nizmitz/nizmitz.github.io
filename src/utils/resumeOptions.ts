export type ResumeFormat = 'international' | 'europass' | 'rirekisho';

export interface ResumeOptions {
  format: ResumeFormat;
  /** Show the italic company-descriptor sublines (ignored by europass/rirekisho). */
  sublines: boolean;
}

export const DEFAULT_RESUME_OPTIONS: ResumeOptions = {
  format: 'international',
  sublines: true,
};

/** Human labels for the format picker. */
export const FORMAT_LABELS: Record<ResumeFormat, string> = {
  international: 'International',
  europass: 'Europass · EU',
  rirekisho: 'Japan · Rirekisho',
};

/** Company sublines only apply to the international format. */
export function sublinesApply(format: ResumeFormat): boolean {
  return format === 'international';
}

/** Deterministic download filename for a résumé variant (extension without dot). */
export function resumeFileName(opts: ResumeOptions, ext: 'pdf' | 'docx'): string {
  const parts = ['Fattah_Emir_Yanuar_Resume'];
  if (opts.format === 'europass') parts.push('Europass');
  if (opts.format === 'rirekisho') parts.push('JP');
  if (opts.format === 'international' && !opts.sublines) parts.push('NoBlurb');
  return `${parts.join('_')}.${ext}`;
}
