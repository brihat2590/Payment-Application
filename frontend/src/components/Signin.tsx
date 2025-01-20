import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate();
  async function handleSubmit(e:any){
    e.preventDefault();
    const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
      username,password
    })
    const jwt=response.data.token;
    localStorage.setItem("token",jwt);
    navigate("/dashboard")
    alert("you have been signed in ")
    

    
    
    

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your credentials to access your account
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              placeholder="johny"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
