import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => {
        const next = [...prev, { x: e.clientX, y: e.clientY, t: Date.now() }];
        return next.slice(-8);
      });
    };

    const onOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("[role='button']")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      {trail.map((p, i) => {
        const age = Date.now() - p.t;
        const opacity = Math.max(0, 1 - age / 800);
        const size = Math.max(2, 6 - age / 200);
        return (
          <span
            key={i}
            className="fixed pointer-events-none rounded-full bg-[#E6E6FA]"
            style={{
              left: p.x - size / 2,
              top: p.y - size / 2,
              width: size,
              height: size,
              opacity,
              transition: "opacity 0.3s",
              zIndex: 9999,
            }}
          />
        );
      })}
      <span
        className="fixed pointer-events-none rounded-full bg-[#E6E6FA] z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: position.x - (isHovered ? 10 : 5),
          top: position.y - (isHovered ? 10 : 5),
          width: isHovered ? 20 : 10,
          height: isHovered ? 20 : 10,
          opacity: 0.7,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
    </>
  );
}