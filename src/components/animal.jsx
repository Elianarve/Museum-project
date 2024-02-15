import styled from 'styled-components';
import { useState, useEffect } from 'react';
import voz from '../assets/voz.png';
import { deleteAnimal, getAnimal } from '../services/animalServices';
import { Link } from 'react-router-dom';

const AnimalContainer = styled.section`
.itemContent {
  display: flex;
  flex-wrap: wrap;
  gap: 2%; 
  padding: 3%;
  margin-left: 7%;
}

.article-animal {
  flex: 0 0 30%; 
  box-sizing: border-box; 
  margin-bottom: 2%;
}

.name{
  font-size: 2vw;
  margin: 0;
  text-align: center;
}

.s_name{
  margin: 0;
}


.description{
    text-align: justify;
    width: 85%;
}

.s_name-c{
  font-weight: 400;
}

.strong{
  font-weight: 500;
}

.altavoz{
  margin-left: 15%;
  cursor: pointer;
}

.image{
  width: 20vw;
  height: 20vw;
  background-image: url(https://trello.com/1/cards/65c36b966268d407a415a538/attachments/65c3876ce396894f2b5986ac/previews/65c38770e396894f2b598832/download/pexels-inchs-11552022.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 8%;
}
.marco{
  display: flex;
  justify-content: center;
  width: 24vw;
  height: 26vw;
  background-color: #ffffff;
  border: 1px solid #ccc; 
  box-shadow: 0px 7px 10px black;
}

@media only screen and (min-width: 320px) and (max-width: 1000px){

  .itemContent {
    display: block;
  }
  
  .image{
    width: 35vw;
    height: 35vw;
  }
  .marco{
    width: 40vw;
    height: 45vw;
    margin-left: 20%;
  }

  .name{
    font-size: 24px;
  }

}

`

const Animal = () => {
  const [data, setData] = useState(null);// el useEstate es el estado inicial, setData para ver el obejeto (cambios q ocurren) y data donde se guarda el estado
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAnimal();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);  //cuando se monta, se ejecuta


  return (
    <AnimalContainer>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section className='itemContent'>
          {data?.map((animal) => 
          (<article className='article-animal' key={animal.id}>
          <h1 className='name'>Nombre: {animal.name}</h1><br />
          <div className='marco'><img src={animal.image} alt={animal.name} className='image'/></div><br />
          <h3 className='s_name'>Nombre Científico:<span className='s_name-c'>{animal.scientificName}</span></h3>
          <p className='author'><span className='strong'>Autora: </span>{animal.photographer}
          <img src={voz} alt="altavoz" className='altavoz' onClick={() => sound(animal.sound)} />
          </p>
          <p className='description'>{animal.description}</p>
          <Link to={'/gallery'} onClick={() => deleteAnimal(animal.id)}><button className="delete-btn">Eliminar</button></Link>
          </article> ))}
        </section>
      )}
   </AnimalContainer>  
  );
 };

export default Animal;