import { AiFillThunderbolt } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="min-h-[115vh] bg-white">
      <div className="mx-[200px] mb-24">
        <motion.p
          className="bg-[#EAE9FE] text-[#5D3AEA] inline-block p-1 px-2 rounded-full text-sm font-semibold mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          WHAT YOU'LL LEARN
        </motion.p>
        <motion.h2
          className="text-4xl font-semibold text-[#0D0D17] mt-5 max-w-xl leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={itemVariants}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Master the Essentials of{" "}
          <span className="text-[#5D3AEA]">Creative Design</span>
        </motion.h2>
        <motion.p
          className="text-gray-500 mt-4 text-md max-w-xl opacity-90"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={itemVariants}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Gain expertise in design, explore processes, and effortlessly apply
          best practices to create stunning, user-friendly interfaces.
        </motion.p>
        <motion.div
          className="mt-16 flex gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col"
            variants={itemVariants}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <FaBook className="w-12 h-12 text-[#5D3AEA] border-2 p-3 mb-8 rounded-lg shadow-md" />
            <h3 className="text-[20px] font-medium text-[#0D0D17]">
              Best practices for creating a user-friendly product
            </h3>
            <p className="text-gray-500 mt-4 text-md max-w-xl opacity-90">
              Discover proven techniques for crafting intuitive and engaging
              products.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col "
            variants={itemVariants}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <FiTv className="w-12 h-12 text-[#5D3AEA] border-2 p-3 mb-8 rounded-lg shadow-md" />
            <h3 className="text-[20px] font-medium text-[#0D0D17]">
              Delve into the design process from concept to execution
            </h3>
            <p className="text-gray-500 mt-4 text-md max-w-xl opacity-90">
              Explore every stage of the journey, from brainstorming creative
              concepts to bringing them to life.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col "
            variants={itemVariants}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <AiFillThunderbolt className="w-12 h-12 text-[#5D3AEA] border-2 p-3 mb-8 rounded-lg shadow-md" />
            <h3 className="text-[20px] font-medium text-[#0D0D17]">
              Acquire essential knowledge and industry insights
            </h3>
            <p className="text-gray-500 mt-4 text-md max-w-xl opacity-90">
              Acquire essential insights to begin your design journey,
              empowering you to navigate the industry landscape effectively.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
