import React from "react";
import { Link } from "react-router-dom";


export default function Land(){
  



  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-500 text-white shadow-lg">
        <div className="text-xl font-bold">PayFlow</div>
        <div className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
           
            <><Link to={'/signin'}><button   className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow">Sign In</button></Link></>
          
            
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-500 to-blue-400 text-white">
            <div
            style={{ opacity: 1, transform: "translateY(0)" }}
        >
            <h1 className="text-5xl font-bold mb-4">Seamless Payments, Simplified</h1>
            <p className="text-lg mb-6">
            The easiest way to manage your payments securely and efficiently.
            </p>
            <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg">
            Get Started
            </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">Why Choose PayFlow?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Fast Transactions</h3>
              <p>Experience lightning-fast payment processing with our optimized systems.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
              <p>Your transactions are protected with our top-notch security protocols.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
              <p>Enjoy an intuitive and seamless user experience for all your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-500 text-white text-center">
        <p>&copy; 2025 PayFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};


