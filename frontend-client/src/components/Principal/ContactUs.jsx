import React from 'react';

const ContactUs = () => {
    return (
        <section
            id="Negocios"
            className="flex flex-col justify-center items-center m-5 p-10 bg-red-600 text-white rounded-2xl shadow-xl mt-20"
        >
            <h3 className="text-3xl font-bold mb-6 text-white">¡Contáctanos!</h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <div>
                    <label htmlFor="nombre" className="block mb-1 font-bold">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white text-white placeholder-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label htmlFor="apellido" className="block mb-1 font-bold">Apellido</label>
                    <input
                        type="text"
                        id="apellido"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white text-white placeholder-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu apellido"
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="correo" className="block mb-1 font-bold">Correo electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        required
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 rounded-lg bg-white text-white placeholder-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="telefono" className="block mb-1 font-bold">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        maxLength={9}
                        required
                        placeholder="xxx-xxx-xxxx"
                        className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="ciudad" className="block mb-1 font-bold">Ciudad</label>
                    <select
                        id="ciudad"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled selected>Selecciona una ciudad</option>
                        <option>San Borja</option>
                        <option>Miraflores</option>
                        <option>San Miguel</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="descripcion" className="block mb-1 font-bold">Mensaje o descripción</label>
                    <textarea
                        id="descripcion"
                        required
                        placeholder="Escribe aquí tu consulta..."
                        className="w-full px-4 py-3 rounded-lg bg-white text-white placeholder-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    ></textarea>
                </div>

                <div className="md:col-span-2 flex items-start space-x-2">
                    <input
                        type="checkbox"
                        id="terminos"
                        required
                        className="accent-blue-600"
                    />
                    <label htmlFor="terminos" className="text-sm font-bold text-white">
                        Acepto los términos y condiciones
                    </label>
                </div>

                <div className="md:col-span-2 text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;