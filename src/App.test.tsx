import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    // If you have specific text to wait for, modify this
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });
});
