import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

interface PostComment {
  author: string;
  text: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  color: 'lilac' | 'navy-blue' | 'coral';
  comments: PostComment[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Mi hija y su primer brillo labial',
    author: 'María Fernanda, mamá de Sofía (10 años)',
    content:
      'Al principio dudé en dejarla usar maquillaje, pero descubrí que más que vanidad, era curiosidad. Ahora usamos este momento para hablar del cuidado y la autoestima.',
    color: 'lilac',
    comments: [
      { author: 'Laura G.', text: 'Qué bonito leer esto. A mí me pasó igual con mi hija.' },
      { author: 'Ana R.', text: 'Me encantó la idea de hablar sobre autoestima mientras se maquillan.' },
    ],
  },
  {
    id: 2,
    title: 'Aprender juntos',
    author: 'Carlos A.',
    content:
      'Mi hijo menor también quiso probar crema hidratante y al principio me sorprendió. Pero entendí que cuidar la piel no tiene género. Ahora todos tenemos nuestra rutina.',
    color: 'navy-blue',
    comments: [{ author: 'Diana L.', text: 'Totalmente cierto, todos debemos cuidar nuestra piel.' }],
  },
  {
    id: 3,
    title: 'Redes sociales y presión',
    author: 'Patricia R.',
    content:
      'Mi hija de 12 empezó a compararse con lo que ve en redes. Este espacio me ayudó a entender cómo hablar del tema desde la confianza.',
    color: 'coral',
    comments: [{ author: 'Juli M.', text: 'Gracias por compartir, me siento muy identificada.' }],
  },
];

const PostCard: React.FC<{ post: Post; index: number }> = ({ post, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const colorVariants = {
    lilac: 'border-lilac/50',
    'navy-blue': 'border-navy-blue/50',
    coral: 'border-coral/50',
  };

  return (
    <div
      ref={ref}
      className={`bg-white/80 backdrop-blur-md p-8 rounded-3xl border-2 ${
        colorVariants[post.color]
      } shadow-md transition-all duration-700 ease-out group hover:shadow-xl hover:scale-[1.02] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-display text-3xl text-coral-dark mb-2">{post.title}</h3>
      <p className="text-sm text-navy-blue/70 font-semibold mb-4">Por: {post.author}</p>
      <p className="text-navy-blue mb-6">{post.content}</p>
      <div>
        <h4 className="font-bold text-navy-blue/80 mb-3">Comentarios:</h4>
        <div className="space-y-3">
          {post.comments.map((comment, i) => (
            <div key={i} className="bg-white/90 p-3 rounded-lg text-sm shadow-sm">
              <p className="text-navy-blue">"{comment.text}"</p>
              <p className="text-right text-navy-blue/60 font-medium mt-1">- {comment.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Ilustraciones flotantes decorativas
const FloatingIllustration = ({
  src,
  className,
  delay,
}: {
  src: string;
  className: string;
  delay?: string;
}) => (
  <img
    src={src}
    alt="ilustración decorativa"
    className={`absolute opacity-45 -z-10 pointer-events-none animate-float ${className}`}
    style={delay ? { animationDelay: delay } : undefined}
  />
);

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [authorName, setAuthorName] = useState('');

  const decorativeImages = [
    'ilustraciones/Munnecaazul.png',
    'ilustraciones/Munecaazul3.png',
    'ilustraciones/Munecaazul4.png',
    'ilustraciones/puntoa.png',
    'ilustraciones/puntor.png',
    'ilustraciones/puntom.png',
  ];

  const randomImage = () =>
    decorativeImages[Math.floor(Math.random() * decorativeImages.length)];

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      title: 'Una nueva reflexión',
      author: authorName.trim() || 'Visitante',
      content: newPostContent,
      color: 'coral',
      comments: [],
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setNewPostContent('');
    setAuthorName('');
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Ilustraciones decorativas */}
      <FloatingIllustration
        src="ilustraciones/Munnecaazul.png"
        className="w-40 h-40 top-16 left-6"
        delay="1s"
      />
      <FloatingIllustration
        src="ilustraciones/Munecaazul3.png"
        className="w-32 h-32 bottom-20 right-10"
        delay="2s"
      />
      <FloatingIllustration src={randomImage()} className="w-24 h-24 top-1/2 left-4" />
      <FloatingIllustration src={randomImage()} className="w-20 h-20 top-1/3 right-4" />
      <FloatingIllustration src={randomImage()} className="w-20 h-20 bottom-8 left-1/3" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="font-display text-6xl md:text-7xl text-coral">Blog de familias 💬</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg italic text-navy-blue">
          Un espacio para compartir aprendizajes, dudas y experiencias sobre acompañar a nuestras hijas en su
          relación con el cuidado y la belleza.
        </p>
      </div>

      {/* New Post Form */}
      <div className="max-w-3xl mx-auto mb-16 bg-white/85 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-lilac/40 relative z-10">
        <h3 className="font-display text-4xl text-navy-blue mb-4 text-center">
          Comparte tu experiencia
        </h3>
        <form onSubmit={handlePublish} className="space-y-4">
          <textarea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            rows={4}
            className="form-input-custom"
            placeholder="Escribe tu historia o reflexión aquí…"
          />
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="form-input-custom"
            placeholder="Tu nombre (opcional)"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-coral text-white font-bold py-3 px-8 rounded-full text-lg font-body transition-transform duration-300 hover:scale-105 hover:bg-coral-dark disabled:bg-coral/50"
              disabled={!newPostContent.trim()}
            >
              Publicar reflexión
            </button>
          </div>
        </form>
      </div>

      {/* Posts */}
      <div className="space-y-12 max-w-3xl mx-auto relative z-10">
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;

