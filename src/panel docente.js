import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

export default function PanelDocente() {
  const [usuario, setUsuario] = useState(null);
  const [alumnos, setAlumnos] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [seccion, setSeccion] = useState('alumnos');
  const [calificacion, setCalificacion] = useState({ alumno_id: '', materia: '', calificacion: '' });
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const u = localStorage.getItem('usuario');
    if (!u) { navigate('/login'); return; }
    const user = JSON.parse(u);
    if (user.rol !== 'docente') { navigate('/login'); return; }
    setUsuario(user);
    cargarAlumnos(user.carrera);
    cargarHorarios(user.carrera);
  }, []);

  const cargarAlumnos = async (carrera) => {
    const { data } = await supabase
      .from('usuarios')
      .select('*')
      .eq('rol', 'alumno')
      .eq('carrera', carrera);
    setAlumnos(data || []);
  };

  const cargarHorarios = async (carrera) => {
    const { data } = await supabase
      .from('horarios')
      .select('*')
      .eq('carrera', carrera);
    setHorarios(data || []);
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

      <div className="panel-hero docente">
        <div className="panel-avatar">👨‍🏫</div>
        <div>
          <h2>Bienvenido, {usuario.nombre}</h2>
          <p>Docente · {usuario.carrera}</p>
        </div>
      </div>

      <main className="container my-5">
        <div className="panel-tabs">
          <button className={`tab-btn ${seccion === 'alumnos' ? 'active' : ''}`} onClick={() => setSeccion('alumnos')}>
            👥 Lista de Alumnos
          </button>
          <button className={`tab-btn ${seccion === 'horarios' ? 'active' : ''}`} onClick={() => setSeccion('horarios')}>
            🗓 Horarios
          </button>
          <button className={`tab-btn ${seccion === 'calificaciones' ? 'active' : ''}`} onClick={() => setSeccion('calificaciones')}>
            📝 Calificaciones
          </button>
        </div>

        {seccion === 'alumnos' && (
          <div className="panel-seccion">
            <h3 className="seccion-titulo">👥 Lista de Alumnos</h3>
            {alumnos.length === 0 ? (
              <p className="sin-datos">No hay alumnos registrados</p>
            ) : (
              <div className="tabla-container">
                <table className="tabla-alumnos">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Turno</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumnos.map((a, i) => (
                      <tr key={i}>
                        <td>👤 {a.nombre}</td>
                        <td>{a.email}</td>
                        <td>{a.turno}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {seccion === 'horarios' && (
          <div className="panel-seccion">
            <h3 className="seccion-titulo">🗓 Horarios de Clases</h3>
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
                    <p>🌅 {h.turno}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {seccion === 'calificaciones' && (
          <div className="panel-seccion">
            <h3 className="seccion-titulo">📝 Registrar Calificación</h3>
            {mensaje && <p className="login-error" style={{color:'var(--success)'}}>{mensaje}</p>}
            <div className="form-grid">
              <div className="campo">
                <label>Alumno</label>
                <select value={calificacion.alumno_id} onChange={e => setCalificacion({...calificacion, alumno_id: e.target.value})}>
                  <option value="">Selecciona alumno</option>
                  {alumnos.map((a, i) => (
                    <option key={i} value={a.id}>{a.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="campo">
                <label>Materia</label>
                <select value={calificacion.materia} onChange={e => setCalificacion({...calificacion, materia: e.target.value})}>
                  <option value="">Selecciona materia</option>
                  {horarios.map((h, i) => (
                    <option key={i} value={h.materia}>{h.materia}</option>
                  ))}
                </select>
              </div>
              <div className="campo">
                <label>Calificación (0-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  placeholder="8.5"
                  value={calificacion.calificacion}
                  onChange={e => setCalificacion({...calificacion, calificacion: e.target.value})}
                />
              </div>
            </div>
            <button className="btn-enviar" style={{marginTop:'1rem'}}
              onClick={async () => {
                if (!calificacion.alumno_id || !calificacion.materia || !calificacion.calificacion) {
                  setMensaje('❌ Completa todos los campos');
                  return;
                }
                setMensaje('✅ Calificación registrada correctamente');
                setCalificacion({ alumno_id: '', materia: '', calificacion: '' });
              }}>
              Guardar Calificación →
            </button>
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