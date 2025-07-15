import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SponsorUs } from './sponsor/SponsorUs';
import { Clock } from 'lucide-react';
import { SponsorCard } from './sponsor/SponsorCard';
import Unstop from './images/unstop.png'
import APTOS from './images/APTOS.png'
import Devfolio from './images/Devfolio.png'

import dotxyz from './images/dotxyz.jpg'
import contentstack from './images/contentstack.svg'

const previousSponsors = [
  {
    name: 'Unstop',
    logo: Unstop,
    url: 'https://unstop.com/'
  },
  {
    name: '.xyz',
    logo: dotxyz,
    url: 'https://gen.xyz/'
  },
  {
    name: 'Devfolio',
    logo: Devfolio,
    url: 'https://devfolio.co/'
  },
  {
    name: 'APTOS',
    logo: APTOS,
    url: 'https://aptosfoundation.org/'
  },
  {
    name: 'Contentstack',
    logo: contentstack,
    url: 'https://www.contentstack.com/'

  }
];

export const Sponsors = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 0.6]);

  return (
    <section className="py-20 relative overflow-hidden" id='Sponsors'>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
      />

      <div className="container mx-auto px-6 relative">
        {/* Previous Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 pixel-font">
            Previous Sponsors
          </h2>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto mb-12">
            We&apos;re grateful for the support of these amazing organizations in our previous edition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SponsorCard {...{ name: sponsor.name, logo: sponsor.logo, url: sponsor.url }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl pt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 pixel-font">
            IIITDM Hacks Sponsors
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl" />
            <div className="relative bg-gray-900/50 border border-purple-500/20 p-8 rounded-xl backdrop-blur-sm">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-cyan-100/80">
                Exciting partnerships are in the works! Stay tuned for announcements.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Sponsor?
            </h3>
            <p className="text-cyan-100/80 mb-8">
              Partner with IIITDM Hacks to connect with exceptional talent and support the future of technology.
            </p>
            {/* <SponsorUs formLink="https://drive.google.com/file/d/1e5QsNJ8DOswy8XnIX6uYLutY_Hg1Q5n9/view?usp=sharing" /> */}
            <SponsorUs formLink="mailto:devclub@iiitdm.ac.in" />
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
