
import styled from 'styled-components';

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
;
`

// const FormEdit = () => {
//   const [formData, setFormData] = useState({
//     name:'',
//     scientificName: '',
//     photographer: '',
//     image: '',
//     description: '',
//     sound: ''
//   });

//   //  const [animalData, setAnimalData] = useState(null);

//   const { id } = useParams();

//  useEffect(() => { 
//     const fetchData = async () => {
//         const response = await getOneAnimal(id);  
//          setFormData(response);
//          console.log(response)
//         // setFormData(response || {});
//         // setAnimalData(response)
//        }
//        fetchData()
//     },[id])

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
// console.log(formData)
//       const response = await fetch(`http://localhost:3000/animals/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Error al modificar animal');
//       }

//       alert('Animal modificado exitosamente');

//   };

// return (
//     <FormContainer>
//       <h2>Editar Animal</h2>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="name">Nombre: </Label>
//           <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="scientificName">Nombre Científico: </Label>
//           <Input type="text" id="scientificName" name="scientificName" value={formData.scientificName} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="photographer">Autora: </Label>
//           <Input type="text" id="photographer" name="photographer" value={formData.photographer} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="image">URL de la Imagen:</Label>
//           <Input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="description">Descripción: </Label>
//           <Input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="sound">Sonido:</Label>
//           <Input type="text" id="sound" name="sound" value={formData.sound} onChange={handleChange} required />
//         </FormGroup>
//         <Link to ={'/gallery'}><Button type="submit">Actualizar</Button></Link>
//       </form>
//     </FormContainer>
//   );
// };

// export default FormEdit;



import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getOneAnimal } from '../services/animalServices';
import { updateAnimal } from '../services/animalServices';
import { useEffect } from 'react'; 
//import { Link } from 'react-router-dom';



const FormEdit = async () => {
const { register, formState: { errors }, handleSubmit } = useForm();
const [animalData, setAnimalData] = useState(null);
const { id } = useParams();


 useEffect(() => { 
  console.log('kkk')
    const fetchData = async () => {
      console.log('ttt')
        // const response = await getOneAnimal(id);  
        //  setAnimalData(response);
         
        // 'name', response.name
        // 'scientificName', response.scientificName
        // 'photographer', response.photographer
        // 'image', response.image
        // 'description', response.description
        // 'sound', response.sound
       }
      
       fetchData()
    },[id]);

    
const onSubmit = async (response) => {
  try {
    setAnimalData(true); 
    await updateAnimal(id, response);
  } catch (error) {
    console.error(error);
    throw error;
  }
};


return (

      <FormContainer>
        <h2>Editar Animal</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Nombre: </Label>
            <Input type="text" id="name" name="name" defaultValue={animalData.name} {...register('name', {required: true})} />
            { errors.name?.type === 'required' && <p>Este campo es obligatorio</p>  }
          </FormGroup>
          <FormGroup>
            <Label htmlFor="scientificName">Nombre Científico: </Label>
            <Input type="text" id="scientificName" name="scientificName" defaultValue={animalData.scientificName} {...register('scientificName', {required: true})}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="photographer">Autora: </Label>
            <Input type="text" id="photographer" name="photographer" defaultValue={animalData.photographer} {...register('photographer', {required: true})}  />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">URL de la Imagen:</Label>
            <Input type="text" id="image" name="image" defaultValue={animalData.image} {...register('image', {required: true})}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descripción: </Label>
            <Input type="text" id="description" name="description" defaultValue={animalData.description} {...register('description', {required: true})} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="sound">Sonido:</Label>
            <Input type="text" id="sound" name="sound" defaultValue={animalData.sound} {...register('sound')} required />
          </FormGroup>
          <Button><button type="submit">Actualizar</button></Button>
        </form>
      </FormContainer>
    );
}

export default FormEdit;