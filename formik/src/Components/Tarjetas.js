import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './component.css/Tarjeta.css';

const Tarjeta = () => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
      setShowImage(true);
    }, []);
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=600"  className={showImage ? 'fade-in-animation' : ''} />
        <Card.Body>
          <Card.Title className='card-title'>Desarrollo Ágil</Card.Title>
          <Card.Text>
            En TechGenius, aplicamos los principios del desarrollo ágil para ofrecer soluciones tecnológicas innovadoras y adaptativas. Utilizamos metodologías ágiles como Scrum y Kanban para garantizar entregas rápidas, colaborativas y de alta calidad. Nuestro enfoque centrado en el cliente y la iteración continua nos permite ajustar rápidamente los requisitos y maximizar el valor de cada entrega. Confía en TechGenius para impulsar tu negocio con soluciones ágiles y exitosas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Última actualización hace 3 minutos</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/7675014/pexels-photo-7675014.jpeg?auto=compress&cs=tinysrgb&w=600" className={showImage ? 'fade-in-animation' : ''} />
        <Card.Body>
          <Card.Title className='card-title'>Colaboración Efectiva</Card.Title>
          <Card.Text>
            En TechGenius, trabajamos juntos para lograr resultados excepcionales mediante la colaboración y el intercambio de ideas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Última actualización hace 3 minutos</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" className={showImage ? 'fade-in-animation' : ''} />
        <Card.Body>
          <Card.Title className='card-title'>Soluciones Tecnológicas Personalizadas</Card.Title>
          <Card.Text>
            En TechGenius, nuestro equipo altamente capacitado de ingenieros, desarrolladores y expertos en tecnología colabora estrechamente con los clientes. Comprendemos sus desafíos y objetivos comerciales para diseñar soluciones personalizadas que impulsen su crecimiento y éxito. Nos enorgullece ofrecer resultados excepcionales y ser su socio tecnológico confiable, brindando innovación y soluciones adaptadas a sus necesidades.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Última actualización hace 3 minutos</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Tarjeta;
