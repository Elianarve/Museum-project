import styled from 'styled-components';
import portada from '../assets/cartel animales.png';
import imgBig from '../assets/Rectangle 11.png';
import Slider from './slider/Slider';

const BodyHome = styled.div `
.contenedor{
    display: flex;
    justify-content: space-around;
}

.main-home{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.img-main{
    width: 30%;
    height: 75%;
    margin-top: 2%;
    object-fit: cover;
}

.paraghraps{
    display: flex;
    flex-direction: column;
}

.paraghrap-one{
    margin: 6% 0 0;
    padding-right: 12%;
}

.paraghrap{
    margin: 0%;
    padding-right: 12%;
}

.paraghrap-last{
    margin: 0% 0 8%;
    padding-right: 12%;
}

.img-full{
    width: 90%;
    height: 60%;
    object-fit: cover;
}

.paraghrap-text{
    text-align: center;
    padding: 0 15%;
}

.title-h3{
    margin-top: 5%;
}

@media only screen and (min-width: 320px) and (max-width: 1000px){

    .main-home{
        display: block;
    }

    .contenedor{
        display: block;
    }

    .img-main{
        padding: 7%;
        width: 72%;
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
        padding: 7px;
        width: 100%;
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
            <div className='contenedor'>
              <img className='img-main' src={portada} alt="img-main" />
              <div className='paraghraps'>
              <p className='paraghrap-one'><strong>REACT THE ANIMALS</strong></p>
              <p className='paraghrap'>Obras maestras del Museo Nacional de Ciencias Naturales</p>
              <p className='paraghrap'><strong>Exposición</strong></p>
              <p className='paraghrap-last'>04.02.2024 - 25.09.2024</p>
              {/* <img className='img-full' src={imgBig} alt="" /> */}

                    {/* Inicio slider */}
                    
                    <Slider />

                    {/* Fin slider */}
                    
              </div>
              </div>
              
              <h3 className='title-h3'>¡Bienvenido a React Museum!</h3>
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