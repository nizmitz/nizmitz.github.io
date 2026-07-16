import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { downloadBlob } from '../utils/download';

interface DownloadButtonProps {
  label: string;
  fileName: string;
  /** Lazily generates the file. The heavy lib is dynamic-imported inside here. */
  generate: () => Promise<Blob>;
  className?: string;
  disabled?: boolean;
}

/**
 * Generate-on-click download button with loading state.
 * Shared by the PDF and Word resume buttons so the loading/error/UI logic lives once.
 */
export function DownloadButton({ label, fileName, generate, className, disabled }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading || disabled) return;
    setLoading(true);
    try {
      const blob = await generate();
      downloadBlob(blob, fileName);
    } catch (err) {
      console.error(`Failed to generate ${fileName}`, err);
      alert('Sorry, the download could not be generated. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading || disabled}
      className={className}
    >
      <Download size={16} />
      <span>{loading ? 'Generating…' : label}</span>
    </button>
  );
}
