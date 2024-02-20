import styled from 'styled-components';
import lagarto from '../assets/lagarto.png';
import tigre from '../assets/tigre.png';
import medusas from '../assets/medusas.png';
import patos from '../assets/Rectangle 11.png';

const SliderContainer = styled.div`
max-width: 600px;
margin: 0 auto;

.carousel slide{
    margin-left:15%;
}
`

const Slider = () => {
  return (
    <SliderContainer>
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src={lagarto} className="d-block " alt="..." id="lizard" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={tigre} className="d-block " alt="..." id="tiger"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={medusas} className="d-block " alt="..." id="jellyfish"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={patos} className="d-block " alt="..." id="ducks"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </SliderContainer>
  )
}

export default Slider;