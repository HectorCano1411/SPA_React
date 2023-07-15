import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './component.css/BarraNav.css';

const BarraNav = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
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
    <nav className={`navbar navbar-expand-lg ${isMobile && !showMenu ? 'collapsed' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
        TechGenius
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMobile && !showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/QuienesSomos">
                Quiénes Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Ayuda">
                Ayuda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNav;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './component.css/BarraNav.css';

// const BarraNav = () => {
//   const [showMenu, setShowMenu] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 600);
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//       TechGenius
//       </Link>
//       <button className="navbar-toggler" type="button" onClick={toggleMenu}>
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className={`collapse navbar-collapse ${isMobile && !showMenu ? 'show' : ''}`}>
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/QuienesSomos">
//               Quiénes Somos
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contacto">
//               Contacto
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/Ayuda">
//               Ayuda
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default BarraNav;



// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './component.css/BarraNav.css';


// const BarraNav = () => {
//   const [showMenu, setShowMenu] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 600); // Ajusta este valor según tu definición de "dispositivos móviles pequeños"
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className="containerApp"> {/* Envuelve el componente con la clase "container" */}
//       <nav className={`navbar ${isMobile ? 'navbar-mobile' : ''}`}>
//         {isMobile && <button onClick={toggleMenu}>Menu</button>}
//         <ul style={{ display: (isMobile && !showMenu) ? 'none' : 'block' }}>
//           <li>
//             <Link to="/">Home</Link> {/* Utiliza el componente Link en lugar de <a> */}
//           </li>
//           <li>
//             <Link to="/QuienesSomos">Quiénes Somos</Link>
//           </li>
//           <li>
//             <Link to="/contacto">Contacto</Link>
//           </li>
//           <li>
//             <Link to="/Ayuda">Ayuda</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
// export default BarraNav;



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
