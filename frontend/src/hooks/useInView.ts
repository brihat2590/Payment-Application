import { useState, useEffect, RefObject } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  elementRef: RefObject<Element>,
  options: IntersectionOptions = { threshold: 0 }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: options.threshold || 0, 
        rootMargin: options.rootMargin || '0px' 
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options.threshold, options.rootMargin]);

  return isInView;
}