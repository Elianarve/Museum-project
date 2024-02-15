import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneAnimal } from '../services/animalServices';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: solid 1px black;
  padding: 2%;
  margin-top: 3%;
  border-radius: 40px;


a{
  text-decoration: none;
}
;
`
const FormGroup = styled.div`
  margin-bottom: 20px;
;
`
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
;
`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5%;
;
`


const FormEdit = () => {
  const [formData, setFormData] = useState({
    name:'',
    scientificName: '',
    photographer: '',
    image: '',
    description: '',
    sound: ''
  });

  //  const [animalData, setAnimalData] = useState(null);

  const { id } = useParams();

 useEffect(() => { 
    const fetchData = async () => {
        const response = await getOneAnimal(id);  
         setFormData(response);
        // setFormData(response || {});
        // setAnimalData(response)
       }
       fetchData()
    },[id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/animals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error al modificar animal');
      }

      alert('Animal modificado exitosamente');

      setFormData({
        name: '',
        scientificName: '',
        photographer: '',
        image: '',
        description: '',
        sound: ''
      });
    } catch (error) {
      console.error('Error al modificar el animal:', error);
      alert('Error al modificar animal');
    }
  };

  

return (
    <FormContainer>
      <h2>Editar Animal</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nombre: </Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="scientificName">Nombre Científico: </Label>
          <Input type="text" id="scientificName" name="scientificName" value={formData.scientificName} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="photographer">Autora: </Label>
          <Input type="text" id="photographer" name="photographer" value={formData.photographer} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image">URL de la Imagen:</Label>
          <Input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Descripción: </Label>
          <Input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="sound">Sonido:</Label>
          <Input type="text" id="sound" name="sound" value={formData.sound} onChange={handleChange} required />
        </FormGroup>
        <Link to ={'/gallery'}><Button type="submit">Actualizar</Button></Link>
      </form>
    </FormContainer>
  );
};

export default FormEdit;
