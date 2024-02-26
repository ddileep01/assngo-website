
import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function App() {
  const [formData, setFormData] = useState({
    Name: '',
    PhoneNo: '',
    EmailID: '',
    Amount: '',
    Message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector(".form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbw7CuarokM7No5IheXYBraa0kGKtiOH4OYXyOkL1LSkXVV--JMDZTnGzhtpWvtGWz5Oaw/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          Name: '',
          Amount: '',
          PhoneNo: '',
          EmailID: '',
          Message: '',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        <div className='lg:flex justify-center py-5'>
            <div className="bg-white max-w-md">
            <div className='flex flex-col m-5'>
                <h1 className="text-3xl font-bold mb-4 pl-2">Donate Now</h1>
                <img
                src="https://i.ibb.co/G5xR3VQ/payments-gateways-strip.png"
                alt="Payment Gateways"
                width="250"
                height="250"
                />
                <img
                src="https://i.ibb.co/K6Xy43x/ass-donation-scanner-phonepe.jpg"
                alt="Payment Gateways"
                width="250"
                height="250"
                />
                <h3 className='text-left'>Pay your donation here using above QR scanner</h3>
                <div className="flex items-center my-4">
                  <hr className="flex-1 border-t border-gray-400" />
                  <span className="mx-4 text-gray-500">OR</span>
                  <hr className="flex-1 border-t border-gray-400" />
                </div>
                <p className='text-left'>
                  Use this UPI Id: <strong>8143660501@ybl</strong> or enter Contact
                  number <strong>8143660501</strong>
                </p>
            </div>
            </div>
            <div className="bg-white p-6 rounded-md max-w-md w-full">
            <form
                className="form"
                action="/donations.js"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-600"
                >
                    Your Name
                </label>
                <input
                    type="text"
                    id="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Your Name"
                    required
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-600"
                >
                    Your Phone number
                </label>
                <input
                    type="number"
                    id="PhoneNo"
                    name="PhoneNo"
                    value={formData.PhoneNo}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="+91 XXXXX XXXXX"
                    required
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-600"
                >
                    Your Email ID
                </label>
                <input
                    type="email"
                    id="EmailID"
                    name="EmailID"
                    value={formData.EmailID}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="name@example.com"
                    required
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="Amount"
                    className="block text-sm font-medium text-gray-600"
                >
                    Donation Amount
                </label>
                <input
                    type="number"
                    id="Amount"
                    name="Amount"
                    value={formData.Amount}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Enter amount(₹)"
                    required
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="Message"
                    className="block text-sm font-medium text-gray-600"
                >
                    Message (Optional)
                </label>
                <textarea
                    id="Message"
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Leave a message..."
                />
                </div>
                <button
                type="submit"
                className="w-full bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none"
                >
                Donate
                </button>
            </form>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



// export default function App() {
//   function Submit(e) {
//     e.preventDefault(); 
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbyMAW0WO2y1L8AVNM-Fr9hkcOd14Gf7QDf33SDtc5zfJKghut7tChkpT3hatZMNZlb5wQ/exec",
//       {
//         method: "POST",
//         body: formDatab
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <div className="App">
//       <h1>Contact Me form</h1>
//       <h2>
//         This demonstrates how to send data from a website form to Google sheet
//         in React or Vanilla jS
//       </h2>
//       <div>
//       <form className="form" action="/donations.js" method="post" onSubmit={(e) => Submit(e)}>
//           <input placeholder="Your Name" name="Name" type="text" />
//           <input placeholder="Your Amount" name="Amount" type="text" />
//           <input placeholder="Your Message" name="Message" type="text" />
//           <input name="Name" type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// }
