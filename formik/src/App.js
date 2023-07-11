
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudComponent from './Components/CrudComponent';
import BarraNav from './Components/barraNavegacion'

function App() {
  return (
    <div>
      <BarraNav />
      <CrudComponent />

      {/* <CRUD CustomForm={CustomForm} /> */}
    </div>
  );
}

export default App;