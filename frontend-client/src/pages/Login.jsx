import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@material-tailwind/react';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const onSubmit = handleSubmit((data) => {
        // Simula una verificación básica (puedes ajustar los valores de prueba aquí)
        const demoEmail = 'demo@correo.com';
        const demoPassword = '123456';

        if (data.email === demoEmail && data.password === demoPassword) {
            console.log('Inicio de sesión simulado exitoso:', data);
            navigate('/home'); // Redirige al home
        } else {
            setError(true);
        }
    });

    return (
        <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
            <div className="m-5 p-5 bg-black text-white rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-3xl font-bold mb-4">Iniciar Sesión</h3>
                <form className="grid grid-cols-1 gap-4 w-full" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-gray-300">Correo Electrónico</label>
                        <input
                            id="email"
                            {...register('email', { required: true })}
                            type="email"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300">Contraseña</label>
                        <input
                            id="password"
                            {...register('password', { required: true })}
                            type="password"
                            required
                            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            Credenciales incorrectas. Inténtalo nuevamente.
                        </p>
                    )}

                    <div className="text-center">
                        <Button
                            type="submit"
                            className="ml-auto mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg"
                        >
                            Iniciar Sesión
                        </Button>
                    </div>
                </form>

                <div className="text-sm text-center text-gray-300 mt-4">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/register" className="text-red-500 hover:text-red-300">
                        Regístrate aquí
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
