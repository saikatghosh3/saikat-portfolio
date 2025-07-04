import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';

export const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '14rem' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-1 bg-blue-500 mx-auto rounded"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
