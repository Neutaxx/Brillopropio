import React from 'react';
import { useInView } from '../hooks/useInView';

interface StageCardProps {
  age: string;
  title: string;
  whatHappens: string;
  careTips: string[];
  funFact: string;
  illustrationSrc: string;
  backgroundImage?: string;
  delay?: number;
}

const StageCard: React.FC<StageCardProps> = ({
  age,
  title,
  whatHappens,
  careTips,
  funFact,
  illustrationSrc,
  backgroundImage,
  delay = 0,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`bg-cream p-8 rounded-2xl transition-all duration-700 ease-out group hover:shadow-xl hover:scale-[1.02] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: '220px auto',
      }}
    >
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Ilustración (más grande) */}
        <div className="flex flex-col items-center text-center md:col-span-1">
          <img
            src={illustrationSrc}
            alt={age}
            className="w-44 h-44 md:w-56 md:h-56 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Texto */}
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl md:text-4xl text-coral">{age}</h3>
          <h4 className="font-body font-bold text-2xl text-coral-dark mb-4">{title}</h4>

          <div className="space-y-4 text-navy-blue">
            <div>
              <p className="font-semibold">Qué pasa:</p>
              <p>{whatHappens}</p>
            </div>
            <div>
              <p className="font-semibold">Cuidados clave:</p>
              <ul className="list-disc list-inside space-y-1">
                {careTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Dato curioso:</p>
              <p>{funFact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkinStages: React.FC = () => {
  const backgroundOptions = [
    '/ilustraciones/rayon2r.png',
    '/ilustraciones/rayon2a.png',
    '/ilustraciones/rayon2p.png',
  ];

  const getRandomBackground = () =>
    backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)];

  return (
    <section id="etapas" className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-6xl md:text-7xl text-coral">Aprende cómo cambia contigo</h2>
        <h3 className="font-display text-4xl md:text-5xl text-coral-dark">
          y qué necesita en cada etapa
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Tu piel no es igual todos los días ni todos los años. Crece contigo, cambia cuando creces, y
          necesita diferentes cuidados según tu edad. Aquí puedes conocer qué pasa en tu piel y cómo cuidarla
          según tu momento.
        </p>
      </div>

      <div className="space-y-8">
        <StageCard
          age="8 a 10 años"
          title="Piel curiosa y en crecimiento"
          whatHappens="Tu piel todavía es muy fina y sensible. Los poros son pequeños y la barrera protectora está desarrollándose."
          careTips={[
            'Lava tu rostro con agua y un jabón muy suave (una vez al día está bien).',
            'Usa protector solar todos los días, incluso si está nublado.',
            'Evita maquillajes o cremas con perfume o colores fuertes.',
            'Si quieres "jugar a maquillarte", usa productos de agua o labiales naturales.',
          ]}
          funFact="A esta edad, tu piel produce menos grasa. Por eso, se irrita o reseca fácil si usas productos para adultos."
          illustrationSrc="/ilustraciones/Munnecaazul.png"
          backgroundImage={getRandomBackground()}
          delay={0}
        />

        <StageCard
          age="11 a 12 años"
          title="Piel en cambio"
          whatHappens="Tu cuerpo comienza a cambiar. Aparecen las primeras hormonas que pueden generar un poco de brillo o granitos."
          careTips={[
            'Limpia tu piel con un gel suave, sin alcohol.',
            'Usa una crema hidratante liviana (tipo gel o aloe vera).',
            'Evita cubrir los granitos con base o polvo, eso puede tapar los poros.',
            '¡No exprimas los granitos! Déjalos sanar con paciencia.',
          ]}
          funFact="La piel se renueva sola cada 28 días. Si la dejas respirar, se ve más sana y luminosa."
          illustrationSrc="/ilustraciones/Munecaazul3.png"
          backgroundImage={getRandomBackground()}
          delay={200}
        />

        <StageCard
          age="13 a 14 años"
          title="Piel activa y expresiva"
          whatHappens="Tu piel ya tiene más actividad: puede ser grasa, seca o mixta. A veces aparece acné o puntos negros, y es normal."
          careTips={[
            'Lava tu rostro dos veces al día, mañana y noche.',
            'Usa protector solar y productos "no comedogénicos" (que no tapan poros).',
            'Si usas maquillaje, desmaquíllate siempre antes de dormir.',
            'Evita productos con alcohol o fragancias fuertes.',
          ]}
          funFact="A esta edad, el exceso de maquillaje puede envejecer la piel más rápido."
          illustrationSrc="/ilustraciones/Munecaazul4.png"
          backgroundImage={getRandomBackground()}
          delay={400}
        />
      </div>
    </section>
  );
};

export default SkinStages;


