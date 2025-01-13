import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add access key (replace with your actual access key)
    formData.append("access_key","811b95c3-5014-4992-9a52-2932e39650a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        // Clear the form fields
        event.target.reset();
        // Display success message
        alert("Form submitted successfully!");
      } else {
        // Display error message
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-violet-900 to-black flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="bg-black/80 border border-violet-500 rounded-lg shadow-lg p-8 max-w-lg w-full"
      >
        <h2 className="text-3xl font-bold text-violet-400 text-center mb-6 animate-pulse">
          Contact Us
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-violet-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-3 rounded-md border border-violet-500 bg-black text-white focus:ring-violet-500 focus:border-violet-500 transition duration-300"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-violet-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 rounded-md border border-violet-500 bg-black text-white focus:ring-violet-500 focus:border-violet-500 transition duration-300"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-violet-300 mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full p-3 rounded-md border border-violet-500 bg-black text-white focus:ring-violet-500 focus:border-violet-500 transition duration-300"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-md bg-gradient-to-r from-violet-600 to-violet-800 text-white font-semibold hover:scale-105 transform transition-transform duration-300 hover:shadow-lg"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Contact;
