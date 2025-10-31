import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import type { RoughAnnotation } from 'rough-notation/lib/model';

type AnnotationAction = 'highlight' | 'underline' | 'box' | 'circle' | 'strike-through' | 'crossed-off' | 'bracket';

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean; // jika true, baru muncul saat terlihat
}

export function Highlighter({ children, action = 'highlight', color = '#ffd1dc', strokeWidth = 1.5, animationDuration = 600, iterations = 2, padding = 2, multiline = true, isView = false }: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const showAnnotation = () => {
      if (!element) return;
      const annotation = annotate(element, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      });
      annotationRef.current = annotation;
      annotation.show();
    };

    if (isView) {
      // pakai IntersectionObserver untuk animasi saat scroll
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              showAnnotation();
              obs.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
      return () => observer.disconnect();
    } else {
      // langsung tampil
      showAnnotation();
    }
  }, [action, color, strokeWidth, animationDuration, iterations, padding, multiline, isView]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
