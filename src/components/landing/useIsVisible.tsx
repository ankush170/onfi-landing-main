import React,{ useEffect, useState } from "react";

export function useIsVisible(ref:React.MutableRefObject<HTMLDivElement | null>) {
    const [isIntersecting, setIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIntersecting(true);
            setHasIntersected(true); // Prevent future updates
            observer.disconnect(); // Stop observing once it has intersected
        }
      });
      
      observer.observe(ref.current as HTMLDivElement);
      return () => {
        observer.disconnect();
      };
    }, [ref,hasIntersected]);
  
    return isIntersecting;
  }