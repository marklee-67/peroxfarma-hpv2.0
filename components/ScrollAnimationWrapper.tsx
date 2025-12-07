import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animation?: 'fade-in-up' | 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
  delay?: number; // seconds
}

const ScrollAnimationWrapper: React.FC<Props> = ({ 
  children, 
  className = '', 
  style, 
  animation = 'fade-in-up',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve once visible to prevent re-animating when scrolling up/down
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes fully into view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      // Cleanup not strictly necessary as we unobserve on intersection, but good practice
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';
  const combinedStyle = { ...style, animationDelay: `${delay}s` };

  return (
    <div
      ref={elementRef}
      className={`${className} ${animationClass}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;