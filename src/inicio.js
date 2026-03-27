// ─────────────────────────────────────────────
// IMPORTACIONES
// ─────────────────────────────────────────────

// Importa React, necesario para que JSX funcione
import React from 'react';

// Importa Link de react-router-dom para navegar entre páginas sin recargar
import { Link } from 'react-router-dom';

// Importa los estilos globales de la aplicación
import './App.css';

// ─────────────────────────────────────────────
// IMPORTACIÓN DE IMÁGENES
// Webpack convierte estas rutas en URLs optimizadas al compilar
// ─────────────────────────────────────────────

// Logo principal de CETEN (usado en navbar, hero y footer)
import imgLogo       from './imagenes/logo.png';

// Imagen de la carrera Paramédico
import imgParamedico from './imagenes/paramedico.png';

// Imagen de la carrera Auxiliar en Enfermería
import imgEnfermeria from './imagenes/enfermeria.png';

// Imagen de la carrera Podología
import imgPodologia  from './imagenes/podologia.png';

// Imagen de la carrera Asistente Educativo (el espacio en el nombre es parte del archivo)
import imgAsistente  from './imagenes/asistente educativo.png';

// Imagen de la carrera Cultura de Belleza
import imgEstilismo  from './imagenes/estilismo.png';

// ─────────────────────────────────────────────
// DATOS DE LAS CARRERAS
// Array de objetos, cada uno representa una tarjeta de carrera
// ─────────────────────────────────────────────
const carreras = [
  {
    img: imgParamedico,          // Imagen importada arriba
    alt: 'Paramédico',           // Texto alternativo para accesibilidad
    titulo: 'Paramédico',        // Título que se muestra en la tarjeta
    desc: 'Atención prehospitalaria y soporte vital básico.', // Descripción corta
    duracion: '2 años',          // Duración de la carrera
    ruta: '/paramedico'          // Ruta a la que navega al hacer clic
  },
  {
    img: imgEnfermeria,
    alt: 'Auxiliar en Enfermería',
    titulo: 'Auxiliar en Enfermería',
    desc: 'Cuidados básicos y asistencia al personal médico.',
    duracion: '2 años',
    ruta: '/enfermeria'
  },
  {
    img: imgPodologia,
    alt: 'Podología',
    titulo: 'Podología',
    desc: 'Diagnóstico y tratamiento de patologías del pie.',
    duracion: '18 meses',
    ruta: '/podologia'
  },
  {
    img: imgAsistente,
    alt: 'Asistente Educativo',
    titulo: 'Asistente Educativo',
    desc: 'Apoyo pedagógico y atención a necesidades educativas.',
    duracion: '18 meses',
    ruta: '/asistente-educativo'
  },
  {
    img: imgEstilismo,
    alt: 'Cultura de Belleza',
    titulo: 'Cultura de Belleza',
    desc: 'Corte, colorimetría, maquillaje y tendencias de moda.',
    duracion: '18 meses',
    ruta: '/belleza'
  },
];

