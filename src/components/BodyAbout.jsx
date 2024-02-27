import React from 'react'
import building from '../assets/museo-edificio.jpg'
import styled from 'styled-components';

const BodyAboutStyle = styled.div `
.img-cut {
    width: 595px; /* Ancho de la imagen al 100% del contenedor */
    height: 727px; /* Altura automática para mantener la proporción */
    object-fit: cover; /* Recortar la imagen para llenar el contenedor */
    align-items: left;
    margin-left: 20px;
  }
  .about-museum {
    display: flex;
  }
  .text-about{
    display: block;
    text-align: center;
    padding: 10%;
  }
  @media only screen and (min-width: 320px) and (max-width: 1000px){
    .about-museum {
      display: block;
      justify-content: center;
    }
    .img-cut {
      width: 325px; /* Ancho de la imagen al 100% del contenedor */
      height: 397px; /* Altura automática para mantener la proporción */
      object-fit: cover; /* Recortar la imagen para llenar el contenedor */
      margin-left: 11%;
    }
  }
`
//comentario prueba

const BodyAbout = () => {
  return (
    <BodyAboutStyle>
        <div className='about-museum'>
    <img className='img-cut' src={building} alt="" />
    <div className='text-about'>
    <strong className='wellcome'>¡Bienvenido a React Museum!</strong>
    <p>
    Somos un centro público de cultura y ocio conectado con la ciudad y la vida urbana, ubicado en el emblemático Palacio de Cibeles, antiguo Palacio de Comunicaciones, sede actual del Ayuntamiento de Madrid. 
    <br />
    <br />
    Nuestra propuesta plantea el diálogo entre disciplinas –diseño, ilustración, arte, fotografía, urbanismo, arquitectura, música, literatura, historia– con el objetivo de activar el pensamiento crítico ante los desafíos del presente y del futuro. Buscamos generar nuevos modos de relacionarnos con la cultura, desde la reflexión intelectual y desde la diversión, provocando la curiosidad de un público cada vez más diverso. 
    <br />
    <br />
    Somos un espacio vivo y efervescente. Nos vertebran: la arquitectura y la historia que nos envuelven, la creatividad que llena nuestras salas y las actividades que hacen vibrar el palacio. En React Museum hay exposiciones, conciertos, talleres, visitas guiadas, eventos, el Centro de Interpretación del Paisaje de la Luz, un punto de información turística, tienda, cafetería y restaurante, áreas sociales y un mirador con vistas únicas. Aquí siempre encontrarás un buen plan. 
    <br />
    <br />
    Recat Museum hace de Madrid su foco y materia básica de estudio; tarjeta de presentación de la ciudad, desde el corazón del Paseo del Arte, quiere ser la mejor estación de llegada y de partida para conocer y sentir su pulso cultural.
    </p>
    </div>
    </div>
    </BodyAboutStyle >
  )
}

export default BodyAbout
