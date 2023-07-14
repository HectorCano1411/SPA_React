import React, { useState, useEffect } from 'react';
import './component.css/BarraNav.css';
import './component.css/App.css';


const BarraNav = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Ajusta este valor según tu definición de "dispositivos móviles pequeños"
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="containerApp"> {/* Envuelve el componente con la clase "container" */}
      <nav className={`navbar ${isMobile ? 'navbar-mobile' : ''}`}>
        {isMobile && <button onClick={toggleMenu}>Menu</button>}
        <ul style={{ display: (isMobile && !showMenu) ? 'none' : 'block' }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/quienes-somos">Quiénes Somos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
          <li>
            <a href="/ayuda">Ayuda</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default BarraNav;



// export default BarraNav;
// import React, { useState } from 'react';
// import './component.css/BarraNav.css';

// const BarraNav = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="navbar">
//       <button onClick={toggleMenu}>Menu</button>
//       <ul style={{ display: showMenu ? 'block' : 'none' }}>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/quienes-somos">Quiénes Somos</a>
//         </li>
//         <li>
//           <a href="/contacto">Contacto</a>
//         </li>
//         <li>
//           <a href="/ayuda">Ayuda</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default BarraNav;
