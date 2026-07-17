import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders the name in the hero heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Fattah Emir Yanuar');
  });

  it('renders a Documents button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /documents/i })).toBeInTheDocument();
  });

  it('renders an Experience heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });
});
