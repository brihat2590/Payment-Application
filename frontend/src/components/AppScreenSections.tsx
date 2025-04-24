import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const mockupUrl1 = "https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const mockupUrl2 = "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const mockupUrl3 = "https://images.pexels.com/photos/8442745/pexels-photo-8442745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const AppScreensSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const screen3Ref = useRef<HTMLDivElement>(null);
  
  const isScreen1InView = useInView(screen1Ref, { threshold: 0.1 });
  const isScreen2InView = useInView(screen2Ref, { threshold: 0.1 });
  const isScreen3InView = useInView(screen3Ref, { threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The PayFlow Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple, intuitive interface designed for the best user experience
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">
          <div 
            ref={screen1Ref}
            className={`w-64 bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 transform ${
              isScreen1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-6 bg-gray-100 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <img 
              src={mockupUrl1} 
              alt="PayFlow Dashboard" 
              className="w-full h-auto"
            />
            <div className="p-4 text-center">
              <p className="font-medium">Dashboard View</p>
              <p className="text-sm text-gray-500">Track your transactions</p>
            </div>
          </div>
          
          <div 
            ref={screen2Ref}
            className={`w-64 bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 transform ${
              isScreen2InView ? 'opacity-100 translate-y-0 md:translate-y-6' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-6 bg-gray-100 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <img 
              src={mockupUrl2} 
              alt="PayFlow Send Money" 
              className="w-full h-auto"
            />
            <div className="p-4 text-center">
              <p className="font-medium">Send Money</p>
              <p className="text-sm text-gray-500">Fast and secure transfers</p>
            </div>
          </div>
          
          <div 
            ref={screen3Ref}
            className={`w-64 bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 transform ${
              isScreen3InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-6 bg-gray-100 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <img 
              src={mockupUrl3} 
              alt="PayFlow Activity" 
              className="w-full h-auto"
            />
            <div className="p-4 text-center">
              <p className="font-medium">Activity Feed</p>
              <p className="text-sm text-gray-500">Monitor your payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreensSection;