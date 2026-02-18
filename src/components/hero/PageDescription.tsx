import { motion } from "motion/react";

type PageDescriptionProps = {
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

const PageDescription = (props: PageDescriptionProps) => {
  const { title, description, animate = true } = props;

  return (
    <div className="mt-3 mb-5 sm:mt-6">
      <motion.h1
        className="my-4 text-xlxl font-bold md:text-2xl"
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
        })}
      >
        {title}
      </motion.h1>

      <motion.h2
        className="mb-5 text-muted-foreground whitespace-pre-line"
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

export default PageDescription;
