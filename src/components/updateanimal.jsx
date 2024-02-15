import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: solid 1px black;
  padding: 2%;
  margin-top: 3%;
  border-radius: 40px;

  a {
    text-decoration: none;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5%;
`;

const PutAnimal = ( id ) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(true);
  const [animal, setAnimal] = useState(null); // Inicializa animal como null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/animals/${id}`);
        setAnimal(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching animal:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3000/animals/${id}`, data);
      alert('Animal actualizado correctamente');
    } catch (error) {
      console.error('Error updating animal:', error);
      alert('Error al actualizar animal');
    }
  };

  return (
    <FormContainer>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Nombre:</Label>
            <Input type="text" id="name" defaultValue={animal.name} {...register('name')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="scientificName">Nombre Científico:</Label>
            <Input type="text" id="scientificName" defaultValue={animal.scientificName} {...register('scientificName')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="photographer">Fotógrafo:</Label>
            <Input type="text" id="photographer" defaultValue={animal.photographer} {...register('photographer')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">URL de la Imagen:</Label>
            <Input type="text" id="image" defaultValue={animal.image} {...register('image')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descripción:</Label>
            <Input type="text" id="description" defaultValue={animal.description} {...register('description')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="sound">Sonido:</Label>
            <Input type="text" id="sound" defaultValue={animal.sound} {...register('sound')} />
          </FormGroup>
          <Button type="submit">Actualizar</Button>
        </form>
      )}
    </FormContainer>
  );
};

export default PutAnimal;
