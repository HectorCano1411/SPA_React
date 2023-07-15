
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BarraNav from './Components/barraNavegacion'
// import Home from './Components/Home'
// import QuienesSomos from './Components/QuienesSomos'
// import Ayuda from './Components/Ayuda';
// import CrudComponent from './Components/CrudComponent';


// function App() {
//   return (
//     <div>
//       <BarraNav />
//       <Home />
//       <QuienesSomos/>
//       <Ayuda />
//       <CrudComponent />      
//     </div>
//   );
// }



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './Components/barraNavegacion';
import Home from './Components/Home';
import QuienesSomos from './Components/QuienesSomos';
import Ayuda from './Components/Ayuda';
import CrudComponent from './Components/CrudComponent';

function App() {
  return (
    <Router>
      <div>
        <BarraNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Contacto" element={<CrudComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

