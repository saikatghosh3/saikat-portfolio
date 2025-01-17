import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';

export const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in">Get In Touch</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};