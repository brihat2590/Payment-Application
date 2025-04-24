import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Shield, Clock, Zap, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(featureRef, { threshold: 0.1 });

  return (
    <div 
      ref={featureRef}
      className={`bg-white rounded-xl shadow-sm p-6 transition-all duration-700 delay-${delay} transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PayFlow</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of users trust PayFlow for their money transfer needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<Zap size={24} />}
            title="Instant Transfers"
            description="Send money instantly to anyone, anywhere. Transfers happen in seconds, not days."
            delay={100}
          />
          <Feature 
            icon={<Shield size={24} />}
            title="Secure & Protected"
            description="Bank-level security with end-to-end encryption to keep your financial data safe."
            delay={200}
          />
          <Feature 
            icon={<Clock size={24} />}
            title="24/7 Availability"
            description="Transfer money any time of the day or night, with no restrictions or waiting periods."
            delay={300}
          />
          <Feature 
            icon={<Users size={24} />}
            title="Social Payments"
            description="Connect with friends and easily split bills, share expenses, or send gifts."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;