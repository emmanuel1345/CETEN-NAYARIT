import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

export default function PanelAlumno() {
  const [usuario, setUsuario] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [documentos, setDocumentos] = useState([]);
  const [seccion, setSeccion] = useState('horario');
  const navigate = useNavigate();

  useEffect(() => {
    const u = localStorage.getItem('usuario');
    if (!u) { navigate('/login'); return; }
    const user = JSON.parse(u);
    if (user.rol !== 'alumno') { navigate('/login'); return; }
    setUsuario(user);
    cargarHorarios(user.carrera, user.turno);
    cargarDocumentos(user.carrera);
  }, []);

  const cargarHorarios = async (carrera, turno) => {
    const { data } = await supabase
      .from('horarios')
      .select('*')
      .eq('carrera', carrera)
      .eq('turno', turno);
    setHorarios(data || []);
  };

  const cargarDocumentos = async (carrera) => {
    const { data } = await supabase
      .from('documentos')
      .select('*')
      .eq('carrera', carrera);
    setDocumentos(data || []);
  };

  const cerrarSesion = () => {
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  if (!usuario) return <div className="cargando">Cargando...</div>;

  return (
    <div className="panel-page">
      <nav className="navbar">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <a className="navbar-brand" href="/">
            <span className="brand-ceten">CETEN</span> Nayarit
          </a>
          <button onClick={cerrarSesion} className="btn-cerrar">Cerrar sesión</button>
        </div>
      </nav>

      <div className="panel-hero">
        <div className="panel-avatar">👨‍🎓</div>
        <div>
          <h2>Bienvenido, {usuario.nombre}</h2>
          <p>{usuario.carrera} · Turno {usuario.turno}</p>
        </div>
      </div>

      <main className="container my-5">
        <div className="panel-tabs">
          <button
            className={`tab-btn ${seccion === 'horario' ? 'active' : ''}`}
            onClick={() => setSeccion('horario')}>
            🗓 Mi Horario
          </button>
          <button
            className={`tab-btn ${seccion === 'documentos' ? 'active' : ''}`}
            onClick={() => setSeccion('documentos')}>
            📄 Documentos
          </button>
        </div>

        {seccion === 'horario' && (
          <div className="panel-seccion">
            <h3 className="seccion-titulo">🗓 Mi Horario de Clases</h3>
            {horarios.length === 0 ? (
              <p className="sin-datos">No hay horarios registrados</p>
            ) : (
              <div className="horario-grid">
                {horarios.map((h, i) => (
                  <div className="horario-card" key={i}>
                    <div className="horario-dia">{h.dia}</div>
                    <h4>{h.materia}</h4>
                    <p>👨‍🏫 {h.docente}</p>
                    <p>🕐 {h.hora_inicio} - {h.hora_fin}</p>
                    <p>🏫 {h.salon}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {seccion === 'documentos' && (
          <div className="panel-seccion">
            <h3 className="seccion-titulo">📄 Documentos Disponibles</h3>
            {documentos.length === 0 ? (
              <p className="sin-datos">No hay documentos disponibles</p>
            ) : (
              <div className="docs-grid">
                {documentos.map((d, i) => (
                  <div className="doc-card" key={i}>
                    <div className="doc-icon">📋</div>
                    <h4>{d.nombre}</h4>
                    <p>{d.descripcion}</p>
                    <a href={d.url} className="btn-dorado" download>
                      ⬇ Descargar
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <footer>
        <p className="footer-name">CETEN – Centro Educativo Técnico de Nayarit</p>
        <p>© 2026 Todos los derechos reservados</p>
      </footer>
    </div>
  );
}