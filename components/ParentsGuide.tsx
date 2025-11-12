import React from 'react';
import { useInView } from '../hooks/useInView';

const GuideItem = ({
  title,
  recommendation,
  children,
  illustration,
}: {
  title: string;
  recommendation?: string;
  children?: React.ReactNode;
  illustration: React.ReactNode;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center py-12 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Ilustración arriba */}
      <div
        className={`mb-6 transition-all duration-700 ${
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="flex justify-center">
          {illustration}
        </div>
      </div>

      {/* Rectángulo rojo largo debajo */}
      <div className="w-full max-w-4xl px-4">
        <div
          className="text-white rounded-[20px] md:rounded-[24px] px-8 md:px-12 py-8 md:py-10 shadow-lg space-y-4 leading-relaxed"
          style={{ backgroundColor: '#e95448' }}
        >
          <h3 className="font-display text-3xl md:text-4xl mb-2 text-white">{title}</h3>

          <div className="space-y-3">
            {children}
          </div>

          {recommendation && (
            <p className="mt-4">
              <strong className="font-semibold">Recomendación:</strong> {recommendation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ParentsGuide: React.FC = () => {
  return (
    <section id="guia-padres" className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-6xl md:text-7xl" style={{ color: '#e95448' }}>
          Entender antes de prohibir
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          No se trata de decir "no te maquilles", sino de enseñar a decidir con conciencia. A esta edad,
          muchas niñas exploran el maquillaje como una forma de juego o expresión; lo importante es que
          comprendan qué productos pueden usar y cuáles podrían dañar su piel.
        </p>
      </div>

      <div className="space-y-10">
        <GuideItem
          title="1. Escucha antes de corregir"
          illustration={
            <img
              src="ilustraciones/estrellabravar.png"
              alt="Muñeca azul"
              className="w-40 md:w-48 lg:w-56 object-contain animate-float"
            />
          }
          recommendation="Elige siempre fórmulas hipoalergénicas, sin fragancias fuertes, y evita productos con alcohol, metales o pigmentos artificiales intensos."
        >
          <p>Antes de decir "no te maquilles", pregunta "por qué te gusta maquillarte".</p>
          <p>Escuchar ayuda a entender si se trata de juego, curiosidad o influencia externa.</p>
          <p>El diálogo es la base del cuidado.</p>
        </GuideItem>

        <GuideItem
          title="2. Informa con ejemplos reales"
          illustration={
            <img
              src="ilustraciones/estrellaojoa.png"
              alt="Muñeca azul"
              className="w-40 md:w-48 lg:w-56 object-contain animate-float"
            />
          }
        >
          <p>
            Enséñale cómo funcionan los productos, qué ingredientes pueden irritar su piel y por qué la piel
            cambia con la edad.
          </p>
          <p>Usa frases simples como:</p>
          <blockquote className="pl-4 border-l-2 border-lilac italic">
            "Tu piel todavía está aprendiendo a protegerse solita."
          </blockquote>
          <blockquote className="pl-4 border-l-2 border-lilac italic">
            "Hay productos hechos para adultos que pueden ser muy fuertes para ti."
          </blockquote>
        </GuideItem>

        <GuideItem
          title="3. Refuerza su identidad, no su apariencia"
          illustration={
            <img
              src="ilustraciones/estrellafelizp.png"
              alt="Muñeca azul"
              className="w-40 md:w-48 lg:w-56 object-contain animate-float"
            />
          }
        >
          <p>
            Elogia su creatividad, sus pensamientos y su sentido del humor más que su apariencia física.
          </p>
          <p>
            El objetivo es que su valor no dependa de cómo se ve. En lugar de decir "te ves bonita", prueba con:
          </p>
          <blockquote className="pl-4 border-l-2 border-lilac italic">
            "Me encanta cómo resuelves problemas" o "Admiro tu forma de expresarte".
          </blockquote>
        </GuideItem>
      </div>
    </section>
  );
};

export default ParentsGuide;

