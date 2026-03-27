import React from 'react';
import { Link } from 'react-router-dom';

export default function Belleza() {
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

      <section className="hero-carrera" style={{background:'linear-gradient(135deg, #6a0d4a, #c2185b)'}}>
        <div className="hero-carrera-icon">💇</div>
        <h1>Cultura de Belleza</h1>
        <p>Corte, colorimetría, maquillaje y tendencias de moda</p>
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
            <p>El Técnico en Cultura de Belleza domina las técnicas más actuales de estilismo, colorimetría y maquillaje. Está preparado para trabajar en salones de belleza, spas o emprender su propio negocio.</p>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">🎯 Perfil de Egreso</h2>
            <ul className="lista-carrera">
              <li>✅ Corte de cabello damas y caballeros</li>
              <li>✅ Colorimetría y técnicas de color</li>
              <li>✅ Maquillaje social y artístico</li>
              <li>✅ Tratamientos capilares</li>
              <li>✅ Uñas acrílicas y gel</li>
            </ul>
          </div>

          <div className="carrera-info-card">
            <h2 className="seccion-titulo">📚 Materias Principales</h2>
            <ul className="lista-carrera">
              <li>📖 Teoría del Color</li>
              <li>📖 Técnicas de Corte</li>
              <li>📖 Colorimetría Avanzada</li>
              <li>📖 Maquillaje Profesional</li>
              <li>📖 Tratamientos Capilares</li>
              <li>📖 Uñas y Nail Art</li>
              <li>📖 Administración de Salón</li>
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
              <div className="campo-item">✂️ Salones de belleza</div>
              <div className="campo-item">💆 Spas</div>
              <div className="campo-item">🎬 Cine y televisión</div>
              <div className="campo-item">👰 Bodas y eventos</div>
              <div className="campo-item">🏠 Negocio propio</div>
              <div className="campo-item">💅 Nail studios</div>
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