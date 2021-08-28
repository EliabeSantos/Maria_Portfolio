import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ItemContainer, ItemImg } from "./style";
import foto00 from "./carouselImgs/foto00.png";
import foto01 from "./carouselImgs/foto01.png";
import foto02 from "./carouselImgs/foto02.png";
import foto03 from "./carouselImgs/foto03.png";
import foto04 from "./carouselImgs/foto05.png";
import foto05 from "./carouselImgs/foto06.png";
import foto06 from "./carouselImgs/foto07.png";
import foto07 from "./carouselImgs/foto08.png";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

const teste = () => {
  if (vw <= 600) {
    return vw - 20;
  }
  return vw / 2;
};

const CarouselFunc = () => (
  <Carousel
    autoPlay
    centerMode={true}
    width={teste()}
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false}
  >
    <ItemContainer>
      <ItemImg alt="" src={foto00} />
      <a
        className="legend"
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/drive/folders/1zYE7Rt573CYdRkItGHJAW1r9LPs3Y3Ny"
        showThumbs={false}
      >
        Calendário Linha de Frente
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={foto01} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/drive/folders/1zYE7Rt573CYdRkItGHJAW1r9LPs3Y3Ny"
        className="legend"
        showThumbs={false}
      >
        Promoção Linha de Frente
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={foto02} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/drive/folders/1zYE7Rt573CYdRkItGHJAW1r9LPs3Y3Ny"
        className="legend"
        showThumbs={false}
      >
        Promoção Retrô Pizzaria
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={foto03} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/drive/folders/1zYE7Rt573CYdRkItGHJAW1r9LPs3Y3Ny"
        className="legend"
        showThumbs={false}
      >
        Cardápio Retrô Pizzaria
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={foto04} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/drive/folders/1zYE7Rt573CYdRkItGHJAW1r9LPs3Y3Ny"
        className="legend"
        showThumbs={false}
      >
        Promoção de Natal Linha de Frente
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={foto05} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/drive/folders/1zYE7Rt573CYdRkItGHJAW1r9LPs3Y3Ny"
        className="legend"
        showThumbs={false}
      >
        Campanha de Crediário Linha de Frente
      </a>
    </ItemContainer>
    <ItemContainer>
      <ItemImg alt="" src={foto06} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/drive/folders/1zYE7Rt573CYdRkItGHJAW1r9LPs3Y3Ny"
        className="legend"
        showThumbs={false}
      >
        Cardápio Linha de Frente
      </a>
    </ItemContainer>
  </Carousel>
);

export default CarouselFunc;
