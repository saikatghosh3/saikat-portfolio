// export const ContactForm = () => {
//   return (
//     <form className="card p-8 animate-slide-in-right">
//       <div className="space-y-6">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium mb-2">
//             Message Me
//           </label>
//           <textarea
//             id="message"
//             rows={4}
//             className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//           ></textarea>
//         </div>
//         {/* <button type="submit" className="btn-primary w-full">
//           Send Message
//         </button> */}
        
//         <button
      
//   type="submit"
//   className="w-full py-3 px-6 text-white font-semibold text-lg uppercase rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 transform hover:-translate-y-1 transition-all duration-300"
// >
//    Message Me
// </button> 
// {/* <a href="mailto:saikat.blast10@.com">
//   <button
//     type="button"
//     className="w-full py-3 px-6 text-white font-semibold text-lg uppercase rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 transform hover:-translate-y-1 transition-all duration-300"
//   >
//     Send Message
//   </button>
// </a> */}


//       </div>
//     </form>
//   );
// };




// new one 

import React, { useState } from "react";
import Swal from "sweetalert2";



export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateInputs = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email),
      phone: !formData.phone.trim(),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const sendEmail = () => {
    const bodyMessage = `
      Full Name: ${formData.name} <br>
      Email: ${formData.email} <br>
      Phone Number: ${formData.phone} <br>
      Message: ${formData.message}
    `;

    window.Email.send({
      SecureToken: "14fb52dd-30d9-4f62-857e-0197d4470ebc",
      To: "gkst374@gmail.com",
      From: "gkst374@gmail.com",
      Subject: formData.subject,
      Body: bodyMessage,
    }).then((message: string) => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an issue sending the message.",
          icon: "error",
        });
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      sendEmail();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.subject ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 text-white font-semibold text-lg uppercase rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 transform hover:-translate-y-1 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};
