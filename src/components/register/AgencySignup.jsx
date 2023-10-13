import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import signup from "../../assets/signup.svg";
import ReCAPTCHA from "react-google-recaptcha";


const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState('');
  
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!agreeTerms) {
      toast.error("Please check the box to agree to our terms and conditions");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    if (!recaptchaValue) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }
    // Add more input validations here if needed

    try {
      const user = { username, email, password };
      const response = await axios.post(
        "http://localhost:9000/api/v1/signup",
        user
      );
      console.log("Sign-up form submitted");
      console.log(response.data);
      toast.success("Sign-up successful");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Sign-up failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <ToastContainer />
      <div className="container mx-auto max-w-md px-4 py-8 mt-4">
        <div className="bg-black rounded-lg shadow-lg overflow-hidden sm:flex sm:items-center">
          <div className="sm:w-1/2">
            <img
              src={signup}
              alt="Hero"
              className="object-cover w-full h-full mt-4"
            />
          </div>
          <div className="sm:w-1/2 p-6">
          <h3 className="text-4xl font-bold mt-4 text-left">Sign Up </h3>
            <h6 className="text-xl font-semi mt-4 text-left">Agency</h6>
            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <div>
                <label htmlFor="username" className="block mb-2 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 text-black"
                  required
                />
              </div>
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
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 text-black"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="agreeTerms" className="font-medium">
                  I agree to our terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-slate-500 focus:border-slate-500"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4">
                <ReCAPTCHA
                  sitekey="6Ld-5pgoAAAAANfT_V_I-JKrYocKowF4mfprkxGZgit "
                  onChange={handleRecaptchaChange}
                />
              </div>
            <div className="flex justify-between mt-4">
              <a href="/login" className="text-green-600 no-underline">
                Have an account? Log in
              </a>
              <a
                href="/terms-and-conditions"
                className="text-green-600 no-underline"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
