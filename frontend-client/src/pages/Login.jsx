import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@material-tailwind/react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onSubmit = handleSubmit((data) => {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuariosRegistrados.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (usuarioEncontrado) {
      login(usuarioEncontrado.nombre); // Autenticación con contexto
      navigate('/home');
    } else {
      setError(true);
    }
  });

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/914633400/es/foto/familia-con-dos-ni%C3%B1os-comiendo-comida-r%C3%A1pida.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
      <div className="relative z-10 m-5 p-8 bg-black/80 text-white rounded-2xl shadow-lg w-full max-w-md border border-white/10">
        <h3 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h3>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div>
            <label className="block text-gray-300 mb-1">Correo Electrónico</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="usuario@ejemplo.com"
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="********"
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">
              Credenciales incorrectas. Inténtalo nuevamente.
            </p>
          )}

          <Button
            type="submit"
            className="w-full py-2 bg-transparent text-red-500 border border-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-md transition duration-300"
          >
            Iniciar Sesión
          </Button>
        </form>

        <div className="text-sm text-center text-gray-300 mt-6">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-red-400 hover:text-red-200 underline">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;