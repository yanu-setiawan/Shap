"use client";

import PageTitle from "@/components/hero/PageTitle";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full mx-auto relative">
      <PageTitle
        title="Blog"
        description="Insights, stories, and updates from my journey in software development and technology."
      />
    </div>
  );
};

export default BlogPage;
