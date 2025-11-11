import React from 'react';
import { useInView } from '../hooks/useInView';

const RecommendationBlock = ({ title, items, delay = 0, children }: { title: string, items?: string[], delay?: number, children?: React.ReactNode }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <div ref={ref} className={`bg-cream/50 p-8 rounded-2xl border border-navy-blue/10 shadow-sm transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms`}}>
            <h3 className="font-display text-4xl text-coral mb-6">{title}</h3>
            {items && (
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start group transition-colors duration-300 p-2 -ml-2 rounded-lg hover:bg-lilac/10">
                            <span className="text-lilac text-2xl mr-4 mt-1 transition-transform duration-300 group-hover:scale-125">✦</span>
                            <p className="text-navy-blue text-lg">{item}</p>
                        </li>
                    ))}
                </ul>
            )}
            {children}
        </div>
    );
}

const PhraseChip = ({ text, delay = 0 }: { text: string, delay: number }) => {
     const [ref, inView] = useInView({ triggerOnce: true });
     return (
        <div ref={ref} className={`bg-lilac/10 text-navy-blue p-4 rounded-full text-center font-semibold transition-all duration-500 hover:bg-lilac/20 hover:shadow-md transform hover:-translate-y-1 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{transitionDelay: `${delay}ms`}}>
            {text}
        </div>
     )
}


const RecommendationsPage: React.FC = () => {
    return (
        <section id="recomendaciones" className="py-24 relative overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="font-display text-6xl md:text-7xl text-coral">Recomendaciones para un brillo sano</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg">
                    Tips simples y amorosos para acompañar a las niñas desde el cuidado y la información, no desde el miedo o la prohibición.
                </p>
            </div>
            
            <div className="space-y-12 max-w-4xl mx-auto">
                <RecommendationBlock 
                    title="Para las niñas"
                    items={[
                        "Juega con el maquillaje como forma de expresión, no para esconderte.",
                        "Lava tu cara antes de dormir y usa protector solar todos los días.",
                        "Si algo te irrita o arde, no lo uses más.",
                        "Recuerda: tu piel también está aprendiendo contigo."
                    ]}
                    delay={100}
                />
                 <RecommendationBlock 
                    title="Para los papás y mamás"
                    items={[
                        "Escucha antes de prohibir.",
                        "Habla con ellas sobre lo que ven en redes sociales.",
                        "Revisa etiquetas juntos y enséñales a leer ingredientes.",
                        "Elogia su creatividad más que su apariencia."
                    ]}
                    delay={200}
                />
                 <RecommendationBlock 
                    title="Sobre los productos"
                    items={[
                        "Usa productos hipoalergénicos y sin fragancias fuertes.",
                        "Evita fórmulas con alcohol, metales o pigmentos intensos.",
                        "No uses productos de adultos en piel muy joven.",
                        "Prefiere siempre protección solar antes que maquillaje."
                    ]}
                    delay={300}
                />
                <RecommendationBlock 
                    title="Frases que ayudan"
                    delay={400}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <PhraseChip text="Tu piel está aprendiendo contigo." delay={400} />
                        <PhraseChip text="Lo más bonito de ti no está en el espejo." delay={500} />
                        <PhraseChip text="Me encanta cómo piensas." delay={600} />
                        <PhraseChip text="Brillar no es verse perfecta, es sentirse bien." delay={700} />
                    </div>
                </RecommendationBlock>
            </div>
        </section>
    );
};

export default RecommendationsPage;