import { useState, useEffect, useRef } from 'react';
import './MenuUser.css';
// import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MenuUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const avatar = <img className='avatar' src="/src/assets/avatar.png" alt="Avatar" />;
  const avatarLeslie = <img src="/src/assets/Ellipse 9.png" alt="Avatar" />;
  const avatarRonald = <img src="/src/assets/Ellipse 9-1.png" alt="Avatar" />;
  const addButton = <img src="/src/assets/addButon.png" alt="Adicionar" />;

  // const { logout } = useAuth();

  const handleLogout = () => {
    navigate(`/`); // Apenas para efeito;
    // logout();
    closeMenu();
  };

  return (
    <div>
      <button onClick={openMenu}>{avatar}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <div className='user'>
              <div>{avatarLeslie}<span>Leslie Alexander</span></div>
              <div>{avatarRonald}<span>Ronald Richards</span></div>
              <div>{addButton}<span>Criar Perfil</span></div>
            </div>
            <ul className='menu-user-list'>
              <li>Editar perfis</li>
              <li>Preferências</li>
              <li>Minha assinatura</li>
              <li>Minha conta</li>
              <li>Ajuda</li>
              <li onClick={handleLogout}>Sair</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuUser;
