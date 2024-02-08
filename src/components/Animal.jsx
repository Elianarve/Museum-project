import styled from 'styled-components';

const AnimalContainer = styled.section`
background-color: #000;
`

const Animal = () => {
  return (
   <AnimalContainer>
    <section>
      <h1 className='name'>Ballena Azul</h1>
      <h3 className='s_name'>Balaenoptera musculus</h3>
      <img src="" alt="animal photo"/>
      <p className='author'>Estefania Bartolomé</p>
      <p className='description'> El animal más grande que ha existido en la Tierra,
       con individuos que pueden alcanzar longitudes de hasta 30 metros y pesar hasta
        200 toneladas. Esta especie de ballena es conocida por su característico color
        gris azulado y su enorme tamaño. Habita en todos los océanos del mundo y se
        alimenta principalmente de krill y pequeños peces, filtrando grandes cantidades
         de agua a través de sus barbas para capturar su alimento. A pesar de su tamaño 
         imponente, la ballena azul es un animal tranquilo y pacífico, conocido por sus
          complejas vocalizaciones que pueden ser escuchadas a grandes distancias bajo 
          el agua. Sin embargo, a pesar de ser una especie icónica, la ballena azul 
          enfrenta amenazas significativas debido a la caza comercial histórica, las 
          colisiones con barcos, la contaminación acústica y la pérdida de hábitat. 
          Es considerada una especie en peligro de extinción y está protegida por diversas 
          leyes y regulaciones internacionales.</p>

    </section>
   </AnimalContainer>
  )
}

export default Animal;