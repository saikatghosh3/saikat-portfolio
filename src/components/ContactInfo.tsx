import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="animate-slide-in-left space-y-6">
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>saikat10ghosh.com</span>
          </a>
          <div className="flex items-center gap-3 p-2">
            <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>+8801751455911</span>
          </div>
          <div className="flex items-center gap-3 p-2">
            <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Dhaka Uddan, Mohammodpur, Dhaka.</span>
          </div>
          <div className="flex items-center gap-3 p-2">
            <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Sat - thurs: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};