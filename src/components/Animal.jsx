import styled from 'styled-components';
import { useState, useEffect } from 'react';

const AnimalContainer = styled.section`
section{
    display: flex;
}

.itemContent{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.itemContent{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name{
  font-size: 5vw;
  margin: 0;
}
.s_name{
  margin: 0;
}

.description{
    text-align: justify;
    padding: 2% 10%;
}

.image{
  display: flex;
  width: 50vw;
  height: 50vw;
  background-image: url(https://trello.com/1/cards/65c36b966268d407a415a538/attachments/65c3876ce396894f2b5986ac/previews/65c38770e396894f2b598832/download/pexels-inchs-11552022.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 8%;
}
.marco{
  display: flex;
  justify-content: center;
  width: 58vw;
  height: 65vw;
  background-color: #ffffff;
  border: 1px solid #ccc; 
  box-shadow: 0px 7px 10px black;
}
`

const Animal = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/animals');
        console.log(response)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const result = await response.json();
        console.log(result)
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <AnimalContainer>
       <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section className='itemContent'>
          {data?.map((animal) => 
          (<article key={animal.id}>
          <p>{animal.id}</p>
          <h1 className='name'>{animal.name}</h1>
          <h3 className='s_name'>{animal.scientificName}</h3>
          <p className='author'>{animal.photographer}</p>
          <div className='marco'><img src={animal.image} alt={animal.name} className='image'/></div>
          <p className='description'>{animal.description}</p>
          </article> ))}
        </section>
      )}
     </div>  
   </AnimalContainer>  
  );
 };

export default Animal;

