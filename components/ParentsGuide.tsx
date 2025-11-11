import React from 'react';
import { useInView } from '../hooks/useInView';
import { AngryStar, WinkingStar, HappyStar } from './Illustrations';

const GuideItem = ({ title, recommendation, children, illustration, reverse = false }: { title: string; recommendation?: string; children?: React.ReactNode; illustration: React.ReactNode; reverse?: boolean; }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    
    return (
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center py-12 border-b border-navy-blue/10">
            <div className={`md:order-${reverse ? '2' : '1'} transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="font-display text-4xl text-navy-blue mb-4">{title}</h3>
                <div className="text-navy-blue space-y-3 leading-relaxed">
                    {children}
                </div>
                {recommendation && (
                    <p className="mt-4 text-navy-blue"><strong className="font-semibold">Recomendación:</strong> {recommendation}</p>
                )}
            </div>
            <div className={`md:order-${reverse ? '1' : '2'} flex justify-center group transition-all duration-1000 delay-200 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                    {illustration}
                </div>
            </div>
        </div>
    );
};

const ParentsGuide: React.FC = () => {
  return (
    <section id="guia-padres" className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-6xl md:text-7xl text-coral">Entender antes de prohibir</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          No se trata de decir "no te maquilles", sino de enseñar a decidir con conciencia. A esta edad, muchas niñas exploran el maquillaje como una forma de juego o expresión; lo importante es que comprendan qué productos pueden usar y cuáles podrían dañar su piel.
        </p>
      </div>

      <div className="space-y-8">
        <GuideItem 
            title="1. Escucha antes de corregir"
            illustration={<AngryStar className="w-52 h-52"/>}
            recommendation="Elige siempre fórmulas hipoalergénicas, sin fragancias fuertes, y evita productos con alcohol, metales o pigmentos artificiales intensos."
        >
            <p>Antes de decir "no te maquilles", pregunta "por qué te gusta maquillarte".</p>
            <p>Escuchar ayuda a entender si se trata de juego, curiosidad o influencia externa.</p>
            <p>El diálogo es la base del cuidado.</p>
        </GuideItem>
        
        <GuideItem 
            title="2. Informa con ejemplos reales"
            illustration={<WinkingStar className="w-52 h-52"/>}
            reverse
        >
            <p>Enséñale cómo funcionan los productos, qué ingredientes pueden irritar su piel y por qué la piel cambia con la edad.</p>
            <p>Usa frases simples como:</p>
            <blockquote className="pl-4 border-l-2 border-lilac italic">"Tu piel todavía está aprendiendo a protegerse solita."</blockquote>
            <blockquote className="pl-4 border-l-2 border-lilac italic">"Hay productos hechos para adultos que pueden ser muy fuertes para ti."</blockquote>
        </GuideItem>

        <GuideItem 
            title="3. Refuerza su identidad, no su apariencia"
            illustration={<HappyStar className="w-52 h-52"/>}
        >
            <p>Elogia su creatividad, sus pensamientos y su sentido del humor más que su apariencia física.</p>
            <p>El objetivo es que su valor no dependa de cómo se ve. En lugar de decir "te ves bonita", prueba con:</p>
            <blockquote className="pl-4 border-l-2 border-lilac italic">"Me encanta cómo resuelves problemas" o "Admiro tu forma de expresarte".</blockquote>
        </GuideItem>
      </div>
    </section>
  );
};

export default ParentsGuide;