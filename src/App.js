import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './inicio';
import Registro from './registro';
import Paramedico from './paramedico';
import Enfermeria from './enfermeria';
import Podologia from './podologia';
import AsistenteEducativo from './asistente educativo';
import Belleza from './belleza';
import Login from './login';
import PanelAlumno from './panel alumno';
import PanelDocente from './panel docente';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/paramedico" element={<Paramedico />} />
        <Route path="/enfermeria" element={<Enfermeria />} />
        <Route path="/podologia" element={<Podologia />} />
        <Route path="/asistente-educativo" element={<AsistenteEducativo />} />
        <Route path="/belleza" element={<Belleza />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel-alumno" element={<PanelAlumno />} />
        <Route path="/panel-docente" element={<PanelDocente />} />
      </Routes>
    </HashRouter>
  );
}