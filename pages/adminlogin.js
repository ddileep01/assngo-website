import React, { useState } from "react";
import { useRouter } from 'next/router';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AdminLogin = () => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === 'Ass123$') {
      window.location.href = 'https://ass-online-certificate-editor.vercel.app/';
    } else {
      setError('Incorrect passcode. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="passcode" className="block text-sm font-medium text-gray-700">
                  Passcode
                </label>
                <div className="mt-1">
                  <input
                    id="passcode"
                    name="passcode"
                    type="password"
                    autoComplete="current-password"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setError('');
                    }}
                    required
                    placeholder="Enter passcode"
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-950 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
