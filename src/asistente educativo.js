import React from 'react';
import { Link } from 'react-router-dom';

export default function AsistenteEducativo() {
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

      <section className="hero-carrera" style={{background:'linear-gradient(135deg, #4a2d0f, #8a6a2d)'}}>
        <div className="hero-carrera-icon">📚</div>
        <h1>Asistente Educativo</h1>
        <p>Apoyo pedagógico y atención a necesidades educativas especiales</p>
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
            <p>El Asistente Educativo apoya a docentes y alumnos en el proceso de enseñanza-aprendizaje, con énfasis en la atención a niños con necesidades educativas especiales, aplicando estrategias pedagógicas inclusivas.</p>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">🎯 Perfil de Egreso</h2>
            <ul className="lista-carrera">
              <li>✅ Apoyo pedagógico en aula</li>
              <li>✅ Atención a necesidades educativas especiales</li>
              <li>✅ Elaboración de material didáctico</li>
              <li>✅ Estimulación temprana</li>
              <li>✅ Orientación a padres de familia</li>
            </ul>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📚 Materias Principales</h2>
            <ul className="lista-carrera">
              <li>📖 Psicología del Desarrollo</li>
              <li>📖 Pedagogía y Didáctica</li>
              <li>📖 Educación Especial e Inclusiva</li>
              <li>📖 Estimulación Temprana</li>
              <li>📖 Lenguaje y Comunicación</li>
              <li>📖 Matemáticas para Niños</li>
              <li>📖 Prácticas en Escuelas</li>
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
              <div className="campo-item">🏫 Escuelas primarias</div>
              <div className="campo-item">👶 Guarderías</div>
              <div className="campo-item">🧩 Centros de atención especial</div>
              <div className="campo-item">🏠 Clases particulares</div>
              <div className="campo-item">📚 Centros de estimulación</div>
              <div className="campo-item">🌟 CAM / USAER</div>
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