// ─────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// Función que retorna el JSX (HTML de React) de la página de inicio
// ─────────────────────────────────────────────
export default function Inicio() {
  return (
    // Fragment: agrupa elementos sin agregar un div extra al DOM
    <>

      {/* ── NAVBAR ─────────────────────────────── */}
      <nav className="navbar">

        {/* Contenedor centrado con flex para separar logo y botón */}
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo + nombre de la escuela, href="#" mantiene en la misma página */}
          <a className="navbar-brand" href="#">

            {/* Logo redondo con borde dorado, height="45" define su tamaño */}
            <img
              src={imgLogo}
              alt="Logo CETEN"
              height="45"
              style={{ borderRadius: '50%', border: '2px solid var(--gold)' }}
            />

            {/* "CETEN" en dorado gracias a la clase brand-ceten */}
            <span className="brand-ceten">CETEN</span> Nayarit
          </a>

          {/* Botón que navega al login del portal administrativo */}
          <Link to="/login" className="btn-portal">🎓 Portal Administrativo</Link>

        </div>
      </nav>

      {/* ── HERO ───────────────────────────────── */}
      {/* Sección principal con fondo degradado definido en App.css */}
      <section className="hero">

        {/* Logo grande animado con efecto pulse (definido en App.css) */}
        <img src={imgLogo} alt="Logo CETEN Nayarit" className="logo-hero" />

        {/* Título principal de la página */}
        <h1>CETEN Nayarit</h1>

        {/* Eslogan en color dorado */}
        <p className="hero-slogan">!! Formando Técnicos para el Futuro !!</p>

        {/* Subtítulo con información general, color blanco semitransparente */}
        <p className="hero-sub">Formación técnica de calidad · Turnos matutino y vespertino</p>

      </section>

      {/* ── SECCIÓN DE CARRERAS ────────────────── */}
      <main className="container my-5">

        {/* Encabezado de la sección */}
        <div className="text-center mb-5">
          <span className="sec-label">Oferta educativa</span>   {/* Etiqueta pequeña superior */}
          <h2 className="sec-title">Nuestras Carreras</h2>      {/* Título de la sección */}
          <p className="sec-sub">Haz clic en una carrera para ver toda la información detallada</p>
        </div>

        {/* Grid de tarjetas definido en App.css con auto-fill */}
        <div className="cards-grid">

          {/* Recorre el array "carreras" y genera una tarjeta por cada elemento */}
          {carreras.map((c, i) => (

            // Link envuelve toda la tarjeta para que sea clickeable
            // key={i} es requerido por React para identificar elementos en listas
            <Link to={c.ruta} className="carrera-link" key={i}>

              {/* Tarjeta individual */}
              <div className="carrera-card">

                {/* Contenedor de imagen con overflow:hidden para el efecto zoom */}
                <div className="card-img-wrapper">
                  <img
                    src={c.img}           // Imagen del objeto del array
                    alt={c.alt}           // Texto alternativo del objeto del array
                    className="card-img"  // Estilos: object-fit cover + zoom en hover
                  />
                </div>

                {/* Contenido textual de la tarjeta */}
                <div className="card-body-content">
                  <h3>{c.titulo}</h3>    {/* Nombre de la carrera */}
                  <p>{c.desc}</p>        {/* Descripción corta */}

                  {/* Píldora con duración y modalidad */}
                  <div className="card-meta">⏱ {c.duracion} · 📋 Presencial</div>

                  {/* Botón con borde morado, se rellena al hacer hover */}
                  <span className="btn-card">Más información</span>
                </div>

              </div>
            </Link>
          ))}

          {/* ── TARJETA ESPECIAL: INSCRÍBETE ─────── */}
          {/* No tiene imagen ni ruta en el array, se define aparte */}
          <div className="carrera-card inscribete">
            <div className="card-body-content">
              <div className="card-icon">✍️</div>              {/* Ícono emoji */}
              <h3>¡Inscríbete!</h3>
              <p>Plazas limitadas. ¡Pregunta por nuestras becas!</p>
              <div className="card-meta">🎁 Becas disponibles</div>

              {/* Link dorado que lleva al formulario de registro */}
              <Link to="/registro" className="btn-dorado">Registrarme</Link>
            </div>
          </div>

        </div>
      </main>

      {/* ── BARRA DE CONTACTO ──────────────────── */}
      {/* Fondo morado oscuro con los datos de contacto */}
      <section className="contacto-strip">
        <div className="container">
          <div className="contacto-grid">

            {/* Dirección física */}
            <div className="contact-item">
              <span>📍</span>
              <p>Bella Italia 123, Tepic, Nayarit</p>
            </div>

            {/* Teléfono clickeable (abre marcador en móvil) */}
            <div className="contact-item">
              <span>📞</span>
              <p><a href="tel:3113441665">311 344 1665</a></p>
            </div>

            {/* Correo electrónico clickeable */}
            <div className="contact-item">
              <span>📧</span>
              <p><a href="mailto:cete.nayarit@gmail.com">cete.nayarit@gmail.com</a></p>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer>
        {/* Logo pequeño con borde dorado */}
        <img src={imgLogo} alt="Logo CETEN" height="55" className="footer-logo" />

        {/* Nombre completo de la institución en dorado */}
        <p className="footer-name">CETEN – Centro Educativo Técnico de Nayarit</p>

        {/* Dirección */}
        <p>Bella Italia 123, Tepic, Nayarit</p>

        {/* Derechos reservados */}
        <p>© 2026 Todos los derechos reservados</p>
      </footer>

      {/* ── BOTÓN FLOTANTE DE WHATSAPP ─────────── */}
      {/* position:fixed en App.css, siempre visible en esquina inferior derecha */}
      <a
        href="https://wa.me/523251040783?text=Hola%20CETEN%2C%20me%20interesa%20información%20sobre%20las%20carreras"
        target="_blank"    // Abre en nueva pestaña
        rel="noreferrer"   // Seguridad: evita que la nueva pestaña acceda al origen
        className="whatsapp-float"
      >
        {/* Ícono oficial de WhatsApp desde Wikipedia */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />

        {/* Texto visible en escritorio, oculto en móvil con CSS */}
        <span className="whatsapp-texto">¡Escríbenos!</span>
      </a>

    </>
  );
}