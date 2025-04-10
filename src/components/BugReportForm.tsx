
import React, { useState } from 'react';
import { Bug, Lightbulb, Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const BugReportForm = () => {
  const [formType, setFormType] = useState<'bug' | 'feature'>('bug');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: formType === 'bug' ? "Bug report submitted!" : "Feature request submitted!",
        description: "Thank you for your feedback. ALX-17 will review it soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setDescription('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="bug-report" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Report a Bug or Suggest a Feature</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Help ALX-17 improve the tutorials by reporting issues or suggesting new features.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-3 flex items-center gap-2 rounded-l-md ${
                formType === 'bug' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-hack-gray text-gray-300'
              }`}
              onClick={() => setFormType('bug')}
            >
              <Bug className="h-5 w-5" />
              Report a Bug
            </button>
            <button
              className={`px-6 py-3 flex items-center gap-2 rounded-r-md ${
                formType === 'feature' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-hack-gray text-gray-300'
              }`}
              onClick={() => setFormType('feature')}
            >
              <Lightbulb className="h-5 w-5" />
              Suggest a Feature
            </button>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              {formType === 'bug' ? (
                <>
                  <Bug className="h-5 w-5 text-red-500 mr-2" />
                  Report a Bug
                </>
              ) : (
                <>
                  <Lightbulb className="h-5 w-5 text-blue-500 mr-2" />
                  Suggest a Feature
                </>
              )}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-hack-dark border border-gray-700 rounded-md px-4 py-2 text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-hack-dark border border-gray-700 rounded-md px-4 py-2 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  {formType === 'bug' ? 'Describe the Bug' : 'Describe Your Feature Idea'}
                </label>
                <textarea
                  id="description"
                  rows={5}
                  className="w-full bg-hack-dark border border-gray-700 rounded-md px-4 py-2 text-white"
                  placeholder={
                    formType === 'bug'
                      ? 'Please provide details about the bug, including what you were doing when it occurred...'
                      : 'Describe your feature idea and how it would improve the tutorials...'
                  }
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit {formType === 'bug' ? 'Bug Report' : 'Feature Request'}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugReportForm;
