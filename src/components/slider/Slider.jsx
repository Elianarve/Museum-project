import React from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
.d-block {
    width: 375px;
    height: 539px;
}
`

const Slider = () => {
  return (
    <SliderContainer>
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://trello.com/1/cards/65c9fc821d3d5470f5729516/attachments/65ca1531808a0880df4ef320/previews/65ca1531808a0880df4ef40e/download/Rectangle_12.png" class="d-block " alt="..." id="ducks" />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://trello.com/1/cards/65c9fc821d3d5470f5729516/attachments/65ca15318a614bfc19fcefb3/previews/65ca15328a614bfc19fceff3/download/tigers-67577_1920.png" class="d-block " alt="..." id="tiger"/>
                </div>
                <div class="carousel-item">
                    <img src="https://trello.com/1/cards/65c9fc821d3d5470f5729516/attachments/65c9fcec7879699a54727ded/previews/65c9fced7879699a54727e7f/download/sea-animals-5252859_1920.jpg" class="d-block " alt="..." id="jellyfish"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </SliderContainer>
  )
}

export default Slider