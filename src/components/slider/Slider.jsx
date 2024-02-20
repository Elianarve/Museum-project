import styled from 'styled-components';
import lagarto from '../../assets/lagarto.png';
import tigre from '../../assets/tigers-67577_1920.jpg';
import medusas from '../../assets/sea-animals-5252859_1920.jpg';

const SliderContainer = styled.div`
max-width: 600px;
margin: 0 auto;

.carousel-slide{
    margin-left:11%;
}

// .d-block {
//     width: 375px;
//     height: 539px;
// }
`

const Slider = () => {
  return (
    <SliderContainer>
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={lagarto} className="d-block " alt="..." id="ducks" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={tigre} className="d-block " alt="..." id="tiger"/>
                </div>
                <div className="carousel-item">
                    <img src={medusas} className="d-block " alt="..." id="jellyfish"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </SliderContainer>
  )
}

export default Slider