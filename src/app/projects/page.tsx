"use client";

import PageTitle from "@/components/hero/PageTitle";
import React from "react";
import Image from "next/image";
import { webDesigns } from "@/constants";
import BlurImage from "@/components/hero/BlurImage";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  return (
    <section className="w-full relative flex  flex-col max-w-4xl mx-auto pt-10  px-4 md:px-0">
      <Image
        src="/icons/gradient.png"
        alt="Gradient Background"
        width={100}
        height={100}
        className="hidden lg:block absolute -top-72  w-full h-[50%] "
      />

      <PageTitle
        title={"Projects"}
        description="Explore my portfolio of innovative web development projects. "
      />

      <div className="max-w-4xl relative grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mx-auto py-10 md:py-15 w-full ">
        <div className=" absolute top-1/2 left-1/2 -z-10 gradient-dark w-4/5  opacity-40 -translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]"></div>
        {webDesigns.map((design) => (
          <div
            key={design.id}
            onClick={() => router.push(`/projects/${design.slug}`)}
            className=" cursor-pointer flex flex-col items-center justify-center rounded-xl p-4 ring-1 ring-inset ring-foreground/20 lg:p-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl relative overflow-hidden hover:ring-foreground/40 hover:bg-opacity-10 hover:bg-white transition-all duration-250 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
          >
            {/* <div className="hidden hover:block"> */}
            {/* </div> */}
            <div className="relative w-full h-[200px] rounded-md lg:rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 shadow-2xl ring-1 ring-border/40 flex items-center justify-center mb-4">
              <BlurImage
                src={design.image || ""}
                width={3975}
                height={3975}
                className="w-full h-full object-cover"
                alt={"homepage.get-in-touch.image-alt"}
                imageClassName="min-h-[210px] rounded-md lg:rounded-xl"
              />
            </div>

            <div className="w-full">
              <div className="w-full flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white min-h-14">
                  {design.title}
                </h3>
                <span className="text-sm opacity-80 min-w-max">
                  {design.date}
                </span>
              </div>
              <div className=" flex items-center gap-1 my-2">
                {design?.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                {design.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
