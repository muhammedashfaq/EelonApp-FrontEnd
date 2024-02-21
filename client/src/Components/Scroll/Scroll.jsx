import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Scroll = () => {
    const { pathname } = useLocation();
    const scrollRef = useRef();
  
    useEffect(() => {
      if (scrollRef.current) {
        scroll.scrollToTop({
          smooth: true,
          container: scrollRef.current,
        });
      }
    }, [pathname]);
  
    return <div ref={scrollRef} />;
  };

export default Scroll