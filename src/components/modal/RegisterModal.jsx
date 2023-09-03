import { LoginForm } from "../login_form/LoginForm"; // Importa el componente LoginForm desde "../login_form/LoginForm"
import { RegistrarUsuarioForm } from "../registrar-usuario_form/RegistrarUsuarioForm"; // Importa el componente RegistrarUsuarioForm desde "../registrar-usuario_form/RegistrarUsuarioForm"
import { useMarketplace } from "../../context"; // Importa el contexto global desde "../../context"
import "./registerModal.scss"; // Importa estilos CSS desde un archivo llamado registerModal.scss
import { useState } from "react"; // Importa useState desde la biblioteca 'react'

const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Estado para controlar si el modal está abierto
  const { showLogin } = useMarketplace(); // Obtiene el valor de showLogin desde el contexto global

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="container-modal" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            {showLogin ? <LoginForm /> : <RegistrarUsuarioForm />}
            {/* Renderiza el formulario de inicio de sesión o el formulario de registro según el valor de showLogin */}
          </div>
        </div>
      )}

      {/* Botón u otro elemento para abrir el modal */}
    </>
  );
};

export default RegisterModal; // Exporta el componente RegisterModal como predeterminado
