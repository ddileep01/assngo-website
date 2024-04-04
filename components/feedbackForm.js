import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const FeedbackForm = () => {
  const [state, handleSubmit] = useForm("mqkryrkd");
  if (state.succeeded) {
    return <p>Thanks for your valuable feedback! ❤️</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="fullname"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          required
          placeholder="Your full name"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
        />
        <ValidationError
          prefix="FullName"
          field="fullname"
          errors={state.errors}
          className="text-red-500 text-xs"
        />
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-xs"
        />
        <label
          htmlFor="feedback-type"
          className="block text-sm font-medium text-gray-700"
        >
          Type Of Feedback
        </label>
        <select
          id="feedback-type"
          name="feedback-type"
          required
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Donation Feedback">Donation Feedback</option>
          <option value="Event Feedback">Event Feedback</option>
          <option value="Volunteering Feedback">Volunteering Feedback</option>
          <option value="Website Feedback">Website Feedback</option>
          <option value="Other">Other</option>
        </select>
        <ValidationError
          prefix="FeedbackType"
          field="feedback-type"
          errors={state.errors}
          className="text-red-500 text-xs"
        />
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700"
        >
          Rating
        </label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="1"
          max="5"
          required
          placeholder="Rate your experience on a scale of 1 to 5"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
        />
        <ValidationError
          prefix="Rating"
          field="rating"
          errors={state.errors}
          className="text-red-500 text-xs"
        />
        <label
          htmlFor="comments"
          className="block text-sm font-medium text-gray-700"
        >
          Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          required
          rows="4"
          placeholder="Leave your comment here..."
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
        ></textarea>
        <ValidationError
          prefix="Comments"
          field="comments"
          errors={state.errors}
          className="text-red-500 text-xs"
        />
        <label
          htmlFor="file"
          className="block text-sm font-medium text-gray-700"
        >
          Attach File (optional)
        </label>
        <input
          type="file"
          id="file"
          name="upload"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
        ></input>
        <ValidationError
          prefix="File"
          field="file"
          errors={state.errors}
          className="text-red-500 text-xs"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-green-950 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-900"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
