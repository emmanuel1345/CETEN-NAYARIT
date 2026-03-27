import React from 'react';
import { Link } from 'react-router-dom';

export default function Podologia() {
  return (
    <>
      <nav className="navbar">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Link to="/" className="navbar-brand">
            <span className="brand-ceten">CETEN</span> Nayarit
          </Link>
          <Link to="/" className="btn-regresar">← Regresar</Link>
        </div>
      </nav>

      <section className="hero-carrera" style={{background:'linear-gradient(135deg, #1a4a2e, #2d8a50)'}}>
        <div className="hero-carrera-icon">🦶</div>
        <h1>Podología</h1>
        <p>Diagnóstico y tratamiento de patologías del pie</p>
        <div className="hero-badges">
          <span className="badge-info">⏱ 18 meses</span>
          <span className="badge-info">📋 Presencial</span>
          <span className="badge-info">🌅 Matutino / Vespertino</span>
        </div>
      </section>

      <main className="container my-5">
        <div className="carrera-grid">

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📋 Descripción</h2>
            <p>El Técnico en Podología está capacitado para diagnosticar y tratar afecciones del pie y tobillo, con especial énfasis en la atención al paciente diabético, quien requiere cuidados especializados para prevenir complicaciones graves.</p>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">🎯 Perfil de Egreso</h2>
            <ul className="lista-carrera">
              <li>✅ Diagnóstico de patologías del pie</li>
              <li>✅ Tratamiento de uñas encarnadas y hongos</li>
              <li>✅ Atención especializada al pie diabético</li>
              <li>✅ Elaboración de plantillas ortopédicas</li>
              <li>✅ Quiropodología y podología estética</li>
            </ul>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📚 Materias Principales</h2>
            <ul className="lista-carrera">
              <li>📖 Anatomía del Pie y Tobillo</li>
              <li>📖 Patologías Podológicas</li>
              <li>📖 Pie Diabético</li>
              <li>📖 Quiropodología</li>
              <li>📖 Podología Estética</li>
              <li>📖 Ortopodología</li>
              <li>📖 Prácticas Clínicas</li>
            </ul>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📄 Requisitos de Ingreso</h2>
            <ul className="lista-carrera">
              <li>📌 Certificado de secundaria o bachillerato</li>
              <li>📌 Acta de nacimiento</li>
              <li>📌 CURP</li>
              <li>📌 Identificación oficial</li>
              <li>📌 2 fotografías tamaño infantil</li>
            </ul>
          </div>

          <div className="carrera-info-card campo-laboral">
            <h2 className="seccion-titulo">💼 Campo Laboral</h2>
            <div className="campo-grid">
              <div className="campo-item">🏥 Clínicas</div>
              <div className="campo-item">🏠 Consultorio propio</div>
              <div className="campo-item">💆 Spas</div>
              <div className="campo-item">👴 Asilos</div>
              <div className="campo-item">🏃 Clínicas deportivas</div>
              <div className="campo-item">💉 IMSS / ISSSTE</div>
            </div>
          </div>

        </div>

        <div className="cta-inscripcion">
          <h3>¿Te interesa esta carrera?</h3>
          <p>Plazas limitadas — ¡Inscríbete ahora!</p>
          <Link to="/registro" className="btn-dorado" style={{fontSize:'1rem', padding:'0.9rem 2.5rem'}}>
            Quiero inscribirme →
          </Link>
        </div>
      </main>

      <footer>
        <p className="footer-name">CETEN – Centro Educativo Técnico de Nayarit</p>
        <p>© 2026 Todos los derechos reservados</p>
      </footer>
    </>
  );
}