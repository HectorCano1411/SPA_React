import React from 'react';
import './FormComponent.css';

const BarraNav = () => {
  return (
    <nav className="navbar">
      <ul>
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
