import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">
              Products
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Mobile Wallet</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Business Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">
              Resources
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">Developers</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-2">
              {/* Logo - Replace with your actual logo */}
              <svg
                className="h-8 w-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L3 7l1.63 1.27L12 14l7.36-5.73L21 7l-9-7zm0 7.73L5.64 12 12 16.27 18.36 12 12 7.73zM21 9v12l-9-7-9 7V9l1.63 1.27L12 16l7.36-5.73L21 9z" />
              </svg>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                PaySwift
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 md:mt-0">
              &copy; {new Date().getFullYear()} PaySwift. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}