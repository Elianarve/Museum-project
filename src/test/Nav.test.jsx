import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';
import test from '../vite.config';
import { expect } from 'vitest';

test('render Nav', () =>{
    render(<Nav />);
    const logoNav = screen.getByText(/REACT MUSEUM/i); 
    expect(logoNav).toBeDefined();
})