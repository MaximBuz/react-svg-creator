// https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element
import { useEffect, useRef, useState } from 'react';

interface ContainerSize {
  width: number;
  height: number;
}

type UseMeasureArgs = () => {
  ref: React.RefObject<HTMLDivElement>;
  size: ContainerSize;
  windowSize: ContainerSize;
};

const initSize: ContainerSize = { width: 0, height: 0 };

const useMeasure: UseMeasureArgs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<ContainerSize>(initSize);
  const [windowSize, setWindowSize] = useState<ContainerSize>(initSize);

  useEffect(() => {
    if (ref.current) {
      setSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
    }
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  return { ref, size, windowSize };
};

export default useMeasure;