
import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

export default function App() {
  const [state, handleSubmit] = useForm("xgegyknq");

  // const [formData, setFormData] = useState({
  //   Name: '',
  //   PhoneNo: '',
  //   EmailID: '',
  //   Amount: '',
  //   Message: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  if (state.succeeded) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Navbar />
          <div className="bg-green-950 p-6 rounded-lg shadow-md sm:my-8 lg:my-24">
            <p className="text-2xl font-semibold text-white py-8 text-center">
              Your generosity has made a world of difference. <br /> Thank you
              for your invaluable contribution! 🤝🏻
            </p>
            <a
              href="/"
              className="block w-full bg-white text-center hover:bg-white text-green-950 font-semibold py-2 px-4 rounded mt-4"
            >
              Back
            </a>
          </div>
          <Footer />
        </div>
      </>
    );
}

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formEle = document.querySelector(".form");
  //   const formDatab = new FormData(formEle);

  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbw7CuarokM7No5IheXYBraa0kGKtiOH4OYXyOkL1LSkXVV--JMDZTnGzhtpWvtGWz5Oaw/exec",
  //     {
  //       method: "POST",
  //       body: formDatab
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFormData({
  //         Name: '',
  //         Amount: '',
  //         PhoneNo: '',
  //         EmailID: '',
  //         Message: '',
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        <div className="lg:flex justify-center">
          <div className="bg-white max-w-md">
            <div className="flex flex-col m-5">
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
              <h3 className="text-left">
                Pay your donation here using above QR scanner
              </h3>
              <div className="flex items-center my-4">
                <hr className="flex-1 border-t border-gray-400" />
                <span className="mx-4 text-gray-500">OR</span>
                <hr className="flex-1 border-t border-gray-400" />
              </div>
              <p className="text-left">
                Use this UPI Id: <strong>8143660501@ybl</strong> or enter
                Contact number <strong>8143660501</strong>
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md max-w-md w-full">
            {/* <form
                className="form"
                action="https://script.google.com/macros/s/AKfycbw7CuarokM7No5IheXYBraa0kGKtiOH4OYXyOkL1LSkXVV--JMDZTnGzhtpWvtGWz5Oaw/exec"
                method="POST"
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
            </form> */}
            <div>
              <p style={{ display: 'flex', alignItems: 'center' }} className='mb-4'>
                <span className='mr-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                    <path fill="#6b6b6b" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                  </svg>
                </span>
                <span className='pt-5'>Please fill out this form after you complete the payment and let us know.</span>
              </p>
            </div>
            <form onSubmit={handleSubmit} class="max-w-md mx-auto">
              <label
                htmlFor="fullname"
                class="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                required
                placeholder="Your full name"
                class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              />

              <ValidationError
                prefix="FullName"
                field="fullname"
                errors={state.errors}
                class="text-red-500 text-xs"
              />

              <label
                htmlFor="donatedamount"
                class="block mt-4 text-sm font-medium text-gray-700"
              >
                Donated Amount
              </label>
              <input
                id="donatedamount"
                type="number"
                name="donatedamount"
                required
                placeholder="₹4,999"
                class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              />

              <ValidationError
                prefix="DonatedAmount"
                field="donatedamount"
                errors={state.errors}
                class="text-red-500 text-xs"
              />

              <label
                htmlFor="email"
                class="block mt-4 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="yourname@gmail.com"
                class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                class="text-red-500 text-xs"
              />

              <label
                htmlFor="contactnumber"
                class="block mt-4 text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                id="contactnumber"
                type="tel"
                name="contactnumber"
                required
                placeholder="+91 00000 00000"
                class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              />

              <ValidationError
                prefix="ContactNumber"
                field="contactnumber"
                errors={state.errors}
                class="text-red-500 text-xs"
              />

              <label
                htmlFor="message"
                class="block mt-4 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your message here"
                class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                class="text-red-500 text-xs"
              />

              <button
                type="submit"
                disabled={state.submitting}
                class="mt-4 w-full bg-green-950 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2 hover:bg-green-900"
              >
                Submit
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
