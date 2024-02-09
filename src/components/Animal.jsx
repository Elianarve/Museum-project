import styled from 'styled-components';

const AnimalContainer = styled.section`
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
.image{
  width: 50vw;
  height: 50vw;
  background-image: url(https://trello.com/1/cards/65c36b966268d407a415a538/attachments/65c3876ce396894f2b5986ac/previews/65c38770e396894f2b598832/download/pexels-inchs-11552022.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
}
.marco{
  width: 70vw;
  height: 70vw;
  background-color: pink;
}
`

const Animal = () => {
  return (
   <AnimalContainer>
    <section>
      <div className='itemContent'>
      <h1 className='name'>Ballena Azul</h1>
      <h3 className='s_name'>Balaenoptera musculus</h3>
      <img src="" alt="animal photo"/>
      <p className='author'>Estefania Bartolomé</p>
      <div className='marco'>
        <div className='image'>
        </div>
      </div>
      <p className='description'> El animal más grande que ha existido en la Tierra,
       con individuos que pueden alcanzar longitudes de hasta 30 metros y pesar hasta
        200 toneladas. Esta especie de ballena es conocida por su característico color
          colisiones con barcos, la contaminación acústica y la pérdida de hábitat. 
          Es considerada una especie en peligro de extinción y está protegida por diversas 
          leyes y regulaciones internacionales.</p>

      </div>
    </section>
   </AnimalContainer>
  )
}

export default Animal;