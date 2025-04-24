import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { UserPlus, Send, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, isLast = false }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { threshold: 0.1 });

  return (
    <div ref={stepRef} className="flex relative">
      <div className={`transform transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative">
          {number}
        </div>
        <div className="mt-4 flex">
          <div className="mr-4 w-14 flex justify-center">
            <div className={`w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 ${
              isLast ? '' : 'mb-12'
            }`}>
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 max-w-md mb-8">{description}</p>
          </div>
        </div>
      </div>
      
      {!isLast && (
        <div className="absolute h-full left-7 top-14 transform -translate-x-1/2">
          <div className={`w-0.5 bg-gradient-to-b from-blue-600 to-cyan-400 h-0 transition-all duration-1000 ease-out ${
            isInView ? 'h-36' : 'h-0'
          }`}></div>
        </div>
      )}
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How PayFlow Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start sending and receiving money in just three simple steps
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Step 
            number={1}
            icon={<UserPlus size={20} />}
            title="Create Your Account"
            description="Sign up in seconds with just your email. No lengthy forms, no credit checks, and no waiting periods. Get instant access to your PayFlow account."
          />
          
          <Step 
            number={2}
            icon={<Send size={20} />}
            title="Add User & Amount"
            description="Enter the recipient's email address or username and the amount you want to send. It's that simple - no account numbers or routing codes needed."
          />
          
          <Step 
            number={3}
            icon={<CheckCircle size={20} />}
            title="Complete Transfer"
            description="Confirm the details and send the money. The recipient will receive the funds instantly, and you'll both get a confirmation notification."
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;