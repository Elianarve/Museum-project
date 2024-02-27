import { render, screen } from "@testing-library/react"
import BodyAbout from "./BodyAbout"

describe("BodyAbout testing", ()=>{
    beforeEach(()=> {
        render(<BodyAbout/>)
    })

test("render ImgBodyAbout", () => { 
    const imgElement = screen.getByAltText("Building");
    expect(imgElement).toBeDefined();
})

test("render TextBodyAbout", () => {
    const textElement = screen.getByText("¡Bienvenido a React Museum!");
    expect(textElement).toBeDefined();
})

})

