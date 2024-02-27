import {render, screen} from "@testing-library/react";
import Footer from "../components/Footer";
import { expect, test, describe, beforeEach } from 'vitest';

describe("Footer testing", ()=>{
    beforeEach(()=> {
        render(<Footer/>)
    })

test("Footer have an instagram logo", () => { 
    const logo = screen.getByAltText("instagram");
    expect(logo).toBeDefined();
})

test("Footer have a facebook logo", () => { 
    const logo = screen.getByAltText("facebook");
    expect(logo).toBeDefined();
})

test("Footer have a twitter logo", () => { 
    const logo = screen.getByAltText("twitter");
    expect(logo).toBeDefined();
})

test("Footer have a youtube logo", () => { 
    const logo = screen.getByAltText("youtube");
    expect(logo).toBeDefined();
})

test("Footer have all social logos", () => { 
    const instagramlogo = screen.getByAltText("instagram");
    expect(instagramlogo).toBeDefined();

    const facebooklogo = screen.getByAltText("facebook");
    expect(facebooklogo).toBeDefined();

    const twitterlogo = screen.getByAltText("twitter");
    expect(twitterlogo).toBeDefined();

    const youtubelogo = screen.getByAltText("youtube");
    expect(youtubelogo).toBeDefined();
})

})