import React, { useState } from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { DownloadButton } from './DownloadButton';
import { CoverLetterForm } from './CoverLetterForm';
import {
  DEFAULT_RESUME_OPTIONS,
  FORMAT_LABELS,
  ResumeFormat,
  ResumeOptions,
  resumeFileName,
  sublinesApply,
} from '../utils/resumeOptions';

const genPdf = (options: ResumeOptions) => async (): Promise<Blob> => {
  const { buildResumePdf } = await import('../utils/resumePdf');
  return buildResumePdf(options);
};
const genDocx = (options: ResumeOptions) => async (): Promise<Blob> => {
  const { buildResumeDocx } = await import('../utils/resumeDocx');
  return buildResumeDocx(options);
};

export function DocumentsMenu() {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState<ResumeFormat>(DEFAULT_RESUME_OPTIONS.format);
  const [sublines, setSublines] = useState(DEFAULT_RESUME_OPTIONS.sublines);
  const [coverOpen, setCoverOpen] = useState(false);

  const sublinesAllowed = sublinesApply(format);
  const options: ResumeOptions = { format, sublines: sublinesAllowed && sublines };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors"
      >
        <FileText size={16} />
        <span>Documents</span>
        <ChevronDown size={14} className={open ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>

      {open && (
        <>
          {/* click-away layer */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50 text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Résumé format</p>
            <div className="space-y-1 mb-4">
              {(Object.keys(FORMAT_LABELS) as ResumeFormat[]).map((f) => (
                <label key={f} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="resume-format"
                    checked={format === f}
                    onChange={() => setFormat(f)}
                    className="accent-indigo-600"
                  />
                  {FORMAT_LABELS[f]}
                </label>
              ))}
            </div>

            <label
              className={`flex items-center gap-2 text-sm mb-4 ${sublinesAllowed ? 'text-slate-700 cursor-pointer' : 'text-slate-300 cursor-not-allowed'}`}
              title={sublinesAllowed ? '' : 'Company descriptions apply to the International format only'}
            >
              <input
                type="checkbox"
                checked={sublinesAllowed && sublines}
                disabled={!sublinesAllowed}
                onChange={(e) => setSublines(e.target.checked)}
                className="accent-indigo-600"
              />
              Include company descriptions
            </label>

            <div className="flex gap-2 mb-4">
              <DownloadButton
                label="PDF"
                fileName={resumeFileName(options, 'pdf')}
                generate={genPdf(options)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white text-sm rounded-lg transition-colors"
              />
              <DownloadButton
                label="Word"
                fileName={resumeFileName(options, 'docx')}
                generate={genDocx(options)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm rounded-lg transition-colors"
              />
            </div>

            <div className="border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => { setOpen(false); setCoverOpen(true); }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 text-slate-700 text-sm rounded-lg transition-colors"
              >
                <FileText size={14} />
                Cover letter…
              </button>
            </div>
          </div>
        </>
      )}

      {coverOpen && <CoverLetterForm onClose={() => setCoverOpen(false)} />}
    </div>
  );
}
