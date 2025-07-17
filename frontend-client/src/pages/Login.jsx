import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext'; // Asegúrate de importar correctamente tu contexto

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuariosRegistrados.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (usuarioEncontrado) {
      login(usuarioEncontrado.nombre, usuarioEncontrado.email); // ✅ Usa el contexto
      navigate('/home');
    } else {
      setError(true);
    }
  };

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f2/49/ff/bembos.jpg?w=900&h=-1&s=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Fondo difuminado */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Botón para volver a Home */}
        <Link to="/home" className="flex items-center text-sm text-red-400 hover:text-red-200 mb-4 mt-4">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Volver a Home
        </Link>

        <div className="p-8 bg-black/80 text-white rounded-2xl shadow-lg border border-white/10">
          <h3 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-1">Correo Electrónico</label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-400"
              />
              {errors.email && <span className="text-red-400 text-sm">Este campo es requerido</span>}
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Contraseña</label>
              <input
                type="password"
                {...register('password', { required: true })}
                className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-400"
              />
              {errors.password && <span className="text-red-400 text-sm">Este campo es requerido</span>}
            </div>

            {error && (
              <div className="text-red-400 text-sm">Correo o contraseña incorrectos</div>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-transparent text-red-500 border border-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-md transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="text-sm text-center text-gray-300 mt-6">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="text-red-400 hover:text-red-200 underline">
              Regístrate aquí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
