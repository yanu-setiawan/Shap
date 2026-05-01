import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { webDesigns } from "@/constants";
import { notFound } from "next/navigation";
import PageTitle from "@/components/hero/PageTitle";
import { BorderBeam } from "@/components/ui/border-beam";
import BlurImage from "@/components/hero/BlurImage";
import Link from "next/link";

export async function generateStaticParams() {
  return webDesigns.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  const project = webDesigns.find((d) => d.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full relative flex flex-col max-w-4xl mx-auto pt-10 px-4 md:px-0 mb-20">
      <Image
        src="/icons/gradient.png"
        alt="Gradient Background"
        width={100}
        height={100}
        className="hidden lg:block absolute -top-72  w-full h-[75%]"
      />

      <PageTitle title={project.title} description={project.description} />

      <div className="pt-4 mb-10 flex flex-col gap-3">
        <Link
          href={project.url}
          target="_blank"
          className="flex cursor-pointer backdrop-blur-md bg-white/10 items-center border border-gray-300/60 rounded-full w-max gap-2 px-4 py-2 text-white font-semibold  hover:bg-white/20 transition-all"
        >
          <Globe size={18} /> Live Demo
        </Link>
      </div>

      <div className="relative rounded-xl lg:rounded-2xl overflow-hidden ring-1 ring-foreground/20 mb-10 shadow-2xl">
        <BlurImage
          src={project.image || ""}
          width={768}
          height={432}
          className="w-full h-full object-cover"
          alt={project.title}
          imageClassName="w-full h-[432px] object-cover"
        />
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            About the Project
          </h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
