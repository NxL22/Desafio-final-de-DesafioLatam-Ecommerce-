import React, { useState } from 'react';
import './registrarProductoForm.scss';

const RegistrarProductoForm = () => {
  const [product, setProduct] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    img1: null, // Usamos null en lugar de un string para almacenar archivos
    img2: null, // Usamos null en lugar de un string para almacenar archivos
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    // Si es un campo de archivo, actualizamos el estado con el archivo seleccionado
    if (type === 'file') {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: files[0], // Tomamos el primer archivo seleccionado
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones para enviar los datos del producto
    console.log('Datos del producto:', product);

    // Limpiar los campos del formulario (excepto las imágenes)
    setProduct({
      nombre: '',
      categoria: '',
      precio: '',
      img1: null, // Reiniciamos a null
      img2: null, // Reiniciamos a null
    });
  };

  return (
    <div className="register-product">
      {/* Encabezado */}
      <h2 className="title">Registrar Producto</h2>
      {/* Contenido del formulario */}
      <form className="product-form" onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={product.categoria}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={product.precio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen 1:</label>
          <input
            type="file" // Cambiamos el tipo a 'file' para cargar imágenes
            name="img1"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen 2:</label>
          <input
            type="file" // Cambiamos el tipo a 'file' para cargar imágenes
            name="img2"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Registrar Producto</button>
      </form>
    </div>
  );
};

export default RegistrarProductoForm;
