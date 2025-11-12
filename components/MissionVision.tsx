
import React from 'react';
import { useInView } from '../hooks/useInView';
import { ScribbleCircle } from './Illustrations';

const MissionVision: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="mision" ref={ref} className="py-24 overflow-x-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className={`transition-transform duration-1000 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <p className="text-lg text-navy-blue mb-8 leading-relaxed">
            ¡Hola! Nos alegra que estés aquí.
Este es un espacio para aprender a cuidar tu piel, entenderla y quererla, sin dejar de divertirte con el maquillaje.
Aquí no te diremos que no te maquilles, sino cómo hacerlo de forma consciente, sabiendo qué es bueno para tu edad y qué cosas pueden esperar un poquito más.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-body font-bold text-xl text-navy-blue mb-2">Nuestra misión:</h3>
              <p>Educar sobre el maquillaje y el cuidado de la piel desde una mirada responsable, emocional y lúdica.</p>
            </div>
            <div>
              <h3 className="font-body font-bold text-xl text-navy-blue mb-2">Nuestra visión:</h3>
              <p>Que cada niña aprenda a expresarse con libertad, cuidando su cuerpo y su identidad.</p>
            </div>
          </div>
        </div>
        <div className={`flex flex-col items-center justify-center text-center transition-transform duration-1000 delay-200 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <p className="font-display text-4xl md:text-5xl leading-tight">
            <span className="text-coral">La belleza </span>
            <span className="text-navy-blue">no se enseña frente </span>
            <span className="text-lilac">a un espejo, </span>
            <span className="text-coral">sino con </span>
            <span className="text-navy-blue">conocimiento </span>
            <span className="text-lilac">y confianza.</span>
          </p>
          <div className="group mt-8">
            <ScribbleCircle className="w-40 h-40 text-coral group-hover:animate-gentle-bounce transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
