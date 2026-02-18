"use client";

import { motion, useAnimate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import BlurImage from "./BlurImage";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const GetInTouch = () => {
  const [scope, animate] = useAnimate();
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);

  return (
    <motion.div
      className="relative rounded-xl p-1 shadow-feature-card backdrop-blur-lg ring-border/20"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="hidden lg:block absolute bottom-0 -left-10/12 bg-primary w-80 h-72 rounded-full blur-[17rem] z-0"></div>

      <div className="flex flex-col gap-6 rounded-[11px] p-4 lg:p-6">
        <div className="flex gap-12 max-md:flex-col">
          <div className="relative size-64 max-md:mx-auto" ref={scope}>
            <BlurImage
              src={"/assets/me.jpg"}
              width={3975}
              height={3975}
              className="absolute top-1/3 left-1/3 size-20 -translate-1/2 rounded-[20px]"
              alt={"homepage.get-in-touch.image-alt"}
            />
            <div
              id="next-js"
              className="absolute bottom-12 left-14 rounded-3xl border bg-foreground/10 shadow-2xl ring-1 ring-border/40 from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              Next.js
            </div>
            <div
              id="react-js"
              className="absolute top-20 left-2 rounded-3xl border bg-foreground/10 shadow-2xl ring-1 ring-border/40 from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              React.js
            </div>
            <div
              id="typescript"
              className="absolute right-1 bottom-20 rounded-3xl border bg-foreground/10 shadow-2xl ring-1 ring-border/40 from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              TypeScript
            </div>
            <div
              id="javascript"
              className="absolute top-10 right-8 rounded-3xl border bg-foreground/10 shadow-2xl ring-1 ring-border/40 from-zinc-50 to-zinc-100 px-2 py-1.5 text-xs opacity-40 dark:from-zinc-800 dark:to-zinc-900"
            >
              JavaScript
            </div>

            <div id="pointer" className="absolute">
              <svg
                width="16.8"
                height="18.2"
                viewBox="0 0 12 13"
                className="fill-red-500"
                stroke="white"
                strokeWidth="1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                />
              </svg>
              <span className="relative left-4 rounded-3xl bg-red-500 px-2 py-0.5 text-xs text-white">
                Uuunay
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4">
            <p className="mb-2 bg-linear-to-r  bg-clip-text text-3xl font-semibold from-zinc-100 to-zinc-400">
              Any questions about Next.js?
            </p>
            <p className="text-zinc-300">Feel free to reach out to me!</p>
            <div className="my-8">
              <a
                href="mailto:yanusetiawan363@gmail.com"
                className="rounded-full bg-email-button px-1 py-2 text-sm text-white"
              >
                yanusetiawan363@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
