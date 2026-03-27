import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const carreras = ['Paramédico','Auxiliar en Enfermería','Podología','Asistente Educativo','Cultura de Belleza'];

export default function Registro() {
  const [form, setForm] = useState({
    nombre: '', apellido_p: '', apellido_m: '', fecha: '',
    sexo: '', curp: '', telefono: '', email: '',
    domicilio: '', carrera: '', turno: '', estudios: '',
    referido: '', motivacion: '', beca: false, terminos: false
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const cambio = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const validar = () => {
    const err = {};
    if (!form.nombre) err.nombre = 'Escribe tu nombre';
    if (!form.apellido_p) err.apellido_p = 'Escribe tu apellido paterno';
    if (!form.apellido_m) err.apellido_m = 'Escribe tu apellido materno';
    if (!form.fecha) err.fecha = 'Selecciona tu fecha de nacimiento';
    if (!form.sexo) err.sexo = 'Selecciona tu sexo';
    if (!form.curp || form.curp.length !== 18) err.curp = 'La CURP debe tener 18 caracteres';
    if (!/^\d{10}$/.test(form.telefono)) err.telefono = 'El teléfono debe tener 10 dígitos';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Correo inválido';
    if (!form.domicilio) err.domicilio = 'Escribe tu domicilio';
    if (!form.carrera) err.carrera = 'Selecciona una carrera';
    if (!form.turno) err.turno = 'Selecciona un turno';
    if (!form.estudios) err.estudios = 'Selecciona tu grado de estudios';
    if (!form.terminos) err.terminos = 'Debes aceptar los términos';
    return err;
  };

  const enviar = e => {
    e.preventDefault();
    const err = validar();
    setErrores(err);
    if (Object.keys(err).length === 0) setEnviado(true);
  };

  if (enviado) return (
    <div className="exito-msg">
      <div className="exito-icon">🎉</div>
      <h3>¡Solicitud enviada con éxito!</h3>
      <p>Un asesor te contactará en menos de 24 horas al número:</p>
      <p className="exito-tel">311 344 1665</p>
      <Link to="/" className="btn-inicio">Volver al inicio</Link>
    </div>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Link to="/" className="navbar-brand">
            <span className="brand-ceten">CETEN</span> Nayarit
          </Link>
          <Link to="/" className="btn-regresar">← Regresar</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-form">
        <span className="form-tag">✍️ Inscripciones abiertas</span>
        <h1>Regístrate en CETEN</h1>
        <p>Completa el formulario y un asesor te contactará en menos de 24 horas</p>
      </section>

      {/* PASOS */}
      <section className="pasos-strip">
        <div className="container">
          <div className="pasos-grid">
            <div className="paso"><div className="paso-num">01</div><h5>Llena el formulario</h5><p>Completa tus datos personales</p></div>
            <div className="paso"><div className="paso-num">02</div><h5>Te contactamos</h5><p>Un asesor te llama al 311 344 1665</p></div>
            <div className="paso"><div className="paso-num">03</div><h5>Entrega documentos</h5><p>Acta, CURP y certificado de estudios</p></div>
            <div className="paso"><div className="paso-num">04</div><h5>¡Inicio de clases!</h5><p>Elige tu turno matutino o vespertino</p></div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <main className="container my-5">
        <div className="form-card">
          <div className="form-header">
            <h2>Solicitud de Inscripción</h2>
            <p>Campos con <span className="requerido">*</span> son obligatorios</p>
          </div>
          <form onSubmit={enviar} noValidate>

            <div className="form-seccion">
              <h4 className="seccion-titulo">👤 Datos Personales</h4>
              <div className="form-grid">
                {[
                  { label: 'Nombre(s)', name: 'nombre', placeholder: 'Juan Carlos' },
                  { label: 'Apellido Paterno', name: 'apellido_p', placeholder: 'García' },
                  { label: 'Apellido Materno', name: 'apellido_m', placeholder: 'López' },
                ].map(f => (
                  <div className="campo" key={f.name}>
                    <label>{f.label} <span className="requerido">*</span></label>
                    <input name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={cambio} className={errores[f.name] ? 'invalido' : ''} />
                    <span className="error-msg">{errores[f.name]}</span>
                  </div>
                ))}
                <div className="campo">
                  <label>Fecha de Nacimiento <span className="requerido">*</span></label>
                  <input type="date" name="fecha" value={form.fecha} onChange={cambio} className={errores.fecha ? 'invalido' : ''} />
                  <span className="error-msg">{errores.fecha}</span>
                </div>
                <div className="campo">
                  <label>Sexo <span className="requerido">*</span></label>
                  <select name="sexo" value={form.sexo} onChange={cambio} className={errores.sexo ? 'invalido' : ''}>
                    <option value="">Selecciona</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Prefiero no decir</option>
                  </select>
                  <span className="error-msg">{errores.sexo}</span>
                </div>
                <div className="campo">
                  <label>CURP <span className="requerido">*</span></label>
                  <input name="curp" placeholder="XXXX000000XXXXXXXX00" maxLength={18} value={form.curp.toUpperCase()} onChange={cambio} className={errores.curp ? 'invalido' : ''} />
                  <span className="error-msg">{errores.curp}</span>
                </div>
              </div>
            </div>

            <div className="form-seccion">
              <h4 className="seccion-titulo">📞 Datos de Contacto</h4>
              <div className="form-grid">
                <div className="campo">
                  <label>Teléfono / WhatsApp <span className="requerido">*</span></label>
                  <input name="telefono" placeholder="3110000000" maxLength={10} value={form.telefono} onChange={cambio} className={errores.telefono ? 'invalido' : ''} />
                  <span className="error-msg">{errores.telefono}</span>
                </div>
                <div className="campo">
                  <label>Correo Electrónico <span className="requerido">*</span></label>
                  <input type="email" name="email" placeholder="correo@ejemplo.com" value={form.email} onChange={cambio} className={errores.email ? 'invalido' : ''} />
                  <span className="error-msg">{errores.email}</span>
                </div>
                <div className="campo full">
                  <label>Domicilio <span className="requerido">*</span></label>
                  <input name="domicilio" placeholder="Calle, número, colonia, Tepic, Nayarit" value={form.domicilio} onChange={cambio} className={errores.domicilio ? 'invalido' : ''} />
                  <span className="error-msg">{errores.domicilio}</span>
                </div>
              </div>
            </div>

            <div className="form-seccion">
              <h4 className="seccion-titulo">🎓 Carrera e Inscripción</h4>
              <div className="form-grid">
                <div className="campo">
                  <label>Carrera <span className="requerido">*</span></label>
                  <select name="carrera" value={form.carrera} onChange={cambio} className={errores.carrera ? 'invalido' : ''}>
                    <option value="">Selecciona</option>
                    {carreras.map(c => <option key={c}>{c}</option>)}
                  </select>
                  <span className="error-msg">{errores.carrera}</span>
                </div>
                <div className="campo">
                  <label>Turno <span className="requerido">*</span></label>
                  <select name="turno" value={form.turno} onChange={cambio} className={errores.turno ? 'invalido' : ''}>
                    <option value="">Selecciona</option>
                    <option>Matutino</option>
                    <option>Vespertino</option>
                    <option>Indiferente</option>
                  </select>
                  <span className="error-msg">{errores.turno}</span>
                </div>
                <div className="campo">
                  <label>Último grado de estudios <span className="requerido">*</span></label>
                  <select name="estudios" value={form.estudios} onChange={cambio} className={errores.estudios ? 'invalido' : ''}>
                    <option value="">Selecciona</option>
                    <option>Secundaria</option>
                    <option>Bachillerato / Preparatoria</option>
                    <option>Licenciatura</option>
                    <option>Otro</option>
                  </select>
                  <span className="error-msg">{errores.estudios}</span>
                </div>
                <div className="campo">
                  <label>¿Cómo te enteraste?</label>
                  <select name="referido" value={form.referido} onChange={cambio}>
                    <option value="">Selecciona</option>
                    <option>Facebook</option>
                    <option>Recomendación</option>
                    <option>Google</option>
                    <option>Volante</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="campo full">
                  <label>¿Por qué deseas estudiar en CETEN?</label>
                  <textarea name="motivacion" rows={3} placeholder="Cuéntanos tu motivación..." value={form.motivacion} onChange={cambio} />
                </div>
              </div>
            </div>

            <div className="form-seccion beca-seccion">
              <label className="check-label">
                <input type="checkbox" name="beca" checked={form.beca} onChange={cambio} />
                🎁 Sí, me interesa una beca
              </label>
            </div>

            <div className="form-seccion">
              <label className="check-label">
                <input type="checkbox" name="terminos" checked={form.terminos} onChange={cambio} />
                Acepto que CETEN use mis datos para contactarme <span className="requerido">*</span>
              </label>
              <span className="error-msg">{errores.terminos}</span>
            </div>

            <button type="submit" className="btn-enviar">Enviar Solicitud →</button>
          </form>
        </div>

        {/* INFO CONTACTO */}
        <div className="info-box mt-4">
          <div className="contacto-grid">
            <div className="contact-item"><span>📍</span><p>Bella Italia 123, Tepic, Nayarit</p></div>
            <div className="contact-item"><span>📞</span><p><a href="tel:3113441665">311 344 1665</a></p></div>
            <div className="contact-item"><span>📧</span><p><a href="mailto:cete.nayarit@gmail.com">cete.nayarit@gmail.com</a></p></div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <p className="footer-name">CETEN – Centro Educativo Técnico de Nayarit</p>
        <p>© 2026 Todos los derechos reservados</p>
      </footer>

      {/* WHATSAPP */}
      <a href="https://wa.me/523251040783?text=Hola%20CETEN%2C%20me%20interesa%20información%20sobre%20las%20carreras"
         target="_blank" rel="noreferrer" className="whatsapp-float">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        <span className="whatsapp-texto">¡Escríbenos!</span>
      </a>
    </>
  );
}