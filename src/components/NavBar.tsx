import React from 'react'

const NavBar: React.FC = () => {
    return (
        <nav className="bg-primary border-b-4">
            <div className=" p-4 flex justify-between items-center">
                <div>
                    <a href="#" className="text-lg font-bold text-white">
                        José Manuel
                    </a>
                </div>
                <div className=''>
                    <ul className="flex bg-red-400 gap-5  items-center">
                        <li>
                            <a href="#" className="text-lg text-white hover:text-gray-500">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg text-white hover:text-gray-500">
                                Acerca de mí
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg text-white hover:text-gray-500">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar