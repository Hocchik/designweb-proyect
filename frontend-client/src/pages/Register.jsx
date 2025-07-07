import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password !== data.confirmacionContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const emailExistente = usuarios.some(u => u.email === data.email);
    if (emailExistente) {
      alert('Este correo ya está registrado');
      return;
    }

    usuarios.push({
      nombre: data.nombre,
      email: data.email,
      password: data.password
    });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate('/login');
    }, 2000);
  };

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
        <h3 className="text-3xl font-bold mb-6 text-center">Crear Cuenta</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Nombre</label>
            <input
              type="text"
              {...register('nombre', { required: true })}
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-400"
            />
            {errors.nombre && <span className="text-red-400 text-sm">Este campo es requerido</span>}
          </div>

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
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo'
                }
              })}
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-400"
            />
            {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              {...register('confirmacionContraseña', { required: true })}
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-400"
            />
            {errors.confirmacionContraseña && (
              <span className="text-red-400 text-sm">Este campo es requerido</span>

            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-transparent text-red-500 border border-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-md transition duration-300"
          >
            Registrarse
          </button>
        </form>

        <div className="text-sm text-center text-gray-300 mt-6">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="text-red-400 hover:text-red-200 underline">
            Inicia sesión aquí
          </Link>
        </div>
      </div>

            {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-xl font-bold text-black">Registro exitoso</h2>
            <p className="text-gray-700 mt-2">Redirigiendo al login...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;