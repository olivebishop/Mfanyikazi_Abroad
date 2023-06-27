import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log('Login form submitted');
    console.log({
      email,
      password,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
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
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-slate-500 focus:border-slate-500"
              >
                Log In
              </button>
            </form>
            <div className="flex justify-between mt-4">
              <a href="/signup" className="text-green-600">Don't have an account? Sign up</a>
              <a href="/forgot-password" className="text-green-600">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
