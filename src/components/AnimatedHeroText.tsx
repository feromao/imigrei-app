import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

export default function AnimatedHeroText() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["na Irlanda", "nos EUA", "em Malta", "no mundo todo"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="leading-[56px] text-2xl sm:text-3xl lg:text-[36px] text-[24px]">
      <span className="text-white text-[36px]">
        Encontre negócios brasileiros
        <br aria-hidden="true" />
      </span>
      <span className="relative flex w-full justify-center overflow-hidden text-center min-h-[1.4em] text-[36px]">
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute font-semibold tracking-[0.45px] text-[#b0ff0b] whitespace-nowrap"
            initial={{ opacity: 0, y: 100 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              damping: 15,
              duration: 0.6
            }}
            animate={
              titleNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: titleNumber > index ? -100 : 100,
                    opacity: 0,
                  }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>
    </div>
  );
}