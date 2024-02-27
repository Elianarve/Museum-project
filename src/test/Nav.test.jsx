import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';
import { expect, test, describe, beforeEach } from 'vitest';

describe('App testing', () =>{
    beforeEach(()=>{
        render(<Nav/ >);
    }); 
    

test('render Nav', () =>{
    render(<Nav />);
    const logoNav = screen.getByText(/REACT MUSEUM/i); 
    expect(logoNav).toBeDefined();
});




});