import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ArrowRight, CheckCircle } from 'lucide-react';

const GetStartedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this data to your backend
    }
  };

  return (
    <section id="get-started" className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying fast, secure money transfers with PayFlow
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sign Up Today</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <p className="text-center text-lg font-medium">Thanks for your interest!</p>
                  <p className="text-center text-gray-500 mt-2">We'll be in touch soon with your account details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    Get Early Access
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              )}
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4">What You'll Get</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3">Free account with initial demo balance</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3">Instant money transfers to anyone</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3">Access to all premium features</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3">24/7 customer support</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 italic text-sm">
                    "Switching to PayFlow was the best financial decision I've made this year. The app is incredibly fast and easy to use."
                  </p>
                  <p className="mt-2 text-gray-800 font-medium text-sm">— David Wilson, PayFlow User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;