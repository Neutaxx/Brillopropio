import React from 'react';
import { useInView } from '../hooks/useInView';
import { ScribbleCircle } from './Illustrations';

const HomePage: React.FC = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true });
    const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <>
            {/* Hero Section */}
            <section ref={heroRef} className="text-center min-h-[70vh] flex flex-col justify-center items-center py-20">
                <h1 className={`font-display text-6xl md:text-8xl text-coral transition-all duration-1000 delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    Crecer con brillo propio
                </h1>
                <p className={`mt-8 max-w-2xl text-lg md:text-xl text-navy-blue leading-relaxed transition-all duration-1000 delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    En este espacio creemos que el cuidado de la piel también es una forma de educación emocional.
                    <br /><br />
                    Nacimos al ver cómo cada vez más niñas y adolescentes sienten la presión de verse "perfectas" antes de tiempo. Queremos cambiar eso no con prohibiciones, sino con información, curiosidad y acompañamiento.
                </p>
            </section>
            
            {/* Mission/Vision Section */}
            <section ref={missionRef} className="py-24 overflow-x-hidden">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className={`transition-transform duration-1000 ${missionInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                  <p className="text-lg text-navy-blue mb-8 leading-relaxed">
                    Queremos que las niñas descubran que su piel cambia, crece, se adapta y que está bien.
                    Queremos que los papás sepan que apoyar esa curiosidad es parte de formar una autoestima sana.
                    Y sobre todo, queremos que este sea un lugar para aprender a brillar sin lastimarse.
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
                <div className={`flex flex-col items-center justify-center text-center transition-transform duration-1000 delay-200 ${missionInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
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
        </>
    );
};

export default HomePage;
