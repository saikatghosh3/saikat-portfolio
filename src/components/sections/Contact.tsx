import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  return (

<section id="contact" className="min-h-screen py-20 flex items-center justify-center">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-12">Contact</h2>
    <div className="grid md:grid-cols-1 gap-12">
      <div className="space-y-9">
        <div className="card p-6 mx-auto">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:saikat10ghosh@gmail.com"
              className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>saikat10ghosh@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/saikat-ghosh-52671b344"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/saikatghosh3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   );
     };


    
   
 