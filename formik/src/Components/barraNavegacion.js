// import React from 'react';
// import './component.css/BarraNav.css'

// const BarraNav = () => {
//   return (
//     <nav className="navbar">
//       <ul>
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
import React, { useState } from 'react';
import './component.css/BarraNav.css';

const BarraNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <button onClick={toggleMenu}>Menu</button>
      <ul style={{ display: showMenu ? 'block' : 'none' }}>
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
  );
};

export default BarraNav;
