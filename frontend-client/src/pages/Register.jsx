import React, { useState } from 'react';
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

        // Simular registro exitoso
        console.log('Datos del usuario registrado:', data);

        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            navigate('/login');
        }, 2000);
    };

    return (
        <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
            <div className="m-5 p-5 bg-black text-white rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-3xl font-bold mb-4">Crear Cuenta</h3>
                <form className="grid grid-cols-1 gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-gray-300">Nombre</label>
                        <input
                            id="name"
                            type="text"
                            {...register('nombre', { required: true })}
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 text-black"
                        />
                        {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300">Correo Electrónico</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', { required: true })}
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 text-black"
                        />
                        {errors.email && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', {
                                required: true,
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: 'Debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo',
                                },
                            })}
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 text-black"
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-gray-300">Confirmar Contraseña</label>
                        <input
                            id="confirm-password"
                            type="password"
                            {...register('confirmacionContraseña', { required: true })}
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 text-black"
                        />
                        {errors.confirmacionContraseña && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 rounded-lg"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center text-gray-300 mt-4">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="text-red-500 hover:text-red-300">
                        Inicia sesión aquí
                    </Link>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg text-center">
                        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <h2 className="text-xl font-bold">Registro exitoso</h2>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Register;
