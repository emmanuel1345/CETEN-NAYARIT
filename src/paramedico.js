import React from 'react';
import { Link } from 'react-router-dom';

export default function Paramedico() {
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

      <section className="hero-carrera" style={{background:'linear-gradient(135deg, #2D0F5A, #1A3A8C)'}}>
        <div className="hero-carrera-icon">🚑</div>
        <h1>Paramédico</h1>
        <p>Atención prehospitalaria y soporte vital básico</p>
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
            <p>El Técnico Paramédico está capacitado para brindar atención médica de emergencia prehospitalaria, estabilizar pacientes y transportarlos de manera segura. Es el primer respondedor en situaciones críticas.</p>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">🎯 Perfil de Egreso</h2>
            <ul className="lista-carrera">
              <li>✅ Atención de emergencias médicas prehospitalarias</li>
              <li>✅ Soporte vital básico y avanzado</li>
              <li>✅ Manejo de pacientes politraumatizados</li>
              <li>✅ Atención obstétrica de emergencia</li>
              <li>✅ Uso de equipos médicos de emergencia</li>
            </ul>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📚 Materias Principales</h2>
            <ul className="lista-carrera">
              <li>📖 Anatomía y Fisiología</li>
              <li>📖 Soporte Vital Básico (BLS)</li>
              <li>📖 Soporte Vital Avanzado (ACLS)</li>
              <li>📖 Atención Prehospitalaria de Trauma</li>
              <li>📖 Farmacología de Emergencias</li>
              <li>📖 Urgencias Pediátricas</li>
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
              <div className="campo-item">🚑 Ambulancias</div>
              <div className="campo-item">🏭 Empresas</div>
              <div className="campo-item">🎪 Eventos masivos</div>
              <div className="campo-item">🚒 Protección Civil</div>
              <div className="campo-item">✈️ Aeropuertos</div>
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