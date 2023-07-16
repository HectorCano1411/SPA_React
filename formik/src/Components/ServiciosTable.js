import React, { useState } from 'react';
import './component.css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode, faServer, faDatabase, faMobileAlt, faNetworkWired, faCloud, faCode, faWifi, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ServiciosTable = ({ handleAddToCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
  
    const closeModal = () => {
      setIsOpen(false);
      setSelectedService('');
    };
  
    const agregarAlCarrito = () => {
      handleAddToCart(selectedService);
      closeModal();
    };
  
    return (
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Desarrollo de software a medida'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Desarrollo web'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Administración de servidores'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Bases de datos'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Desarrollo de aplicaciones móviles'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Redes y seguridad informática'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Computación en la nube'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Consultoría en desarrollo de software'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Conectividad y comunicaciones'); setIsOpen(true); }}>
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
              <button className="add-to-cart-btn" onClick={() => { setSelectedService('Certificaciones tecnológicas'); setIsOpen(true); }}>
                Agregar al carrito
              </button>
            </td>
          </tr>
        </tbody>
  
        {/* Modal */}
        <Modal show={isOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar al carrito</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Estás a punto de agregar "{selectedService}" al carrito. ¿Deseas continuar?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={agregarAlCarrito}>
              Agregar al carrito
            </Button>
          </Modal.Footer>
        </Modal>
      </table>
    );
  };
  export default ServiciosTable;