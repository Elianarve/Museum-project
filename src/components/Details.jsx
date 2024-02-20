import { useParams } from "react-router";
import voz from '../assets/voz.png';
import { useEffect, useState } from 'react';
import { getOneAnimal } from '../services/animalServices';
import './stylesAnimal/Details.css';


const Details = () => {
    const { id } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const [ data, setData ] = useState(null);

      
      useEffect(() => {
        const fetchData = async () =>{
            const response = await getOneAnimal(id); 
             setData(response); 
        }
        fetchData()
    }, [id]);


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
        <div>
          {data ? (
           <article className='animal' key={data.id}>
           <h1 className='n'>Nombre: {data.name}</h1><br />
           <div className='mrc'><img src={data.image} alt='img-animal' className='image'/></div><br />
           <h3 className='s_n'>Nombre Científico: <span className='s_name-c'>{data.scientificName}</span></h3>
           <div className='aut'><span className='strong'>Autora: </span>{data.photographer}
             <img src={voz} alt="altavoz" className='a-voz' onClick={() => sound(data.sound)} />
             </div>
           <p className='descrip'>{data.description}</p>
         </article>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      );
    };
    

export default Details;