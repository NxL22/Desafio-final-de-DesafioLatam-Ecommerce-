import React, { useState } from "react"; // Importa React y useState desde la biblioteca 'react'
import Carousel from "react-bootstrap/Carousel"; // Importa el componente Carousel de react-bootstrap
import "./carousel.scss"; // Importa estilos CSS desde un archivo llamado carousel.scss

// Define el componente funcional CarouselSlider que acepta dos imágenes como propiedades (img1 e img2)
function CarouselSlider({ img1, img2 }) {
  // Utiliza el estado para controlar el índice activo del carrusel
  const [index, setIndex] = useState(0);

  // Función para manejar el cambio de índice en el carrusel
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Renderiza el componente Carousel de react-bootstrap
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carousel-image-container">
          {/* Renderiza la primera imagen con la etiqueta <img> */}
          <img className="carousel-image" src={img1} alt="Primera imagen" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          {/* Renderiza la segunda imagen con la etiqueta <img> */}
          <img className="carousel-image" src={img2} alt="Segunda imagen" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider; // Exporta el componente CarouselSlider como predeterminado
