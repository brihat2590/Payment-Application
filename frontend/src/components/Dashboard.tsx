import { useEffect, useState } from "react";
import axios from "axios";
import { Menu, DollarSign, ChevronDown } from "lucide-react";
import User from "./user";
import Users from "./Users";
import Logout from "./logout";
import FirstLetter from "./firstletter";
import Footer from "./footer";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header 
        className={`sticky top-0 z-10 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and brand */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-10 w-10 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0L3 7l1.63 1.27L12 14l7.36-5.73L21 7l-9-7zm0 7.73L5.64 12 12 16.27 18.36 12 12 7.73zM21 9v12l-9-7-9 7V9l1.63 1.27L12 16l7.36-5.73L21 9z" />
                </svg>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent tracking-tight">
                  PayFlow
                </h1>
              </div>
            </div>

            {/* User profile */}
            <div className="flex items-center">
              <div className="hidden sm:flex items-center mr-4">
                <span className="text-gray-500 text-sm mr-2">Hello,</span>
                <span className="font-medium text-gray-800"><User /></span>
              </div>
              
              <div className="relative">
                <button
                  className="flex items-center space-x-1 focus:outline-none"
                  onClick={() => setOpen(!open)}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 font-semibold shadow-sm transition-transform hover:scale-105">
                    <FirstLetter />
                  </div>
                  <ChevronDown 
                    className={`hidden sm:block h-4 w-4 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {open && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-1 z-20 transform origin-top-right transition-all duration-200 ease-out">
                    <Logout />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Balance card */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 transform transition-all hover:shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Available Balance</h2>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    ${Math.floor(balance).toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    {((balance % 1) * 100).toFixed(0) !== "0" ? 
                      `.${((balance % 1) * 100).toFixed(0)}` : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Users section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Users</h2>
          <Users />
        </div>
      </main>

      {/* Footer */}
      <div className="mt-auto">
        
      </div>
    </div>
  );
}

export default Dashboard;