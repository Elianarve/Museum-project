import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneAnimal } from '../services/animalServices'; 
import { useForm } from 'react-hook-form';
import { updateAnimal } from '../services/animalServices'; 
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: solid 1px black;
  padding: 2%;
  margin-top: 3%;
  border-radius: 40px;z


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
  `


const UpdateAnimal = () => {
    const navigate = useNavigate();
    //const [animalData, setAnimalData] = useState(null);
    const { register, formState: { errors },  handleSubmit, setValue  } = useForm(); 
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () =>{
            const response = await getOneAnimal(id); 
            // setAnimalData(animalData);

            setValue('name', response.name);
            setValue('scientificName', response.scientificName); 
            setValue('photographer', response.photographer);
            setValue('image', response.image);
            setValue('description', response.description);
            setValue('sound', response.sound);          
        }
        fetchData()
    }, [id, setValue]);

    const onSubmit = async (data) => {
  try {
    await updateAnimal(id, data);
    alert('Datos actualizados correctamente')
  } catch (error) {
    console.error('error', error);
  }
};
navigate('/gallery');

  return (
          <FormContainer>
        <h2>Editar Animal</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Nombre: </Label>
            <Input type="text" id="name" name="name" {...register ('name')} />
            { errors.name?.type === 'required' && <p>Este campo es obligatorio</p> }
          </FormGroup>
          <FormGroup>
            <Label htmlFor="scientificName">Nombre Científico: </Label>
            <Input type="text" id="scientificName" name="scientificName" {...register ('scientificName')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="photographer">Autora: </Label>
            <Input type="text" id="photographer" name="photographer" {...register ('photographer')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">URL de la Imagen:</Label>
            <Input type="text" id="image" name="image" {...register ('image')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descripción: </Label>
            <Input type="text" id="description" name="description" {...register ('description')} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="sound">Sonido:</Label>
            <Input type="text" id="sound" name="sound" {...register ('sound')} />
          </FormGroup>
          <Button type="submit">Actualizar</Button>
        </form> 
      </FormContainer>
    
  )
}

export default UpdateAnimal;