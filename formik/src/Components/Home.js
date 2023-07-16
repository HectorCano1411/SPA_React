import React, { useState, useEffect } from 'react';
import './component.css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode, faServer, faDatabase, faMobileAlt, faNetworkWired, faCloud, faCode, faWifi, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deletedProductName, setDeletedProductName] = useState('');

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const handleAddToCart = (product) => {
    const updatedItems = [...cartItems, product];
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
    setShowSuccessMessage(true);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = (event) => {
    event.preventDefault();
    const updatedItem = event.target.editItem.value;
    const updatedItems = cartItems.map((item) => (item === editingItem ? updatedItem : item));
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
    setEditingItem(null);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleRemoveFromCart = (product) => {
    setDeletedProductName(product);
    setShowDeleteConfirmation(true);
    setShowSuccessMessage(false);
  };

  const confirmDelete = () => {
    const updatedItems = cartItems.filter((item) => item !== deletedProductName);
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
    if (editingItem === deletedProductName) {
      setEditingItem(null);
    }
    setShowDeleteConfirmation(false);
    setShowSuccessMessage(true);
  };

  
  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const SuccessMessage = () => {
    useEffect(() => {
      let timer;
      if (showSuccessMessage) {
        timer = setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
      return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showSuccessMessage]);

    return (
      <>
        {showSuccessMessage && deletedProductName === '' && (
          <div className="success-message">Producto agregado al carrito</div>
        )}
        {showSuccessMessage && deletedProductName !== '' && (
          <div className="success-message deleted-message">Producto eliminado del carrito</div>
        )}
      </>
    );
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
            <h3>TECHGENIUS</h3>
            <p>TechGenius, tu socio en soluciones tecnológicas innovadoras.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>TECHGENIUS</h3>
            <p>TechGenius, tu socio en soluciones tecnológicas innovadoras.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>TECHGENIUS</h3>
            <p>TechGenius, tu socio en soluciones tecnológicas innovadoras.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="services-section">
        <h2 className="services-section-title">Nuestros servicios</h2>
        <table className="services-table">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCogs} className="service-icon" />
                <span className="service-name">Desarrollo de software a medida</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Desarrollo de software a medida')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faLaptopCode} className="service-icon" />
                <span className="service-name">Desarrollo web</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Desarrollo web')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faServer} className="service-icon" />
                <span className="service-name">Administración de servidores</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Administración de servidores')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faDatabase} className="service-icon" />
                <span className="service-name">Bases de datos</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Bases de datos')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
                <span className="service-name">Desarrollo de aplicaciones móviles</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Desarrollo de aplicaciones móviles')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faNetworkWired} className="service-icon" />
                <span className="service-name">Redes y seguridad informática</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Redes y seguridad informática')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCloud} className="service-icon" />
                <span className="service-name">Computación en la nube</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Computación en la nube')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCode} className="service-icon" />
                <span className="service-name">Consultoría en desarrollo de software</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Consultoría en desarrollo de software')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faWifi} className="service-icon" />
                <span className="service-name">Conectividad y comunicaciones</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Conectividad y comunicaciones')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCertificate} className="service-icon" />
                <span className="service-name">Certificaciones tecnológicas</span>
              </td>
              <td>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart('Certificaciones tecnológicas')}>
                  Agregar al carrito
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <SuccessMessage />
    

      <div className="cart-container">
        <h2 className="cart-title">Carrito de compras</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">El carrito está vacío</p>
        ) : (
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                {editingItem === item ? (
                  <form onSubmit={handleUpdateItem}>
                    <input type="text" name="editItem" defaultValue={item} />
                    <button type="submit" className="save-btn">Guardar</button>
                    <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancelar</button>
                  </form>
                ) : (
                  <>
                    <span className="item-name">{item}</span>
                    <button className="edit-item-btn" onClick={() => handleEditItem(item)}>
                      Editar
                    </button>
                    <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(item)}>
                      Quitar del carrito
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Modal show={showDeleteConfirmation} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de eliminar este producto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            No
          </Button>
          <Button variant="primary" onClick={confirmDelete}>
            Sí
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
