import { useEffect } from 'react';

/**
 * Custom hook that observes `.reveal` elements and adds `.revealed`
 * when they enter the viewport. Supports staggered children via
 * `data-delay` attributes. Once revealed, elements stay visible.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => {
              el.classList.add('revealed');
            }, Number(delay));
            observer.unobserve(el); // only reveal once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Small delay to ensure DOM is painted before observing
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;
