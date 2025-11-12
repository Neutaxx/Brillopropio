import React from 'react';
import { useInView } from '../hooks/useInView';

const RecommendationBlock = ({
  title,
  items,
  delay = 0,
  children,
}: {
  title: string;
  items?: string[];
  delay?: number;
  children?: React.ReactNode;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`recommendation-block p-8 rounded-2xl border border-navy-blue/10 shadow-sm transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-display text-4xl text-coral mb-6">{title}</h3>
      {items && (
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start transition-colors duration-300 p-2 -ml-2 rounded-lg"
            >
              <span className="text-lilac text-2xl mr-4 mt-1 transition-transform duration-300">
                ✦
              </span>
              <p className="text-navy-blue text-lg">{item}</p>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

const PhraseChip = ({ text, delay = 0 }: { text: string; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`bg-lilac/10 text-navy-blue p-4 rounded-full text-center font-semibold transition-all duration-500 hover:bg-lilac/20 hover:shadow-md transform hover:-translate-y-1 ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );
};

// Componente decorativo para puntos de color
const FloatingDot = ({ src, className }: { src: string; className: string }) => (
  <img
    src={src}
    alt="decorativo"
    className={`absolute opacity-30 animate-float-slow ${className}`}
    style={{ zIndex: 0 }}
  />
);

const RecommendationsPage: React.FC = () => {
  const pointImages = [
    'ilustraciones/puntoa.png',
    'ilustraciones/puntor.png',
    'ilustraciones/puntom.png',
  ];

  const randomImage = () => pointImages[Math.floor(Math.random() * pointImages.length)];

  return (
    <section id="recomendaciones" className="py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <FloatingDot src={randomImage()} className="top-10 left-10 w-24 md:w-32" />
      <FloatingDot src={randomImage()} className="top-40 right-16 w-20 md:w-28" />
      <FloatingDot src={randomImage()} className="bottom-20 left-1/3 w-28 md:w-36" />
      <FloatingDot src={randomImage()} className="bottom-10 right-10 w-24 md:w-32" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="font-display text-6xl md:text-7xl text-coral">
          Recomendaciones para un brillo sano
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Tips simples y amorosos para acompañar a las niñas desde el cuidado y la información,
          no desde el miedo o la prohibición.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto relative z-10">
        <RecommendationBlock
          title="Para las niñas"
          items={[
            'Juega con el maquillaje como forma de expresión, no para esconderte.',
            'Lava tu cara antes de dormir y usa protector solar todos los días.',
            'Si algo te irrita o arde, no lo uses más.',
            'Recuerda: tu piel también está aprendiendo contigo.',
          ]}
          delay={100}
        />

        <RecommendationBlock
          title="Para los papás y mamás"
          items={[
            'Escucha antes de prohibir.',
            'Habla con ellas sobre lo que ven en redes sociales.',
            'Revisa etiquetas juntos y enséñales a leer ingredientes.',
            'Elogia su creatividad más que su apariencia.',
          ]}
          delay={200}
        />

        <RecommendationBlock
          title="Sobre los productos"
          items={[
            'Usa productos hipoalergénicos y sin fragancias fuertes.',
            'Evita fórmulas con alcohol, metales o pigmentos intensos.',
            'No uses productos de adultos en piel muy joven.',
            'Prefiere siempre protección solar antes que maquillaje.',
          ]}
          delay={300}
        />

        <RecommendationBlock title="Frases que ayudan" delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <PhraseChip text="Tu piel está aprendiendo contigo." delay={400} />
            <PhraseChip text="Lo más bonito de ti no está en el espejo." delay={500} />
            <PhraseChip text="Me encanta cómo piensas." delay={600} />
            <PhraseChip text="Brillar no es verse perfecta, es sentirse bien." delay={700} />
          </div>
        </RecommendationBlock>
      </div>

      {/* Animaciones y hover custom */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .recommendation-block {
          background-color: rgba(254, 249, 243, 0.5); /* bg-cream/50 */
        }

        .recommendation-block:hover {
          background-color: #e95448; /* rojo del sitio */
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px) scale(1.02);
        }

        .recommendation-block:hover h3,
        .recommendation-block:hover p,
        .recommendation-block:hover li,
        .recommendation-block:hover span {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default RecommendationsPage;


