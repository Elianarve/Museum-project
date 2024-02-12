import { useState, useEffect } from 'react';

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
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <ul>
          {data.map((animal) => (<li>{animal.name}</li>))}
          </ul>
        </div>
      )}
    </div>
  );
 };

export default Animal;
