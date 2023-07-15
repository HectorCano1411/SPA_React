
// import React from 'react';
// import './component.css/Home.css';
// import Carousel from 'react-bootstrap/Carousel';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="header">
//         <h1>Bienvenido a TechGenius</h1>
//         <p>Tu socio en soluciones tecnológicas innovadoras</p>
//         <p>¡Descubre todo sobre nuestra empresa tecnológica, TechGenius!</p>
//       </header>

      // <Carousel>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
      //       alt="Slide 1"
      //     />
      //     <Carousel.Caption>
      //       <h3>Slide 1</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
      //       alt="Slide 2"
      //     />
      //     <Carousel.Caption>
      //       <h3>Slide 2</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
      //       alt="Slide 3"
      //     />
      //     <Carousel.Caption>
      //       <h3>Slide 3</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      // </Carousel>

//       <section className="services-section">
//         <h2 className="services-section-title">Nuestros servicios</h2>
//         <ul className="services-list">
//           <li className="service-item">
//             <i className="fas fa-cogs"></i>
//             <span className="service-name">Desarrollo de software a medida</span>
//           </li>
//           <li className="service-item">
//             <i className="fas fa-lightbulb"></i>
//             <span className="service-name">Consultoría tecnológica</span>
//           </li>
//           <li className="service-item">
//             <i className="fas fa-laptop-code"></i>
//             <span className="service-name">Diseño y desarrollo web</span>
//           </li>
//           <li className="service-item">
//             <i className="fas fa-chart-line"></i>
//             <span className="service-name">Optimización de procesos empresariales</span>
//           </li>
//           <li className="service-item">
//             <i className="fas fa-puzzle-piece"></i>
//             <span className="service-name">Integración de sistemas</span>
//           </li>
//           <li className="service-item">
//             <i className="fas fa-tasks"></i>
//             <span className="service-name">Gestión de proyectos</span>
//           </li>
//         </ul>
//       </section>

//     </div>
//   );
// };

// export default Home;






import React, { useState, useEffect } from 'react';
import './component.css/Home.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('https://api.example.com/cartItems');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setShowSuccessMessage(true);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== product));
  };

  const SuccessMessage = () => {
    useEffect(() => {
      if (showSuccessMessage) {
        const timer = setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [showSuccessMessage]);

    return showSuccessMessage && <div className="success-message">Producto agregado al carrito</div>;
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Bienvenido a TechGenius</h1>
        <p>Tu socio en soluciones tecnológicas innovadoras</p>
        <p>¡Descubre todo sobre nuestra empresa tecnológica, TechGenius!</p>
      </header>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Slide 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="services-section">
        <h2 className="services-section-title">Nuestros servicios</h2>
        <ul className="services-list">
          <li className="service-item">
            <i className="fas fa-cogs"></i>
            <span className="service-name">Desarrollo de software a medida</span>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart('Desarrollo de software a medida')}>
              Agregar al carrito
            </button>
          </li>
          {/* Resto de los elementos de la lista con sus botones Agregar al carrito */}
        </ul>
      </section>

      <div className="cart-container">
        <h2 className="cart-title">Carrito de compras</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">El carrito está vacío</p>
        ) : (
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span className="item-name">{item}</span>
                <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(item)}>
                  Quitar del carrito
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <SuccessMessage />
    </div>
  );
};

export default Home;
