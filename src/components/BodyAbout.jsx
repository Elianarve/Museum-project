import React from 'react'
import building from '../assets/museo-edificio.jpg'
import styled from 'styled-components';

const BodyAboutStyle = styled.div `

@media only screen and (min-width: 320px) and (max-width: 1000px){
  
      .img-cut {
        width: 100%; /* Ancho de la imagen al 100% del contenedor */
        height: auto; /* Altura automática para mantener la proporción */
        object-fit: cover; /* Recortar la imagen para llenar el contenedor */
        align-items: center;
        padding-bottom: 5%;
      }
      .about-museum {
        text-align: center;
      }
}
`



const BodyAbout = () => {
  return (
    <BodyAboutStyle>
        <div className='about-museum'>
    <img className='img-cut' src={building} alt="" />
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
    </BodyAboutStyle >
  )
}

export default BodyAbout

/*
import styled from 'styled-components';
import portada from '../assets/cartel animales.png';
import imgBig from '../assets/Rectangle 11.png';

const BodyHome = styled.div `
@media only screen and (min-width: 320px) and (max-width: 1000px){

    .main-home{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .img-main{
        padding: 7%;
    }

    .paraghrap-one{
        margin: 3% 0 0;
    }

    .paraghrap{
        margin: 0%;
        padding: 0% 18%;
    }

    .paraghrap-last{
        margin: 0% 0 8%;
    }

    .img-full{
        padding: 0;
    }

    .paraghrap-text{
        text-align: center;
        padding: 0 7%;
    }
}
`

const Main = () => {
    return (
        <BodyHome>
            <div className='main-home'>
              <img className='img-main' src={portada} alt="img-main" />
              <p className='paraghrap-one'><strong>REACT THE ANIMALS</strong></p>
              <p className='paraghrap'>Obras maestras del Museo Nacional de Ciencias Naturales</p>
              <p className='paraghrap'><strong>Exposición</strong></p>
              <p className='paraghrap-last'>04.02.2024 - 25.09.2024</p>
              <img className='img-full' src={imgBig} alt="" />
              <h3>¡Bienvenido a React Museum!</h3>
              <p className='paraghrap-text'>
                Nos complace anunciar nuestra nueva exposición temporal: "React the Animals". En colaboración con el Museo Nacional de Ciencias Naturales, hemos reunido una impresionante colección de fotografías que capturan la esencia y la belleza de una amplia variedad de animales. <br /> <br /> 
                Desde majestuosas aves hasta cautivadores mamíferos, pasando por fascinantes criaturas acuáticas y misteriosos reptiles, nuestra exposición ofrece una visión única de la diversidad y la maravilla del reino animal. Cada imagen ha sido cuidadosamente seleccionada para revelar detalles sorprendentes y momentos cautivadores de la vida silvestre. <br /> <br /> 
                Fecha de la exposición: 04 de febrero de 2024 - 25 de septiembre de 2024. <br /> <br /> 
                Ven y sumérgete en la magia de la naturaleza capturada en instantáneas excepcionales. Explora la conexión entre la tecnología y la biodiversidad mientras disfrutas de estas imágenes inolvidables. A lo largo de los meses que dure la exposición, tendrás la oportunidad de maravillarte con la riqueza de nuestro planeta y apreciar la labor conjunta entre el React Museum y el Museo Nacional de Ciencias Naturales. <br /> <br /> 
                No te pierdas la oportunidad de ser parte de esta experiencia única. ¡Esperamos verte en el React Museum y que disfrutes de este viaje fotográfico por el asombroso mundo animal!
              </p>
            </div>
            </BodyHome>
    )
}

export default Main;
*/

