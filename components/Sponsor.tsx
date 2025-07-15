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

  // Create duplicate array for seamless looping
  const duplicatedSponsors = [...previousSponsors, ...previousSponsors];

  return (
   <section className="py-20 relative overflow-hidden" id='Sponsors'>
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
  <motion.div
    style={{ y, opacity }}
    className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
  />

  <div className="relative">
    {/* Previous Sponsors */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-32"
    >
      <div className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 pixel-font">
          Previous Sponsors
        </h2>
        <p className="text-cyan-100 text-lg max-w-2xl mx-auto mb-16">
          We&apos;re grateful for the support of these amazing organizations in our previous edition
        </p>
      </div>

      {/* Rotating Sponsors Container - Full Width */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: `${230}%`
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <motion.div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 px-2"
              style={{
                width: `${100 / duplicatedSponsors.length}%`
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SponsorCard {...{ name: sponsor.name, logo: sponsor.logo, url: sponsor.url }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>

    {/* Current Sponsors */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl pt-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 pixel-font">
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
      </div>
    </motion.div>

    {/* Sponsor CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Sponsor?
          </h3>
          <p className="text-cyan-100/80 mb-8">
            Partner with IIITDM Hacks to connect with exceptional talent and support the future of technology.
          </p>
          <SponsorUs formLink="mailto:devclub@iiitdm.ac.in" />
        </div>
      </div>
    </motion.div>
  </div>
</section>
  );
};