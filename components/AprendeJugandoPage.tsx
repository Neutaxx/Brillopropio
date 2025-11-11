import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { HappyStar, AngryStar } from './Illustrations';

type AnswerState = 'correct' | 'incorrect' | 'unanswered';

const quizQuestions = [
    {
        question: "Es mejor no usar protector solar si está nublado.",
        answer: false,
        feedback: "Incluso en los días nublados, los rayos UV llegan a tu piel."
    },
    {
        question: "Tu piel cambia con la edad y eso es completamente normal.",
        answer: true,
        feedback: "La piel crece contigo, igual que tú."
    },
    {
        question: "Puedo usar los mismos productos que mi mamá.",
        answer: false,
        feedback: "La piel adulta necesita ingredientes distintos. La tuya es más sensible."
    },
    {
        question: "El maquillaje puede ser una forma de expresión y diversión.",
        answer: true,
        feedback: "Lo importante es usarlo sin esconder quién eres."
    },
    {
        question: "No importa si me duermo maquillada de vez en cuando.",
        answer: false,
        feedback: "Dormir sin limpiar la piel puede tapar los poros y dañarla."
    },
    {
        question: "Mi piel necesita cuidados diferentes en cada etapa.",
        answer: true,
        feedback: "Cada edad tiene sus propias necesidades. ¡Aprenderlas te ayuda a cuidarte mejor!"
    },
];

const QuizQuestion: React.FC<{ question: string; answer: boolean; feedback: string; index: number }> = ({ question, answer, feedback, index }) => {
    const [selected, setSelected] = useState<boolean | null>(null);
    const [state, setState] = useState<AnswerState>('unanswered');
    const [ref, inView] = useInView({ triggerOnce: true });
    
    const handleAnswer = (userAnswer: boolean) => {
        setSelected(userAnswer);
        setState(userAnswer === answer ? 'correct' : 'incorrect');
    };

    const isAnswered = state !== 'unanswered';

    return (
        <div ref={ref} className={`p-6 rounded-xl bg-cream/60 border border-navy-blue/10 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
            <p className="text-lg font-semibold text-navy-blue mb-4">{index + 1}. {question}</p>
            <div className="flex space-x-4">
                <button
                    onClick={() => handleAnswer(true)}
                    disabled={isAnswered}
                    className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all duration-300 ${isAnswered && selected === true ? (state === 'correct' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800') : 'bg-white hover:bg-lilac/20'}`}
                >
                    Verdadero
                </button>
                <button
                    onClick={() => handleAnswer(false)}
                    disabled={isAnswered}
                    className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all duration-300 ${isAnswered && selected === false ? (state === 'correct' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800') : 'bg-white hover:bg-lilac/20'}`}
                >
                    Falso
                </button>
            </div>
            {isAnswered && (
                <div className={`mt-4 p-3 rounded-lg flex items-center transition-all duration-500 animate-fadeIn ${state === 'correct' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                   {state === 'correct' ? <HappyStar className="w-8 h-8 mr-3 text-green-600"/> : <AngryStar className="w-8 h-8 mr-3 text-red-600"/>}
                   <p><strong className="font-bold">{state === 'correct' ? '¡Correcto! ' : 'Falso. '}</strong>{feedback}</p>
                </div>
            )}
        </div>
    );
};

const InteractiveWorkshop: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: true });

    if(submitted) {
        return (
            <div className="text-center bg-lilac/10 p-10 rounded-2xl animate-fadeIn">
                 <HappyStar className="w-24 h-24 text-lilac mx-auto animate-float mb-4"/>
                 <h3 className="font-display text-4xl text-coral">¡Eres una luciente del cuidado!</h3>
                 <p className="mt-2 text-lg text-navy-blue">Gracias por aprender jugando.</p>
            </div>
        )
    }

    return (
        <div ref={ref} className={`transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="font-display text-5xl md:text-6xl text-coral text-center mb-4">Tu piel, tus ideas 💭</h2>
            <p className="text-center text-lg text-navy-blue mb-10 max-w-2xl mx-auto">
                Responde estas preguntas para reflexionar sobre lo que aprendiste y crear tu propio camino de cuidado.
            </p>
            <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-8 max-w-2xl mx-auto">
                 <div>
                    <label htmlFor="q1" className="block font-semibold text-navy-blue mb-2">1. ¿Qué significa para ti cuidar tu piel?</label>
                    <textarea id="q1" rows={3} className="form-input-custom" placeholder="Es una forma de quererme y sentirme bien."></textarea>
                </div>
                 <div>
                    <p className="block font-semibold text-navy-blue mb-2">2. Elige una acción que puedas hacer todos los días para cuidar tu piel:</p>
                    <select className="form-input-custom">
                        <option>Usar protector solar</option>
                        <option>Lavarme la cara</option>
                        <option>No compartir maquillaje</option>
                        <option>Revisar ingredientes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q3" className="block font-semibold text-navy-blue mb-2">3. Describe una forma en la que te gusta expresarte sin maquillaje:</label>
                    <textarea id="q3" rows={3} className="form-input-custom" placeholder="Cantando, dibujando, bailando, siendo yo misma…"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-coral text-white font-bold py-3 px-8 rounded-full text-lg font-body transition-transform duration-300 hover:scale-105 hover:bg-coral-dark">
                        Ver mis resultados
                    </button>
                </div>
            </form>
        </div>
    )
}

const AprendeJugandoPage: React.FC = () => {
    return (
        <section id="aprende-jugando" className="py-24">
            <div className="text-center mb-16">
                <h2 className="font-display text-6xl md:text-7xl text-coral">Aprende jugando ✨</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg">
                    Pon a prueba lo que sabes sobre el cuidado de la piel y descubre cuánto brillas con conocimiento.
                </p>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto mb-24">
                {quizQuestions.map((q, i) => (
                    <QuizQuestion key={i} index={i} {...q} />
                ))}
            </div>

            <InteractiveWorkshop />

        </section>
    );
};

export default AprendeJugandoPage;