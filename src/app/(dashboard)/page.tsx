"use client";

import { Container, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import Hero from "@/components/hero";
import GetInTouch from "@/components/hero/GetInTouch";
import BlurImage from "@/components/hero/BlurImage";
import { webDesigns } from "@/constants";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <section className="w-full relative flex  flex-col items-center justify-center px-4 md:px-0">
      <Wrapper>
        <div className="absolute inset-0  bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="flex flex-col items-center mt-28  m-auto md:w-full">
              <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                <span>
                  <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                  <Image
                    src="/icons/sparkles-dark.svg"
                    alt="✨"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                  Welcome !
                </span>
              </button>
              <Hero />

              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                <Link
                  href="#"
                  className="flex items-center justify-center w-max  select-none"
                >
                  <p className="text-foreground text-sm text-center md:text-2xl font-medium pr-4 lg:pr-0">
                    Projects!
                  </p>
                </Link>
              </div>
            </div>

            <div className="max-w-4xl relative grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mx-auto py-10 md:py-15 w-full ">
              <div className=" absolute top-1/2 left-1/2 -z-10 gradient-dark w-4/5  opacity-40 -translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]"></div>
              {webDesigns.slice(0, 4).map((design) => (
                <div
                  key={design.id}
                  className=" cursor-pointer flex flex-col items-center justify-center rounded-xl p-4 ring-1 ring-inset ring-foreground/20 lg:p-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl relative overflow-hidden hover:ring-foreground/40 hover:bg-opacity-10 hover:bg-white transition-all duration-250 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                  onClick={() => router.push(`/projects/${design.slug}`)}
                >
                  {/* <div className="hidden hover:block"> */}
                  <BorderBeam size={250} duration={12} delay={9} />
                  {/* </div> */}
                  <div className="relative w-full h-[200px] rounded-md lg:rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 shadow-2xl ring-1 ring-border/40 flex items-center justify-center mb-4">
                    <BlurImage
                      src={design.image || ""}
                      width={3975}
                      height={3975}
                      className="w-full h-full object-cover"
                      alt={"homepage.get-in-touch.image-alt"}
                      imageClassName="h-auto lg:min-h-[210px] rounded-md lg:rounded-xl"
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
            <SectionBadge
              title="See All Projects"
              onClick={() => router.push("/projects")}
            />
          </div>
        </Container>
      </Wrapper>

      {/* Newsletter */}

      <Container>
        <div className="pt-10">
          <GetInTouch />
        </div>
      </Container>
      <Wrapper className="flex flex-col items-center justify-center py-12">
        <Container className="">
          <div className="flex items-center justify-center w-full ">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Be up to date with everything about ai builder
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs "
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs lg:mx-auto text-muted-foreground">
                  By subscribe you agree with our
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
