import React from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

interface SponsorCardProps {
  name: string;
  logo: StaticImageData;
  url: string;
}

export const SponsorCard = ({ name, logo, url }: SponsorCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-400 rounded-xl blur-2xl opacity-50 group-hover:blur-3xl transition-all duration-300" />

      <div
        className="
          relative 
          bg-slate-700/10 
          p-6 
          rounded-xl 
          border border-purple-500/20 group-hover:border-cyan-400/40
          backdrop-blur-md 
          transition-all duration-300
        "
      >
        <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center rounded-lg bg-white/70 shadow-lg">
          <div className="absolute inset-0 rounded-lg bg-white z-0" />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={logo.src}
            alt={name}
            className="relative z-10 w-28 h-28 object-contain transition-all duration-300"
          />
        </div>

        <h3 className="text-lg font-semibold text-white text-center">{name}</h3>
      </div>
      </a>
    </motion.div>
  );
};
