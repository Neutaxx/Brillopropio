
import React from 'react';
import { useInView } from '../hooks/useInView';
import { HappyStar } from './Illustrations';

const About: React.FC = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const listItems = [
        "Cómo el maquillaje puede ser una forma de juego y expresión, no una forma de esconderse.",
        "Qué productos son seguros para cada edad y cómo leer etiquetas para cuidar la piel.",
        "Cómo los padres pueden acompañar sin imponer, entendiendo que el diálogo es más fuerte que la crítica."
    ];

    return (
        <section ref={ref} className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center group">
                     <HappyStar className={`w-64 h-64 md:w-80 md:h-80 text-lilac animate-float group-hover:animate-wiggle transition-transform duration-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
                </div>
                <div className={inView ? 'opacity-100' : 'opacity-0'}>
                    <h2 className="font-display text-5xl md:text-6xl text-coral mb-8">Aquí hablamos sobre:</h2>
                    <ul className="space-y-4">
                        {listItems.map((item, index) => (
                             <li key={index} className={`flex items-start transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{transitionDelay: `${300 + index * 200}ms`}}>
                                <span className="text-coral text-2xl mr-4 mt-1">•</span>
                                <p className="text-navy-blue text-lg">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
