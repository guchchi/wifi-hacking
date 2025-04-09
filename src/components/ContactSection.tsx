
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', form);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "Thanks for contacting us! We'll get back to you soon.",
    });
    
    // Reset form
    setForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-hack-gray py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about ethical hacking? Get in touch with us.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="card">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-bold">Disclaimer</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              This website is for educational purposes only. Do not use these techniques on any network you don't own or don't have explicit permission to test.
            </p>
            
            <p className="text-gray-300 mb-4">
              Unauthorized network access is illegal and unethical. Always practice responsible and legal security testing.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-hack-green hover:text-white transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-hack-green hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-hack-green hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Send us a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-hack-dark border border-hack-blue focus:border-hack-green focus:outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-hack-dark border border-hack-blue focus:border-hack-green focus:outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-hack-dark border border-hack-blue focus:border-hack-green focus:outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
