import { useEffect, useState } from "react";

const useTypewriter = (text, speed = 42, startDelay = 800) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOutput(text);
      return;
    }
    let i = 0;
    let tick;
    const timeout = setTimeout(() => {
      tick = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(tick);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(tick);
    };
  }, [text, speed, startDelay]);

  return output;
};

export default useTypewriter;
