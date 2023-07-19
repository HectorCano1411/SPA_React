import React, { useState, useEffect } from 'react';
import './component.css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ServiciosTable, { getPrecioEnDolares } from './ServiciosTable';
/**
 * El componente Home representa la página de inicio de la aplicación.
 * Muestra un carrusel de imágenes, una sección de servicios y un carrito de compras.
 */
const Home = () => {
  // Estado del carrito de compras
  const [cartItems, setCartItems] = useState([]);

  // Estado para editar un elemento del carrito
  const [editingItem, setEditingItem] = useState(null);

  // Estado para mostrar mensajes de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Estado para mostrar la confirmación de eliminación de un producto
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Estado del producto eliminado
  const [deletedProduct, setDeletedProduct] = useState(null);

  // Estado del elemento a eliminar del carrito
  const [itemToRemove, setItemToRemove] = useState(null);

  // Estado de los productos disponibles
  const [availableProducts, setAvailableProducts] = useState([]);

  // Estado para mostrar u ocultar el carrito de compras
  const [showCart, setShowCart] = useState(false);

  // Estado del total de la compra
  const [total, setTotal] = useState(0);

  // Estado para almacenar los datos de la API
  const [apiData, setApiData] = useState(null);

  /**
   * Hook de efecto para obtener los datos de la API al cargar el componente.
   * Realiza una solicitud HTTP GET a la URL 'http://localhost:3000/data'
   * y almacena los datos obtenidos en el estado apiData.
   */
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchApiData();
  }, []);

  /**
   * Hook de efecto para obtener los elementos del carrito almacenados en el almacenamiento local al cargar el componente.
   * Recupera los elementos del carrito del almacenamiento local y los guarda en el estado cartItems.
   * También inicializa los productos disponibles (simulación) y los guarda en el estado availableProducts.
   */
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    // Productos disponibles (simulación)
    const mockAvailableProducts = [
      'Desarrollo de software a medida',
      'Desarrollo web',
      'Administración de servidores',
      'Bases de datos',
      'Desarrollo de aplicaciones móviles',
      'Redes y seguridad informática',
      'Computación en la nube',
      'Consultoría en desarrollo de software',
      'Conectividad y comunicaciones',
      'Certificaciones tecnológicas',
    ];
    setAvailableProducts(mockAvailableProducts);
  }, []);

  /**
   * Función para actualizar los datos del carrito en el almacenamiento local.
   * Recibe los elementos del carrito y el precio total de la compra,
   * y guarda los datos en el almacenamiento local como un objeto JSON.
   */
  const updateCartData = (items, totalPrice) => {
    const cartData = {
      items: items,
      total: totalPrice,
    };
    localStorage.setItem('cartData', JSON.stringify(cartData));
  };

  /**
   * Función para calcular el precio total de la compra.
   * Recorre los elementos del carrito y calcula el precio total multiplicando el precio por la cantidad de cada producto.
   * Actualiza el estado total con el precio total calculado.
   * También llama a la función updateCartData para guardar los datos actualizados en el almacenamiento local.
   */
  const calculateTotal = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      const price = getPrecioEnDolares(item.name);
      const quantity = item.quantity;
      totalPrice += price * quantity;
    }
    setTotal(totalPrice);
    updateCartData(cartItems, totalPrice);
  };

  /**
   * Hook de efecto que se ejecuta cuando cambian los elementos del carrito.
   * Llama a la función calculateTotal para recalcular el precio total de la compra.
   */
  useEffect(() => {
    calculateTotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  /**
   * Función para actualizar los elementos del carrito en el almacenamiento local.
   * Recibe los elementos del carrito y los guarda en el almacenamiento local como un objeto JSON.
   */
  const updateLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  /**
   * Maneja el evento de añadir un producto al carrito.
   * Comprueba si el producto ya existe en el carrito.
   * Si existe, incrementa la cantidad del producto en 1.
   * Si no existe, añade un nuevo elemento al carrito con cantidad 1.
   * Actualiza el estado cartItems y el almacenamiento local.
   * También muestra un mensaje de éxito.
   */
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

  /**
   * Maneja el evento de editar un elemento del carrito.
   * Establece el estado editingItem con el nombre del elemento a editar.
   */
  const handleEditItem = (item) => {
    setEditingItem(item.name);
  };

  /**
   * Maneja el evento de actualizar un elemento del carrito.
   * Actualiza el nombre del elemento en el carrito con el nuevo nombre introducido en el formulario.
   * Actualiza el estado cartItems y el almacenamiento local.
   * Establece el estado editingItem a null para salir del modo de edición.
   */
  const handleUpdateItem = (event) => {
    event.preventDefault();
    const updatedItem = event.target.editItem.value;
    const updatedItems = cartItems.map((item) =>
      item.name === editingItem ? { ...item, name: updatedItem } : item
    );
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
    setEditingItem(null);
  };

  /**
   * Maneja el evento de cancelar la edición de un elemento del carrito.
   * Establece el estado editingItem a null para salir del modo de edición.
   */
  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  /**
   * Maneja el evento de quitar un producto del carrito.
   * Establece el estado itemToRemove con el nombre del producto a eliminar.
   * Muestra la confirmación de eliminación.
   */
  const handleRemoveFromCart = (product) => {
    setItemToRemove(product);
    setShowDeleteConfirmation(true);
  };

  /**
   * Confirma la eliminación de un producto del carrito.
   * Comprueba si el producto existe en el carrito.
   * Si la cantidad del producto es mayor que 1, decrementa la cantidad en 1.
   * Si la cantidad del producto es 1, elimina el elemento del carrito.
   * Actualiza el estado cartItems y el almacenamiento local.
   * Establece el estado deletedProduct con el nombre del producto eliminado.
   * Cierra la confirmación de eliminación y muestra un mensaje de éxito.
   */
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

  /**
   * Cancela la eliminación de un producto del carrito.
   * Cierra la confirmación de eliminación y restablece el estado itemToRemove a null.
   */
  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setItemToRemove(null);
  };

  /**
   * Componente SuccessMessage para mostrar mensajes de éxito.
   * Muestra un mensaje de éxito cuando se agrega o elimina un producto del carrito.
   * Se oculta automáticamente después de 3 segundos.
   */
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

  /**
   * Maneja el evento de mostrar u ocultar el carrito de compras.
   * Alterna el estado showCart para mostrar u ocultar el carrito.
   */
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  /**
   * Renderiza el componente Home.
   */
  return (
    <div className="home-container">
      {/* Encabezado */}
      <header className="header">
        <h1>Bienvenido a TechGenius</h1>
        <p>Tu socio en soluciones tecnológicas innovadoras</p>
        <p>¡Descubre todo sobre nuestra empresa tecnológica, TechGenius!</p>
      </header>

      {/* Carrusel de imágenes */}
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

      {/* Sección de servicios */}
      <section className="services-section">
        <h2 className="services-section-title">Nuestros servicios</h2>
        {apiData && (
          <ServiciosTable
            data={apiData}
            handleAddToCart={handleAddToCart}
            getPrecioEnDolares={getPrecioEnDolares}
            handleUpdateItem={handleUpdateItem}
          />
        )}
      </section>

      {/* Mensaje de éxito */}
      <SuccessMessage />

      {/* Carrito de compras */}
      <div className="cart-container">
        <h2 className="cart-title">
          <FaShoppingCart className="cart-icon" /> Carrito de compras
        </h2>
        <button className="toggle-cart-btn" onClick={toggleCart}>
          {showCart ? 'Esconder carrito' : 'Mostrar carrito'}
        </button>
        {showCart && (
          <>
            {cartItems.length === 0 ? (
              <p className="empty-cart">El carrito está vacío</p>
            ) : (
              <ul className="cart-items-list">
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    {editingItem === item.name ? (
                      <form onSubmit={handleUpdateItem}>
                        <select name="editItem" defaultValue={item.name}>
                          {availableProducts.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                        <button type="submit" className="save-btn">
                          Guardar
                        </button>
                        <button type="button" className="cancel-btn" onClick={handleCancelEdit}>
                          Cancelar
                        </button>
                      </form>
                    ) : (
                      <>
                        <span className="item-name">{item.name} ({item.quantity})</span>
                        <button className="edit-item-btn" onClick={() => handleEditItem(item)}>
                          Editar
                        </button>
                        <button
                          className="remove-from-cart-btn"
                          onClick={() => handleRemoveFromCart(item.name)}
                        >
                          Quitar del carrito
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
            <p className="total-price">Total: ${total}</p>
          </>
        )}
      </div>

      {/* Confirmación de eliminación */}
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


// import React, { useState, useEffect } from 'react';
// import './component.css/Home.css';
// import Carousel from 'react-bootstrap/Carousel';
// import { FaShoppingCart } from 'react-icons/fa';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import ServiciosTable, { getPrecioEnDolares } from './ServiciosTable';
  

// const Home = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [editingItem, setEditingItem] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [deletedProduct, setDeletedProduct] = useState(null);
//   const [itemToRemove, setItemToRemove] = useState(null);
//   const [availableProducts, setAvailableProducts] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const storedCartItems = localStorage.getItem('cartItems');
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }

//     // Simulating available products from the ServiciosTable component
//     const mockAvailableProducts = [
//       'Desarrollo de software a medida',
//       'Desarrollo web',
//       'Administración de servidores',
//       'Bases de datos',
//       'Desarrollo de aplicaciones móviles',
//       'Redes y seguridad informática',
//       'Computación en la nube',
//       'Consultoría en desarrollo de software',
//       'Conectividad y comunicaciones',
//       'Certificaciones tecnológicas',
//     ];
//     setAvailableProducts(mockAvailableProducts);
//   }, []);
  
//   const updateCartData = (items, totalPrice) => {
//     const cartData = {
//       items: items,
//       total: totalPrice,
//     };
//     localStorage.setItem('cartData', JSON.stringify(cartData));
//   };

//   const calculateTotal = () => {
//     let totalPrice = 0;
//     for (const item of cartItems) {
//       const price = getPrecioEnDolares(item.name);
//       const quantity = item.quantity;
//       totalPrice += price * quantity;
//     }
//     setTotal(totalPrice);
//     updateCartData(cartItems, totalPrice); // Guardar los datos actualizados en el localStorage
//   };

//   useEffect(() => {
//     calculateTotal();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [cartItems]);

//   const updateLocalStorage = (items) => {
//     localStorage.setItem('cartItems', JSON.stringify(items));
//   };

//   const handleAddToCart = (product) => {
//     const existingItem = cartItems.find((item) => item.name === product);

//     if (existingItem) {
//       const updatedItems = cartItems.map((item) => {
//         if (item.name === product) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
//       setCartItems(updatedItems);
//       updateLocalStorage(updatedItems);
//     } else {
//       const updatedItems = [...cartItems, { name: product, quantity: 1 }];
//       setCartItems(updatedItems);
//       updateLocalStorage(updatedItems);
//     }

//     setDeletedProduct(null);
//     setShowSuccessMessage(true);
//   };

//   const handleEditItem = (item) => {
//     setEditingItem(item.name);
//   };

//   const handleUpdateItem = (event) => {
//     event.preventDefault();
//     const updatedItem = event.target.editItem.value;
//     const updatedItems = cartItems.map((item) => (item.name === editingItem ? { ...item, name: updatedItem } : item));
//     setCartItems(updatedItems);
//     updateLocalStorage(updatedItems);
//     setEditingItem(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingItem(null);
//   };

//   const handleRemoveFromCart = (product) => {
//     setItemToRemove(product);
//     setShowDeleteConfirmation(true);
//   };

//   const confirmDelete = () => {
//     const existingItem = cartItems.find((item) => item.name === itemToRemove);

//     if (existingItem) {
//       if (existingItem.quantity > 1) {
//         const updatedItems = cartItems.map((item) => {
//           if (item.name === itemToRemove) {
//             return { ...item, quantity: item.quantity - 1 };
//           }
//           return item;
//         });
//         setCartItems(updatedItems);
//         updateLocalStorage(updatedItems);
//       } else {
//         const updatedItems = cartItems.filter((item) => item.name !== itemToRemove);
//         setCartItems(updatedItems);
//         updateLocalStorage(updatedItems);
//       }
//     }

//     setDeletedProduct(itemToRemove);
//     setShowDeleteConfirmation(false);
//     setShowSuccessMessage(true);
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setItemToRemove(null);
//   };

//   const SuccessMessage = () => {
//     useEffect(() => {
//       let timer;
//       if (showSuccessMessage) {
//         timer = setTimeout(() => {
//           setShowSuccessMessage(false);
//         }, 3000);
//       }
//       return () => clearTimeout(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [showSuccessMessage]);

//     return (
//       <>
//         {showSuccessMessage && !deletedProduct && (
//           <div className="success-message">Producto agregado al carrito</div>
//         )}
//         {showSuccessMessage && deletedProduct && (
//           <div className="success-message deleted-message">Producto eliminado del carrito</div>
//         )}
//       </>
//     );
//   };

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div className="home-container">
//       <header className="header">
//         <h1>Bienvenido a TechGenius</h1>
//         <p>Tu socio en soluciones tecnológicas innovadoras</p>
//         <p>¡Descubre todo sobre nuestra empresa tecnológica, TechGenius!</p>
//       </header>
    
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt="Slide 1"
//           />
//           <Carousel.Caption>
//             <h3>TECHGENIUS</h3>
//             <p>TechGenius, tu socio en soluciones tecnológicas innovadoras.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt="Slide 2"
//           />
//           <Carousel.Caption>
//             <h3>TECHGENIUS</h3>
//             <p>TechGenius, tu socio en soluciones tecnológicas innovadoras.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt="Slide 3"
//           />
//           <Carousel.Caption>
//             <h3>TECHGENIUS</h3>
//             <p>TechGenius, tu socio en soluciones tecnológicas innovadoras.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
      
//       <section className="services-section">
//         <h2 className="services-section-title">Nuestros servicios</h2>
//         <ServiciosTable handleAddToCart={handleAddToCart} />
//       </section>

//       <SuccessMessage />

//       <div className="cart-container">
//         <h2 className="cart-title">
//           <FaShoppingCart className="cart-icon" /> Carrito de compras
//         </h2>
//         <button className="toggle-cart-btn" onClick={toggleCart}>
//           {showCart ? 'Esconder carrito' : 'Mostrar carrito'}
//         </button>
//         {showCart && (
//           <>
//             {cartItems.length === 0 ? (
//               <p className="empty-cart">El carrito está vacío</p>
//             ) : (
//               <ul className="cart-items-list">
//                 {cartItems.map((item, index) => (
//                   <li key={index} className="cart-item">
//                     {editingItem === item.name ? (
//                       <form onSubmit={handleUpdateItem}>
//                         <select name="editItem" defaultValue={item.name}>
//                           {availableProducts.map((product) => (
//                             <option key={product} value={product}>
//                               {product}
//                             </option>
//                           ))}
//                         </select>
//                         <button type="submit" className="save-btn">Guardar</button>
//                         <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancelar</button>
//                       </form>
//                     ) : (
//                       <>
//                         <span className="item-name">{item.name} ({item.quantity})</span>
//                         <button className="edit-item-btn" onClick={() => handleEditItem(item)}>
//                           Editar
//                         </button>
//                         <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(item.name)}>
//                           Quitar del carrito
//                         </button>
//                       </>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <p className="total-price">Total: ${total}</p>
//           </>
//         )}
//       </div>

//       <Modal show={showDeleteConfirmation} onHide={cancelDelete}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirmar eliminación</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>¿Estás seguro de disminuir la cantidad de este producto?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={cancelDelete}>
//             No
//           </Button>
//           <Button variant="primary" onClick={confirmDelete}>
//             Sí
//           </Button>
//         </Modal.Footer>
//       </Modal>

      
//     </div>
//   );
// };

// export default Home;


