import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props{
  finalNumber: number
}

const ScrollNumberAnimation = ({ finalNumber }: Props) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    let start = 0;
    let end = finalNumber;
    let duration = 1500; // Animation duration in milliseconds

    if (inView) {
      const stepTime = Math.abs(Math.floor(duration / (end - start)));

      const timer = setInterval(() => {
        start++;
        setCount(start);

        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [inView, finalNumber]);

  return (
    <div className='number-animation' ref={ref}>
      {count}
    </div>
  );
};

export default ScrollNumberAnimation;
