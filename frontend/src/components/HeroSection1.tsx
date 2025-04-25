import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const navigate=useNavigate()
  

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fadeInUp');
    }
    
    setTimeout(() => {
      if (descriptionRef.current) {
        descriptionRef.current.classList.add('animate-fadeInUp');
      }
    }, 300);
    
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.classList.add('animate-fadeInUp');
      }
    }, 600);
    
    setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.classList.add('animate-fadeInRight');
      }
    }, 900);
  }, []);

  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-cyan-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 transition-all duration-700"
            >
              <span className="block">Send & Receive</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Money Instantly</span>
            </h1>
            
            <p 
              ref={descriptionRef}
              className="mt-6 text-lg text-gray-600 opacity-0 transition-all duration-700 delay-300"
            >
              PayFlow allows users to transfer money instantly with an initial dummy balance. Quick. Easy. Seamless.
            </p>
            
            <button 
              ref={buttonRef}
              onClick={()=>{navigate("/signup")}}
              className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-full text-lg flex items-center opacity-0 transition-all duration-700 delay-600 hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
          
          <div 
            ref={imageRef}
            className="opacity-0 transition-all duration-700 delay-900 relative"
          >
            <div className="relative">
              <div className="w-full h-auto bg-white p-4 rounded-2xl shadow-xl transform rotate-3 transition-all hover:rotate-0 duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-8 w-36 bg-gray-300 rounded mt-2 animate-pulse"></div>
                      </div>
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                        $
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-cyan-100 rounded-full mr-3"></div>
                      <div>
                        <div className="h-4 w-20 bg-gray-200 rounded"></div>
                        <div className="h-3 w-32 bg-gray-100 rounded mt-1"></div>
                      </div>
                      <div className="ml-auto font-medium text-green-500">+$240</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-100 rounded-full mr-3"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        <div className="h-3 w-28 bg-gray-100 rounded mt-1"></div>
                      </div>
                      <div className="ml-auto font-medium text-red-500">-$120</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <div className="h-12 w-36 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl shadow-lg transform -rotate-6 z-[-1]"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-lg transform rotate-12 z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-10 w-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <ArrowRight className="transform rotate-90 text-gray-400" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;