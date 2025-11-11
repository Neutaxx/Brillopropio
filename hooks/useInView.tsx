import { useState, useEffect, useRef, MutableRefObject } from 'react';

// Fix: Define a custom options type that extends IntersectionObserverInit to allow for the 'triggerOnce' property.
interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useInView = (options?: UseInViewOptions): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Fix: Destructure custom properties from the options object to avoid passing them to IntersectionObserver.
    const { triggerOnce, ...observerOptions } = options || {};
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.1, ...observerOptions }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isInView];
};
