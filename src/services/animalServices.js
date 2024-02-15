export const getAnimal = async () => {
    const response = await fetch('http://localhost:3000/animals');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const result = await response.json();
    return result;
}

export const getOneAnimal = async (id) =>{
  const response = await fetch(`http://localhost:3000/animals/${id}`);
  const result = await response.json();
  return result;
}


export const deleteAnimal = async (id) => {
  await fetch(`http://localhost:3000/animals/${id}`, {method:"DELETE"}
  ).then(response => {
      if (response.ok) {
        const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la foto?"); 
        if (confirmDelete){
           alert('Eliminado correctamente');
        }
      }});
} 

