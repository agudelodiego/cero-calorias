import React from "react";
import styled from "styled-components";

// Importaciones para los sliders
import slider1 from "../../assets/carrusel1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";



//Algunos estilos para las imagenes de los sliders
const Slider__img = styled.img`
  width: 85%;
  height: auto;

  @media screen and (min-width: 800px){
    width: 60%;
  }
`;



//*--------------------------------------------------------------------------------
// Componente encargado de renderizar el slider de imagenes
const Carrusel = ()=>{
  return (
    <div id="carouselExampleIndicators" className="carousel slide bg-dark rounded-2" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Slider__img src={slider1} className="d-block m-auto" alt="slider" />
        </div>
        <div className="carousel-item">
          <Slider__img src={slider2} className="d-block m-auto" alt="slider" />
        </div>
        <div className="carousel-item">
          <Slider__img src={slider3} className="d-block m-auto" alt="slider" />
        </div>
        <div className="carousel-item">
          <Slider__img src={slider4} className="d-block m-auto" alt="slider" />
        </div>
        <div className="carousel-item">
          <Slider__img src={slider5} className="d-block m-auto" alt="slider" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Carrusel;
//*--------------------------------------------------------------------------------