"use client";
import { motion } from "framer-motion";

type PageTitleProps = {
  title: string;
  description: string;
  animate?: boolean;
};

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

const PageTitle = (props: PageTitleProps) => {
  const { title, description, animate = true } = props;

  return (
    <div className="mt-6 mb-8 sm:mt-12 ">
      <motion.h1
        className="my-4 text-3xl font-bold md:text-4xl"
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
        })}
      >
        {title}
      </motion.h1>
      <motion.h2
        className="mb-5 text-muted-foreground"
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
          transition: {
            delay: 0.1,
          },
        })}
      >
        {description}
      </motion.h2>
    </div>
  );
};

export default PageTitle;
