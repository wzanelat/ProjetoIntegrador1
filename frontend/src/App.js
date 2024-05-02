import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bemvindo from './paginas/Bemvindo';
import EstilosGlobais from './Componentes/EstilosGlobais';
import EmpresasConsumidoras from './paginas/EmpresasConsumidoras';
import EmpresasFornecedoras from './paginas/EmpresasFornecedoras';
import Admin from './paginas/Admin';
import Mensagens from './paginas/Mensagens';
import Menu from './Componentes/Menu';


function App() {
  return (
    <div>
      <Router>
        <EstilosGlobais/>
        <Menu/>
        <Routes>
          <Route path = '/' element = {<Bemvindo/>} />
          <Route path = '/EmpresasConsumidoras' element = {<EmpresasConsumidoras/>} />
          <Route path = '/EmpresasFornecedoras' element = {<EmpresasFornecedoras/>} />
          <Route path = '/Admin' element = {<Admin/>} />
          <Route path = '/Mensagens' element = {<Mensagens/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
