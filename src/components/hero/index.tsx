"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import BlurImage from "./BlurImage";

type Word = { text: string; className: string };

const WORDS: ReadonlyArray<Word> = [
  {
    text: "Amazing",
    className:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]",
  },
  {
    text: "Stunning",
    className:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]",
  },
  {
    text: "Fantastic",
    className:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]",
  },
  {
    text: "Attractive",
    className:
      "bg-clip-text text-transparent bg-gradient-to-r from-[#2ecc70] to-[#1ca085]",
  },
] as const;

const SPEED_SEC = 2;

const variants = {
  enter: { y: 100, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      SPEED_SEC * 1000,
    );
    return () => clearInterval(id);
  }, []);

  const word = WORDS[index];

  return (
    <div className="my-16 space-y-6 relative w-full max-w-4xl pt-2">
      {/* subtle background glow like the example */}
      <div className="pointer-events-none absolute -inset-x-10 -top-20 h-64 -z-10 bg-gradient-to-tr from-purple-900/15 via-fuchsia-900/5 to-orange-800/10 blur-3xl" />

      <div className="flex justify-between gap-5 w-full pr-4">
        {/* Left side text */}
        <div className="flex flex-col gap-4 pl-6">
          <h1 className="flex flex-col gap-2 text-3xl sm:text-3xl md:text-3xl font-extrabold tracking-tight leading-tight">
            {/* line 1 */}
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
            >
              I&apos;m Yanu Setiawan, a Frontend Engineer
            </motion.span>

            {/* line 2 */}
            <motion.span
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className="flex flex-wrap items-baseline gap-2"
            >
              <span>building</span>

              {/* rotating word */}
              <span className="relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    layout
                    transition={{ type: "tween", duration: 0.3 }}
                    className="inline-flex items-center justify-center"
                  >
                    <span className={word.className}>{word.text}</span>
                  </motion.span>
                </AnimatePresence>
              </span>

              <span>websites using React</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut" }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            Jakarta, Indonesia • UTC/GMT +7
          </motion.p>
        </div>

        {/* Right avatar */}
        <motion.div
          className="relative hidden size-28 md:block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="justify-center items-center rounded-full">
            <BlurImage
              src="/icons/icon.png"
              className="rounded-full"
              width={112}
              height={112}
              alt="Yanu Setiawan"
              lazy={false}
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-[#000] to-cyan-950 opacity-35 blur-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
