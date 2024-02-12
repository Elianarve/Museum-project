import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
.formulario {
  display: flex;
} 

.inputs {
  width: 35vw; 
}

@media only screen and (min-width: 320px) and (max-width: 1000px){
.formulario {
  display: flex;
  flex-direction: column;
  width: 60vw;
}

.contenedor {
  display: flex;
}

}

`


const Container = styled.div`
  width: 150%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #434D68; 
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #EEF0E5;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #EEF0E5;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #EEF0E5;
`;

const CheckboxLabel = styled.label`
  color: #EEF0E5;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  width: 130px;
  padding: 8px 0px;
  background-color: #434D68;
  color: #EEF0E5;
  border: 3px solid #EEF0E5;
  border-radius: 25px;
  cursor: pointer;
  
`;

const MapContainer = styled.div`
  margin-top: 10px;
  width: 40%;
  display: flex;
  justify-content: center;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    acceptCookies: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await writeFormDataToFile(formData); // Llama a la función para escribir los datos en el archivo form.json
      setFormData({ nombre: '', email: '', mensaje: '', acceptCookies: false });
    } catch (error) {
      console.error('Error handling form submit:', error);
    }
  };

  const writeFormDataToFile = async (formData) => {
    try {
      // Lee el contenido actual del archivo form.json, si existe
      let existingData = [];
      if (fs.existsSync('form.json')) {
        existingData = JSON.parse(fs.readFileSync('form.json', 'utf-8'));
      }

      // Agrega el nuevo formData al arreglo de datos existente
      existingData.push(formData);

      // Escribe los datos actualizados en el archivo form.json
      fs.writeFileSync('form.json', JSON.stringify(existingData, null, 2));
      console.log('Form data written to form.json');
    } catch (error) {
      console.error('Error writing form data to file:', error);
    }
  };

  useEffect(() => {
    // Llamada a la función para obtener todos los mensajes
    const fetchMessages = async () => {
      const messages = await getMessages();
      console.log('Messages:', messages);
    };
    fetchMessages();
  }, []);

  return (
    <>
    <FormContainer className='contenedor'>
      <div className='formulario'>
      <Container>
        <Heading>Contactanos</Heading>
        <form onSubmit={handleSubmit}>
          <InputGroup className='inputs'>
            <Label htmlFor="name">Nombre:</Label>
            <Input
              type="text"
              id="name"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup className='inputs'>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup className='inputs'>
            <Label htmlFor="message">Mensaje:</Label>
            <Input
              as="textarea"
              id="message"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup className='inputs'>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                id="acceptCookies"
                name="acceptCookies"
                checked={formData.acceptCookies}
                onChange={handleChange}
              />
              Aceptar política de cookies
            </CheckboxLabel>
          </InputGroup>
          <Button type="submit">Enviar Mensaje</Button>
        </form>
      </Container>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.27183079143!2d-3.711619825264592!3d40.42497935513926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228648c68edc1%3A0x6ffead3529527c69!2sC.%20de%20Amaniel%2C%202%2C%20Centro%2C%2028015%20Madrid!5e0!3m2!1ses!2ses!4v1707398554055!5m2!1ses!2ses"
          width="80%"
          height="400px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
      </div>
      </FormContainer>
    </>
  );
};

export default ContactForm;


