import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const iniciarSesion = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');

    console.log('Intentando login con:', email, password);

    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();

    console.log('DATA:', JSON.stringify(data));
    console.log('ERROR:', JSON.stringify(error));

    if (error || !data) {
      setError('Error: ' + (error?.message || 'Usuario no encontrado'));
      setCargando(false);
      return;
    }

    localStorage.setItem('usuario', JSON.stringify(data));

    if (data.rol === 'alumno') {
      navigate('/panel-alumno');
    } else {
      navigate('/panel-docente');
    }
    setCargando(false);
  };

  return (
    <div className="login-page">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="brand-ceten">CETEN</span> Nayarit
          </a>
        </div>
      </nav>

      <div className="login-container">
        <div className="login-card">
          <div className="login-icon">🎓</div>
          <h2>Portal Administrativo</h2>
          <p>Ingresa con tus credenciales de CETEN</p>

          <form onSubmit={iniciarSesion}>
            <div className="campo">
              <label>Correo Electrónico</label>
              <input
                type="email"
                placeholder="correo@ceten.mx"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="campo">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="login-error">❌ {error}</p>}

            <button type="submit" className="btn-enviar" disabled={cargando}>
              {cargando ? 'Verificando...' : 'Iniciar Sesión →'}
            </button>
          </form>

          <div className="login-demo">
            <p>👨‍🎓 Alumno: alumno@ceten.mx / 1234</p>
            <p>👨‍🏫 Docente: docente@ceten.mx / 1234</p>
          </div>
        </div>
      </div>

      <footer>
        <p className="footer-name">CETEN – Centro Educativo Técnico de Nayarit</p>
        <p>© 2026 Todos los derechos reservados</p>
      </footer>
    </div>
  );
}