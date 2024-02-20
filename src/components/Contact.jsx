import { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
   .formulario {
     display: flex;
  //   flex-direction: row;
   } 

  .inputs {
    width: 35vw; 
  }

.box{ 
    width: 37%;
    margin: 2% 0 3% 5%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 15px;
    background-color: #434D68;
    font-family: 'Roboto',sans-serif;
}
`

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
  margin-top: 4%;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media only screen and (min-width: 320px) and (max-width: 1000px){
  .formulario {
    display: block;   
  }

  .box{ 
    width: 100%;
}

}
`
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
      // Comentar esta línea si estás trabajando en frontend y no puedes acceder a fs
      // await writeFormDataToFile(formData); 
      setFormData({ nombre: '', email: '', mensaje: '', acceptCookies: false });
    } catch (error) {
      console.error('Error handling form submit:', error);
    }
  };

  const Messages = () => {
    const [data, setData] = useState(null);
           //donde se guardan, lo que hace que cambie = lo que inicia
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Llamada a la función para obtener todos los mensajes
      const fetchMessages = async () => {
        try {
          const response = await fetch("http://localhost:3000/contact");
          console.log(response);
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }

          const result = await response.json();
          console.log(result);
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error('Error:', error);
          setLoading(false);
        }
      };

      fetchMessages();
    }, []);

    // Renderizar mensajes aquí, puedes usar el estado `data` para renderizar los mensajes recibidos
    return (
      <div>
        {loading ? (
          <p>Cargando mensajes...</p>
        ) : (
          <div>
            {data?.map((message, index) => (
              <div key={index}>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <FormContainer className='contenedor'>
      <div className='formulario'>
        <div className='box'>
          <Heading>CONTÁCTANOS</Heading>
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
        </div>
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
      {/* Aquí incluye el componente Messages */}
      <Messages />
    </FormContainer>
  );
};

export default ContactForm;