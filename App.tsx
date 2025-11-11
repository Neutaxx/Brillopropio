import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ParentsGuide from './components/ParentsGuide';
import SkinStages from './components/SkinStages';
import RecommendationsPage from './components/RecommendationsPage';
import AprendeJugandoPage from './components/AprendeJugandoPage';
import BlogPage from './components/BlogPage'; // New page

export type Page = 'inicio' | 'guia-padres' | 'etapas' | 'recomendaciones' | 'aprende-jugando' | 'blog';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('inicio');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNavigate = (newPage: Page) => {
        if (newPage === page || isTransitioning) return;

        setIsTransitioning(true);
        setTimeout(() => {
            setPage(newPage);
            window.scrollTo(0, 0);
            // Wait for new page to render, then start fade-in
            setTimeout(() => {
              setIsTransitioning(false);
            }, 50);
        }, 300); // Corresponds to fade-out duration
    };

    const renderPage = () => {
        switch (page) {
            case 'inicio': return <HomePage />;
            case 'guia-padres': return <ParentsGuide />;
            case 'etapas': return <SkinStages />;
            case 'recomendaciones': return <RecommendationsPage />;
            case 'aprende-jugando': return <AprendeJugandoPage />;
            case 'blog': return <BlogPage />;
            default: return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen">
            <Header currentPage={page} onNavigate={handleNavigate} />
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <main className="max-w-5xl mx-auto px-6 sm:px-8 animate-fadeIn">
                    {renderPage()}
                </main>
            </div>
            <footer className="text-center py-8 text-navy-blue/60 text-sm">
                <p>&copy; {new Date().getFullYear()} Crecer con brillo propio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default App;