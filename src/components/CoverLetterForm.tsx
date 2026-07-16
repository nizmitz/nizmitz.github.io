import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { DownloadButton } from './DownloadButton';
import type { CoverLetterInput } from '../utils/coverLetter';

const genPdf = (input: CoverLetterInput) => async (): Promise<Blob> => {
  const { buildCoverLetterPdf } = await import('../utils/coverLetterPdf');
  return buildCoverLetterPdf(input);
};
const genDocx = (input: CoverLetterInput) => async (): Promise<Blob> => {
  const { buildCoverLetterDocx } = await import('../utils/coverLetterDocx');
  return buildCoverLetterDocx(input);
};

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-line bg-paper text-ink text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors';

export function CoverLetterForm({ onClose }: { onClose: () => void }) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [hiringManager, setHiringManager] = useState('');
  const [notes, setNotes] = useState('');

  const input: CoverLetterInput = { company, role, hiringManager, notes };
  const valid = company.trim().length > 0 && role.trim().length > 0;

  const fileSlug = (company.trim() || 'Application').replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '').slice(0, 40);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-paper-card rounded-2xl shadow-xl p-6 text-left border border-line"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl font-semibold text-ink">Generate cover letter</h3>
          <button onClick={onClose} className="p-1 text-muted hover:text-ink" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="cl-company" className="block text-sm font-medium text-ink mb-1">
              Company <span className="text-accent">*</span>
            </label>
            <input id="cl-company" className={inputCls} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Cloud GmbH" />
          </div>
          <div>
            <label htmlFor="cl-role" className="block text-sm font-medium text-ink mb-1">
              Role <span className="text-accent">*</span>
            </label>
            <input id="cl-role" className={inputCls} value={role} onChange={(e) => setRole(e.target.value)} placeholder="Senior Cloud Infrastructure Engineer" />
          </div>
          <div>
            <label htmlFor="cl-hm" className="block text-sm font-medium text-ink mb-1">Hiring manager (optional)</label>
            <input id="cl-hm" className={inputCls} value={hiringManager} onChange={(e) => setHiringManager(e.target.value)} placeholder="Ms. Jane Doe" />
          </div>
          <div>
            <label htmlFor="cl-notes" className="block text-sm font-medium text-ink mb-1">Extra paragraph (optional)</label>
            <textarea id="cl-notes" rows={3} className={`${inputCls} resize-none`} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="A tailored sentence or two about why this role…" />
          </div>
        </div>

        {!valid && (
          <p className="text-xs text-muted mt-3">Enter company and role to enable download.</p>
        )}

        <div className="flex gap-3 mt-5">
          <DownloadButton
            label="PDF"
            fileName={`Fattah_Emir_Yanuar_Cover_Letter_${fileSlug}.pdf`}
            generate={genPdf(input)}
            disabled={!valid}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-ink hover:opacity-90 disabled:opacity-50 text-paper rounded-lg transition-colors"
          />
          <DownloadButton
            label="Word"
            fileName={`Fattah_Emir_Yanuar_Cover_Letter_${fileSlug}.docx`}
            generate={genDocx(input)}
            disabled={!valid}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent-strong disabled:opacity-50 text-paper rounded-lg transition-colors"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
