
import React from 'react';
import { useInView } from '../hooks/useInView';

const Hero: React.FC = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <section id="inicio" ref={ref} className="text-center min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center items-center py-20">
            <h1 className={`font-display text-6xl md:text-8xl text-coral transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Crecer con brillo propio
            </h1>
            <p className={`mt-8 max-w-2xl text-lg md:text-xl text-navy-blue leading-relaxed transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                En este espacio creemos que el cuidado de la piel también es una forma de educación emocional.
                <br /><br />
                Nacimos al ver cómo cada vez más niñas y adolescentes sienten la presión de verse "perfectas" antes de tiempo. Queremos cambiar eso no con prohibiciones, sino con información, curiosidad y acompañamiento.
            </p>
        </section>
    );
};

export default Hero;
