import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SponsorCardProps {
  name: string;
  logo: string; // Change from StaticImageData to string
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
        <div
          className="
            relative 
            bg-slate-700/10 
            p-6 
            rounded-xl 
            border border-purple-500/20 group-hover:border-cyan-400/40
            backdrop-blur-md 
            transition-all duration-300
            overflow-hidden
          "
        >
          {/* Strong visible gradient background contained within card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/40 to-cyan-400/40 rounded-xl opacity-70 group-hover:opacity-90 transition-all duration-300" />
          
          <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center rounded-lg bg-white/90 shadow-lg">
            <div className="absolute inset-0 rounded-lg bg-white z-0" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-28 h-28 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={name}
                width={112}
                height={112}
                className="object-contain rounded-lg"
              />
            </motion.div>
          </div>

          <h3 className="text-lg font-semibold text-white text-center relative z-10">{name}</h3>
        </div>
      </a>
    </motion.div>
  );
};