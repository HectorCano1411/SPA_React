import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';    
import './component.css/Ayuda.css';

const imageUrls = [
  "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/11035547/pexels-photo-11035547.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=600",
];
const imageTitles = [
  "Inteligencia Artificial",
  "CiberSeguridad ",
  "¿Qué es Java?",
  "¿Qué es Vue.js?",
];

const textos = [
  "La inteligencia artificial (IA) en la programación es una disciplina fascinante que busca emular la inteligencia humana en las máquinas. Mediante algoritmos y modelos matemáticos avanzados, la IA permite a los sistemas aprender, razonar y tomar decisiones de manera autónoma. En el ámbito de la programación, la IA encuentra aplicaciones en diversas áreas, como el procesamiento de lenguaje natural, el reconocimiento de imágenes, la predicción de datos y la automatización de tareas. A medida que avanza la tecnología, la IA continúa revolucionando la forma en que interactuamos con los sistemas informáticos y ofrece un gran potencial para impulsar la innovación y la eficiencia en el desarrollo de software.",
  "La ciberseguridad es un aspecto fundamental en la era digital actual. Con el crecimiento de las amenazas cibernéticas, proteger la información y los sistemas se ha vuelto esencial. La ciberseguridad se enfoca en prevenir, detectar y responder a posibles ataques informáticos. Esto incluye la implementación de medidas de seguridad, como firewalls, antivirus y sistemas de autenticación. Además, es necesario educar a los usuarios sobre buenas prácticas de seguridad, como el uso de contraseñas fuertes y la actualización regular de software. La ciberseguridad es un campo en constante evolución, ya que los ciberdelincuentes buscan constantemente nuevas formas de vulnerar los sistemas.",
  "Java es un lenguaje de programación de propósito general ampliamente utilizado en el desarrollo de aplicaciones y sistemas. Fue creado con el objetivo de ser portable, eficiente y seguro. Java se basa en el concepto de 'write once, run anywhere', lo que significa que el código escrito en Java puede ejecutarse en diferentes plataformas sin necesidad de realizar modificaciones. Es conocido por su sintaxis sencilla y legible, su enfoque en la orientación a objetos y su amplia biblioteca de clases y API. Java se utiliza en una variedad de aplicaciones, desde aplicaciones empresariales hasta aplicaciones móviles y sistemas embebidos.",
  "Vue.js es un framework de JavaScript de código abierto que se utiliza para construir interfaces de usuario interactivas y dinámicas. Es fácil de aprender y de usar, y se destaca por su enfoque en la reactividad y la composición de componentes. Vue.js utiliza una combinación de HTML, CSS y JavaScript para crear aplicaciones web modernas y escalables. Con su arquitectura basada en componentes, Vue.js permite reutilizar y mantener fácilmente el código, lo que lo hace ideal para el desarrollo ágil y eficiente de aplicaciones. Además, cuenta con una comunidad activa y una amplia variedad de complementos y herramientas que facilitan el desarrollo con Vue.js.",
];

const Ayuda = () => {
  return (
    <div className="ayuda-container">
      <h1>Ayuda</h1>
      <p>
        Bienvenido a la sección de Ayuda. Aquí encontrarás información y recursos útiles para resolver tus dudas y
        aprovechar al máximo nuestra plataforma.
      </p>
      <h3>Preguntas frecuentes</h3>
      <p>
        ¿Tienes alguna pregunta? Revisa nuestra lista de preguntas frecuentes para encontrar respuestas a los temas más
        comunes.
      </p>
      <ul>
        <li>¿Cómo puedo crear una cuenta?</li>
        <li>¿Cuál es el proceso de pago?</li>
        <li>¿Cómo puedo contactar al equipo de soporte?</li>
        <li>¿Cuáles son los requisitos del sistema?</li>
      </ul>
      <h3>Documentación</h3>
      <p>
        Consulta nuestra documentación detallada para obtener información sobre cómo utilizar todas las funcionalidades
        de nuestra plataforma.
      </p>
      <p>Encontrarás guías paso a paso, tutoriales y ejemplos prácticos para ayudarte a comenzar rápidamente.</p>
     <div>
      <h1>Noticias</h1>
      <p>Mantente informado de lo que esta aconteciendo en el mundo e la informática.</p>
      <br/>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="card">
                <Card.Img variant="top" src={imageUrls[idx]} />
                <Card.Body>
                  <Card.Title className="card-title">{imageTitles[idx]}</Card.Title>
                  <Card.Text className="card-text">
                    {textos[idx]}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

     </div> 
    </div>  
    
  );
};

export default Ayuda;