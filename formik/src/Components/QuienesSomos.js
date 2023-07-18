import React from 'react';
import Tarjeta from './Tarjetas';
import './component.css/QuienesSomos.css';


const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <h2 className="quienes-somos-title">Quiénes Somos</h2>
      <Tarjeta />

      <p className="quienes-somos-text">
        TechGenius es una empresa tecnológica líder en la industria, fundada con la visión de impulsar la innovación y
        transformación digital en todo el mundo. Desde nuestro inicio, nos hemos destacado por brindar soluciones
        tecnológicas avanzadas y servicios de vanguardia que ayudan a las empresas a alcanzar su máximo potencial.
      </p>
      <p className="quienes-somos-text">
        Nuestra historia comenzó hace más de una década, cuando un grupo de apasionados por la tecnología, liderado por
        Héctor Cano Leal, se unió para crear una empresa que marcara la diferencia. Desde entonces, hemos crecido y
        evolucionado, pero nuestra pasión por la excelencia y la entrega de resultados excepcionales sigue siendo el
        núcleo de nuestra cultura empresarial.
      </p>
      <p className="quienes-somos-text">
        En TechGenius, nos enorgullece contar con un equipo altamente capacitado de ingenieros, desarrolladores y
        expertos en tecnología. Nuestros talentosos profesionales trabajan de la mano con nuestros clientes para
        comprender sus desafíos y objetivos comerciales, y así diseñar soluciones personalizadas que impulsen su
        crecimiento y éxito.
      </p>
      <p className="quienes-somos-text">
        Nos especializamos en una amplia gama de servicios, incluyendo desarrollo de software a medida, consultoría en
        transformación digital, implementación de soluciones en la nube, ciberseguridad y mucho más. Nuestro enfoque
        centrado en el cliente nos permite ofrecer soluciones ágiles y escalables que se adaptan a las necesidades
        específicas de cada organización.
      </p>
      <p className="quienes-somos-text">
        En TechGenius, nos esforzamos por mantenernos a la vanguardia de la tecnología, explorando constantemente nuevas
        tendencias y adoptando las últimas herramientas y metodologías. Esto nos permite ofrecer soluciones innovadoras y
        eficientes que impulsan la productividad, la eficiencia y la ventaja competitiva de nuestros clientes.
      </p>
      <p className="quienes-somos-text">
        Nuestro compromiso con la excelencia y la calidad nos ha llevado a establecer relaciones sólidas y duraderas con
        nuestros clientes, quienes confían en nosotros como su socio tecnológico de confianza. Estamos orgullosos de las
        historias de éxito que hemos logrado juntos y nos impulsa a seguir superando los límites de la innovación
        tecnológica.
      </p>
      <p className="quienes-somos-text">
        En resumen, en TechGenius nos apasiona la tecnología y estamos comprometidos a ayudar a las empresas a prosperar en
        la era digital. Si estás buscando soluciones tecnológicas avanzadas y un equipo confiable que se preocupe por tu
        éxito, no dudes en contactarnos. Juntos, podemos llevar tu empresa al siguiente nivel.
      </p>

    </div>
    
  );
};

export default QuienesSomos;
