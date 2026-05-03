// import { Mail, Linkedin, Github } from 'lucide-react';

// export const Contact = () => {
//   return (

// <section id="contact" className="min-h-screen py-20 flex items-center justify-center">
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h2 className="text-3xl font-bold mb-12">Contact</h2>
//     <div className="grid md:grid-cols-1 gap-12">
//       <div className="space-y-9">
//         <div className="card p-6 mx-auto">
//           <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
//           <p className="text-white dark:text-gray-300 mb-6">
//             I'm always open to new opportunities and collaborations. Feel free to reach out!
//           </p>
//           <div className="space-y-4">
//             <a
//               href="mailto:saikat10ghosh@gmail.com"
//               className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//             >
//               <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               <span>saikat10ghosh@gmail.com</span>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/saikat-ghosh-52671b344"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//             >
//               <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               <span>LinkedIn Profile</span>
//             </a>
//             <a
//               href="https://github.com/saikatghosh3"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//             >
//               <Github className="w-5 h-5" />
//               <span>GitHub Profile</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//    );
//      };


    
   
 import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Send className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md" />
              <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:saikat10ghosh@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/link"
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/10 group-hover/link:bg-indigo-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white group-hover/link:text-indigo-400 transition-colors">saikat10ghosh@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/saikat-ghosh-52671b344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/link"
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/10 group-hover/link:bg-indigo-500/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-white group-hover/link:text-indigo-400 transition-colors">Connect with me</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/saikatghosh3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/link"
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/10 group-hover/link:bg-indigo-500/20 transition-colors">
                      <Github className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <p className="text-white group-hover/link:text-indigo-400 transition-colors">View my work</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-xl">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <MapPin className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm text-gray-400">Available for freelance work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md" />
            <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group/btn relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </button>
              </form>

              {/* Response Time Note */}
              <p className="text-center text-xs text-gray-500 mt-6">
                I typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
