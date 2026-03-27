import React from 'react';
import { Link } from 'react-router-dom';

export default function Enfermeria() {
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

      <section className="hero-carrera" style={{background:'linear-gradient(135deg, #0D3B6E, #1A6A8C)'}}>
        <div className="hero-carrera-icon">🏥</div>
        <h1>Auxiliar en Enfermería</h1>
        <p>Cuidados básicos y asistencia al personal médico</p>
        <div className="hero-badges">
          <span className="badge-info">⏱ 2 años</span>
          <span className="badge-info">📋 Presencial</span>
          <span className="badge-info">🌅 Matutino / Vespertino</span>
        </div>
      </section>

      <main className="container my-5">
        <div className="carrera-grid">

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📋 Descripción</h2>
            <p>El Auxiliar en Enfermería apoya al personal de salud en la atención directa al paciente, realizando cuidados básicos, administración de medicamentos y asistencia en procedimientos médicos dentro de hospitales y clínicas.</p>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">🎯 Perfil de Egreso</h2>
            <ul className="lista-carrera">
              <li>✅ Cuidados básicos al paciente hospitalizado</li>
              <li>✅ Administración de medicamentos</li>
              <li>✅ Toma de signos vitales</li>
              <li>✅ Curación y vendaje de heridas</li>
              <li>✅ Asistencia en procedimientos quirúrgicos</li>
            </ul>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📚 Materias Principales</h2>
            <ul className="lista-carrera">
              <li>📖 Anatomía y Fisiología</li>
              <li>📖 Fundamentos de Enfermería</li>
              <li>📖 Farmacología Básica</li>
              <li>📖 Enfermería Médico-Quirúrgica</li>
              <li>📖 Enfermería Pediátrica</li>
              <li>📖 Nutrición y Dietética</li>
              <li>📖 Prácticas Hospitalarias</li>
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
              <div className="campo-item">🏥 Hospitales</div>
              <div className="campo-item">🏨 Clínicas</div>
              <div className="campo-item">👴 Asilos</div>
              <div className="campo-item">🏠 Atención domiciliaria</div>
              <div className="campo-item">🏫 Escuelas</div>
              <div className="campo-item">🏭 Empresas</div>
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