import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaDeLeads from '../src/components/ListaDeLeads/listaDeLeads.jsx'
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaDeLeads />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/formulario/:id/edit' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// tanbien se sube siiiiiii