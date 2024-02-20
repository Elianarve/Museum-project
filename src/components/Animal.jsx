import { useState } from 'react';
import voz from '../assets/voz.png';
import { deleteAnimal } from '../services/animalServices';
import { useNavigate } from 'react-router-dom'; 
import './stylesAnimal/Animal.css';

const Animal = (data) => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

const sound = (audioSrc) => {
  const audio = new Audio(audioSrc);
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  setIsPlaying(!isPlaying);
};


  return (
    <>
          {data.data.map((animal) => {
        return  (<article className='article-animal' key={animal.id}>
          <h1 className='name'>Nombre: {animal.name}</h1><br />
          <div className='marco'><img src={animal.image} alt={animal.name} className='image'/></div><br />
          {/* <h3 className='s_name'>Nombre Científico: <span className='s_name-c'>{animal.scientificName}</span></h3>
          <p className='author'><span className='strong'>Autora: </span>{animal.photographer}
          <img src={voz} alt="altavoz" className='altavoz' onClick={() => sound(animal.sound)} />
          </p>
          <p className='description'>{animal.description}</p> */}
          <div className='buttons'>
          <button className="delete-button" onClick={() => {deleteAnimal(`${animal.id}`); navigate(0)}}>Eliminar</button>
          <button className="edit-button" onClick={() => navigate(`/update/${animal.id}`)}>Actualizar</button>
          <button className="details-button" onClick={() => navigate(`/details/${animal.id}`)}>+ Detalles</button>
          </div>
          </article>)} )}
    </>
      )}


export default Animal;