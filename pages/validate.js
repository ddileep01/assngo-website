import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ClipLoader } from "react-spinners"; // Importing ClipLoader from react-spinners

const Validate = () => {
  const [certificateInfo, setCertificateInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const validateCertificate = async () => {
    setLoading(true); // Start loading

    try {
      const response = await fetch(
        "https://good-jade-dhole-robe.cyclic.app/certificates"
      );
      const data = await response.json();
      const certificate = data.find((cert) => cert.certId === id);

      if (certificate) {
        setCertificateInfo(certificate);
        setErrorMessage(null);
      } else {
        setErrorMessage("No valid certificate found for the given ID.");
        setCertificateInfo(null);
      }
    } catch (error) {
      setErrorMessage("Error validating certificate.");
      setCertificateInfo(null);
    } finally {
      setLoading(false); // Stop loading
    }

    // Reset the input box after validation
    setId("");
  };

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <label
                htmlFor="certificateId"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Certificate ID:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="certificateId"
                  value={id}
                  onChange={handleInputChange}
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-green-300 rounded-md"
                  placeholder="e.g. 3619cc3c-dc48-47f3-8bb2-f4227c4c5a41"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={validateCertificate}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-950 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Validate
              </button>
            </div>
            {loading && (
              <div className="mt-4 flex justify-center">
                <ClipLoader size={35} color={"#10B981"} loading={loading} />
              </div>
            )}
            {errorMessage && (
              <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
            )}
            {certificateInfo && (
              <div className="mt-6">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {certificateInfo.name}
                </p>
                <p>
                  <span className="font-medium">From Date:</span>{" "}
                  {formatDate(certificateInfo.fromDate)}
                </p>
                <p>
                  <span className="font-medium">To Date:</span>{" "}
                  {formatDate(certificateInfo.toDate)}
                </p>
                <p>
                  <span className="font-medium">Certificate ID:</span>{" "}
                  {certificateInfo.certId}
                </p>
                <p className="mt-2 text-green-600 font-medium">
                  The given Certificate ID is valid.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Validate;
