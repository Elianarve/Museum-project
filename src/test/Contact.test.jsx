import { render, screen,} from "@testing-library/react";
import Contact from "../components/Contact.jsx"; // Asegúrate de importar el componente correcto
import { expect, test } from "vitest";

test("render Contact", () => {
  // Renderiza el formulario de contacto
  render(<Contact />);
  
  // Verifica que los elementos del formulario estén presentes en la pantalla
  const headingElement = screen.getByText("CONTÁCTANOS");
  expect(headingElement).toBeDefined();

  const nameLabelElement = screen.getByLabelText("Nombre:");
  expect(nameLabelElement).toBeDefined();

  const emailLabelElement = screen.getByLabelText("Email:");
  expect(emailLabelElement).toBeDefined();

  const messageLabelElement = screen.getByLabelText("Mensaje:");
  expect(messageLabelElement).toBeDefined();

  const checkboxLabelElement = screen.getByText("Aceptar política de cookies");
  expect(checkboxLabelElement).toBeDefined();

  const sendButtonElement = screen.getByText("Enviar Mensaje");
  expect(sendButtonElement).toBeDefined();
});