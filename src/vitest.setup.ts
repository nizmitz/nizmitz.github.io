import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('@react-pdf/renderer', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  PDFDownloadLink: ({ children }: { children: any }) => {
    return typeof children === 'function' ? children({ loading: false }) : children;
  },
  Document: () => null,
  Page: () => null,
  Text: () => null,
  View: () => null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  StyleSheet: { create: (s: any) => s },
  Font: { register: () => {} },
}));

// Mock IntersectionObserver for framer-motion
class IntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
