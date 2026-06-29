import { certifications } from '../../data/certifications';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Certification } from '../../types';

export const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
    <section id="certifications" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />

      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Award className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">CERTIFICATIONS</span>
          </div>
          <div className="w-fit mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-center">
              Licenses & Certifications
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            />
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => cert.imageUrl && setSelectedCert(cert)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md -z-10 ${hoveredIndex === index ? 'opacity-20' : ''}`} />

              <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-56 lg:h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center shrink-0">
                  {cert.imageUrl ? (
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-gray-500">
                      <Award className="w-16 h-16 text-indigo-400/30" />
                      <span className="text-sm text-gray-600">Certificate image coming soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <span className="text-xs font-medium text-white">Certification</span>
                  </div>

                  {cert.credentialUrl && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300 transform hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-6 lg:p-8 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-indigo-400 font-medium text-sm mb-3">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>Issued: {cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-slate-800 flex items-center justify-center p-4" style={{ minHeight: 200 }}>
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-1">{selectedCert.title}</h3>
              <p className="text-indigo-400 font-medium">{selectedCert.issuer}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
