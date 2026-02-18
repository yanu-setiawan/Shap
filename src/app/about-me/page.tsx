"use client";

import PageTitle from "@/components/hero/PageTitle";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const CustomLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white font-semibold underline decoration-zinc-500 hover:decoration-white transition-colors"
  >
    {children}
  </a>
);

const AboutMe = () => {
  const links = [
    { name: "GitHub", href: "https://github.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <section className="w-full relative flex  flex-col max-w-4xl mx-auto pt-10  px-4 md:px-0">
      <PageTitle
        title={"About Me"}
        description="Hi! I'm Yanu, a passionate web development student creating innovative projects with HTML, CSS, and JavaScript. Explore my portfolio, skills, and journey in building user-friendly apps. Let's connect!"
      />

      <div className="mt-3 mb-5 sm:mt-6">
        <motion.h1
          className="my-4 text-xlxl font-bold md:text-2xl"
          {...{
            initial: animation.hide,
            animate: animation.show,
          }}
        >
          Who am I
        </motion.h1>

        <motion.h2
          className="mb-5 text-muted-foreground whitespace-pre-line leading-relaxed"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Hi! I&apos;m a 22-year-old Frontend Engineer based in Indonesia with 3
          years of experience. My coding journey sparked during an intensive
          6-month bootcamp in 2023, which successfully launched my professional
          career in 2024.
          {"\n\n"}
          Today, I build robust applications using TypeScript, Next.js, React,
          Node.js, and database management, while constantly fueling my growing
          passion for UI/UX design.
          {"\n\n"}I love using{" "}
          <CustomLink href="https://nextjs.org">Next.js</CustomLink> to create a
          website. Then use{" "}
          <CustomLink href="https://github.com">GitHub</CustomLink> to host my
          codebase. After that, I use{" "}
          <CustomLink href="https://vercel.com">Vercel</CustomLink> to deploy my
          website. I&apos;m eager to connect with fellow developers, designers,
          and tech enthusiasts. Feel free to reach out for collaborations,
          discussions, or just to say hi!
        </motion.h2>
      </div>

      <div className="mb-10">
        <h3 className="text-white text-xl font-bold mb-4">Social links</h3>
        <ul className="space-y-3">
          {links.map((link) => (
            <li
              key={link.name}
              className="flex items-center text-zinc-400 group"
            >
              <span className="w-1 h-1 bg-zinc-500 rounded-full mr-3"></span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-500 underline-offset-4 hover:decoration-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white text-xl font-bold mb-4">Logo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f1e9e9] rounded-xl aspect-video flex items-center justify-center p-8">
            <Image
              src="/icons/icon.png"
              alt="✨"
              width={50}
              height={50}
              className="w-20 h-20"
            />
          </div>

          <div className="bg-black rounded-xl aspect-video flex items-center justify-center p-8">
            <Image
              src="/icons/icon.png"
              alt="✨"
              width={50}
              height={50}
              className="w-20 h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
