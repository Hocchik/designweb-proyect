import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <>
            <footer className=" text-white text-center lg:text-left bg-black bg-opacity-50 " >
                <div className="flex items-center justify-center border-b-2 border-neutral-50 p-6  lg:justify-between ">
                    <div className="me-12 hidden lg:block">
                        <span className='text-white font-bold'>Conéctate con nosotros en nuestras redes sociales:</span>
                    </div>
                    <div className="flex justify-center">
                        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 320 512">
                                <path
                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </a>
                        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512">
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </a>
                        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 488 512">
                                <path
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </a>
                        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </a>
                        <a href="#!" className="[&>svg]:h-4 [&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1 4.3 3.9 4.6 3.6 .3 6.2-1 6.2-3.3 0-2-1-4.3-4-4.6-3.6-.3-6.1 .9-6.1 3.3zm44.1-1.2c-2.9-.7-5.2 1-5.2 3.3 0 2 2.3 4 5.2 4.6 3.3 .3 5.6-.7 5.6-3 0-2-2.4-4-5.6-4.9zM248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 377.1h-16.4c-6.9 0-9.8-2.3-15.3-9.2l-38.9-52.7-20.3 19.6v32.9c0 6.9-2.6 9.2-9.5 9.2h-13.2c-6.9 0-9.5-3.3-9.5-9.2V288.4c0-6.9 3-9.2 9.5-9.2h13.2c6.9 0 9.5 2.3 9.5 9.2v46.6l49.7-50.9c4.6-4.9 6.4-5.6 11-5.6h17.5c7.9 0 10.8 4.6 5.2 10.2l-40.5 39.7 42.8 57.7c4.9 5.2 2.3 10.1-5.3 10.1z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className=' border-b-2 border-neutral-50'><div className="mx-6 py-5
                 text-center md:text-left ">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                        <div>
                            <h6 className="mb-4  uppercase text-white font-bold">FastQRPay</h6>
                            <p className='text-white'>
                                FastQRPay es un prototipo de aplicación móvil diseñado para optimizar el proceso de pago en cadenas de comida rápida mediante el uso de códigos QR. Su objetivo es agilizar las transacciones, reducir las colas y mejorar la experiencia del cliente con pagos rápidos, seguros y sin contacto.
                            </p>
                        </div>

                        <div className="text-center md:text-center md:col-start-2 space-y-2">
                            <h6 className="mb-4 font-bold uppercase text-white">Enlaces útiles</h6>
                            <p className="">
                                <Link to="/home" className="text-white">
                                    Home
                                </Link>
                            </p>
                            <p className="">
                                <Link to="/products" className="text-white">
                                    Productos
                                </Link>
                            </p>
                            <p className="">
                                <Link to="/promotions" className="text-white">
                                    Promociones
                                </Link>
                            </p>
                            <p className="">
                                <Link to="/contactus" className="text-white">
                                    Contáctanos
                                </Link>
                            </p>
                        </div>

                        <div className="text-center md:text-right">
                            <h6 className="mb-4 font-bold text-white uppercase">Contacto</h6>
                            <div className="space-y-2">
                                <p>Lima, Perú</p>
                                <p>FastQRPay.contacto@gmail.com</p>
                                <p>+51 987 654 321</p>
                                <p>+51 912 345 678</p>
                            </div>
                        </div>
                    </div>
                </div></div>
                
                <div className="text-center p-6  text-white bg-black bg-opacity-50 ">
                    <span>© 2024 Derechos Reservados:</span>
                    <a className="text-white" href="#"> FastQRPay</a>
                </div>
            </footer >
        </>
    );
};

export default Footer;
