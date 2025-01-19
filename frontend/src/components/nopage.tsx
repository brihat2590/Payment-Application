import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 px-6 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
