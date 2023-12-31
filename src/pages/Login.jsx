import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function LoginForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your login API endpoint
      const response = await axios.post("http://localhost:9000/api/v1/login", {
        email: email,
        password: password,
      });

      // Extract token and userRole from the response data
      const { token, userRole } = response.data;

      // Store the token and userRole in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", response.data.role);

      console.log(`The status is: ${response.status}`);
      console.log(response);
      toast.success("Login successful");

      setTimeout(()=> {

        if (response.data.role === "Employer") {
          navigate("/employer-dashboard");
        } else if (response.data.role === "Employee") {
          navigate("/employee-dashboard");
        } else if (response.data.role === "Agency") {
          navigate("/agency-dashboard");
        } else {
          // Default fallback route (handle admin if needed)
          navigate("/dashboard");
        }
      },1000)
      // Logic to redirect users to their respective dashboards based on userRole
    } catch (error) {
      console.error(error);
      toast.error("Your account is not verified. check your email for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <ToastContainer />
      <div className="container mx-auto max-w-md px-4 py-8 mt-4">
        <div className="bg-black rounded-lg shadow-lg overflow-hidden sm:w-1/2 mx-auto">
          <div className="p-6">
            <h3 className="text-4xl font-bold mt-4">Log In</h3>
            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 text-black"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-slate-500 focus:border-slate-500"
              >
                Log In
              </button>
            </form>
            <div className="flex justify-between mt-4">
              <a href="/account-type" className="text-green-600 no-underline">
                Don't have an account? Sign up
              </a>
              <a href="/forgot-password" className="text-green-600 no-underline">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
