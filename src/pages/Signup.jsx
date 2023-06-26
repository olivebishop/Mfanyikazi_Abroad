import React, { useState } from 'react';
import hero from '../assets/hero.jpg';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Perform sign-up logic here
    console.log('Sign-up form submitted');
    console.log({
      fullName,
      username,
      email,
      password,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-md px-4 py-8 mt-4">
        <div className="bg-black rounded-lg shadow-lg overflow-hidden sm:flex sm:items-center">
          <div className="sm:w-1/2">
            <img src={hero} alt="Hero" className="object-cover w-full h-full mt-4" />
          </div>
          <div className="sm:w-1/2 p-6">
            <h3 className="text-4xl font-bold mt-4">Sign Up</h3>
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
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500"
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
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500"
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
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-black rounded py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-slate-500 focus:border-slate-500"
              >
                Sign Up
              </button>
            </form>
            <div className="flex justify-between mt-4">
              <a href="/login" className="text-green-600">Have an account? Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
