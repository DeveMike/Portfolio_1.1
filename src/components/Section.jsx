import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
    <motion.h2
      className="text-4xl font-bold text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

export default Section;
