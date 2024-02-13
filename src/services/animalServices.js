export const getAnimal = async () => {
    const response = await fetch('http://localhost:3000/animals');
    console.log(response)
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const result = await response.json();
    return result;
}


export const deleteAnimal = async (id) => {
  await fetch(`http://localhost:3000/animals/${id}`, {method:"DELETE"}
  ).then(response => {
      if (response.ok) {
        console.log(response)
          getAnimal();
          alert('Animal eliminado correctamente ✅');
      }});
} 