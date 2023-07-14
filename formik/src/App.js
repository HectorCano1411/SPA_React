
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudComponent from './Components/CrudComponent';
import BarraNav from './Components/barraNavegacion'
import Home from './Components/Home'

function App() {
  return (
    <div>
      <BarraNav />
      <Home />
      <CrudComponent />

      {/* <CRUD CustomForm={CustomForm} /> */}
    </div>
  );
}

export default App;