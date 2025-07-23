'use client'
import { motion } from 'framer-motion'
import React, { useState, useRef, useEffect } from "react";
import Andet from '@/assets/images/ProyClientes/Andet.png';
import Autopartes from '@/assets/images/ProyClientes/Autopartes.png';
import Luminova from '@/assets/images/ProyClientes/Luminova.png';
import Revisteria from '@/assets/images/ProyClientes/Revisteria.png';

export default function ProyClientes(){
    const proyectos = [
        { image: Andet, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1' },
        { image: Autopartes, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2' },
        { image: Luminova, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3' },
        { image: Revisteria, title: 'Proyecto 4', description: 'Descripción breve del proyecto 4' }
    ];
    return (
        <section className="text-inverse section-proy-clientes">
            <h1 className="text-h1 mb-8 text-center">
                Proyectos de Nuestros Clientes
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className='card-clientes'>
                        <img className='img-clientes'
                            src={proyecto.image.src}
                            alt={proyecto.title}
                            width={proyecto.image.width}
                            height={proyecto.image.height}
                        />
                        <div className='text-clientes'>
                            <h4 className="text-xl font-bold mt-4">{proyecto.title}</h4>
                            <p className="text-m">{proyecto.description}</p>
                            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors button-clientes">
                                Ver
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}