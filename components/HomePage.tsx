import React from 'react';
import { useInView } from '../hooks/useInView';

const HomePage: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="text-center min-h-[70vh] flex flex-col justify-center items-center py-20"
      >
        {/* Imagen del título con animación */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            heroInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
          }`}
        >
          <img
            src="ilustraciones/titulo1.png"
            alt="Crecer con brillo propio"
            className="w-full max-w-[1400px] mx-auto drop-shadow-lg"
          />
        </div>

        <p
          className={`mt-8 max-w-2xl text-lg md:text-xl text-navy-blue leading-relaxed transition-all duration-1000 delay-500 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          En este espacio creemos que el cuidado de la piel también es una forma de educación emocional.
          <br />
          <br />
          Nacimos al ver cómo cada vez más niñas y adolescentes sienten la presión de verse "perfectas" antes
          de tiempo. Queremos cambiar eso no con prohibiciones, sino con información, curiosidad y
          acompañamiento.
        </p>
      </section>

      {/* Mission/Vision Section */}
      <section ref={missionRef} className="py-24 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Tarjeta roja personalizada (lado izquierdo) */}
          <div
            className={`transition-transform duration-1000 delay-200 ${
              missionInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div
              className="text-white rounded-[40px] md:rounded-[48px] px-8 md:px-12 py-10 md:py-14 shadow-lg max-w-xl mx-auto flex flex-col justify-center"
              style={{ backgroundColor: '#e95448' }}
            >
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                ¡Hola! Nos alegra que estés aquí.
Este es un espacio para aprender a cuidar tu piel, entenderla y quererla, sin dejar de divertirte con el maquillaje.
Aquí no te diremos que no te maquilles, sino cómo hacerlo de forma consciente, sabiendo qué es bueno para tu edad y qué cosas pueden esperar un poquito más.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Nuestra misión:</h3>
                  <p>
                    Educar sobre el maquillaje y el cuidado de la piel desde una mirada responsable, emocional
                    y lúdica.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Nuestra visión:</h3>
                  <p>
                    Que cada niña aprenda a expresarse con libertad, cuidando su cuerpo y su identidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto de cita (lado derecho) */}
          <div
            className={`flex flex-col items-center justify-center text-center transition-transform duration-1000 delay-200 ${
              missionInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <p className="font-display text-4xl md:text-5xl leading-tight">
              <span style={{ color: '#e95448' }}>La belleza </span>
              <span className="text-navy-blue">no se enseña frente </span>
              <span style={{ color: '#c19dc9' }}>a un espejo, </span>
              <span style={{ color: '#e95448' }}>sino con </span>
              <span className="text-navy-blue">conocimiento </span>
              <span style={{ color: '#c19dc9' }}>y confianza. </span>
            </p>

            {/* Imagen Muñeca azul */}
            <div
              className={`mt-8 transition-all duration-1000 ${
                missionInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
              }`}
            >
              <img
                src="ilustraciones/Munnecaazul.png"
                alt="Muñeca azul"
                className="w-48 md:w-56 lg:w-64 mx-auto drop-shadow-md animate-float"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;




