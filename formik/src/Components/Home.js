
import React, { useState, useEffect } from 'react';
import './component.css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ServiciosTable from './ServiciosTable';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deletedProduct, setDeletedProduct] = useState(null);
  const [itemToRemove, setItemToRemove] = useState(null);

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
    const existingItem = cartItems.find((item) => item.name === product);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.name === product) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
      updateLocalStorage(updatedItems);
    } else {
      const updatedItems = [...cartItems, { name: product, quantity: 1 }];
      setCartItems(updatedItems);
      updateLocalStorage(updatedItems);
    }

    setDeletedProduct(null);
    setShowSuccessMessage(true);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = (event) => {
    event.preventDefault();
    const updatedItem = event.target.editItem.value;
    const updatedItems = cartItems.map((item) => (item.name === editingItem ? { ...item, name: updatedItem } : item));
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
    setEditingItem(null);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleRemoveFromCart = (product) => {
    setItemToRemove(product);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    const existingItem = cartItems.find((item) => item.name === itemToRemove);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedItems = cartItems.map((item) => {
          if (item.name === itemToRemove) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
      } else {
        const updatedItems = cartItems.filter((item) => item.name !== itemToRemove);
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
      }
    }

    setDeletedProduct(itemToRemove);
    setShowDeleteConfirmation(false);
    setShowSuccessMessage(true);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setItemToRemove(null);
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
        {showSuccessMessage && !deletedProduct && (
          <div className="success-message">Producto agregado al carrito</div>
        )}
        {showSuccessMessage && deletedProduct && (
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
        <ServiciosTable handleAddToCart={handleAddToCart} />
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
                {editingItem === item.name ? (
                  <form onSubmit={handleUpdateItem}>
                    <input type="text" name="editItem" defaultValue={item.name} />
                    <button type="submit" className="save-btn">Guardar</button>
                    <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancelar</button>
                  </form>
                ) : (
                  <>
                    <span className="item-name">{item.name} ({item.quantity})</span>
                    <button className="edit-item-btn" onClick={() => handleEditItem(item.name)}>
                      Editar
                    </button>
                    <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(item.name)}>
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
        <Modal.Body>¿Estás seguro de disminuir la cantidad de este producto?</Modal.Body>
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
