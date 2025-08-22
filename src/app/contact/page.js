"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const router = useRouter();
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBackClick = () => {
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          message: "Thank you for reaching out! I will get back to you soon.",
          type: "success",
        });
        e.target.reset();
      } else {
        setFormStatus({
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setFormStatus({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-10 min-h-full p-6 text-white bg-black bg-opacity-60">
        {/* Back Button - Top Left */}
        <button
          type="button"
          onClick={handleBackClick}
          className="absolute top-6 left-6 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md flex items-center gap-2"
          aria-label="Go back to Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          HOME
        </button>

        {/* Profile Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative">
            <Image
              className="rounded border-2 border-red-500 shadow-[0_0_15px_rgba(185,28,28,0.5)]"
              src="/IMG20250330211809.jpg"
              width={100}
              height={100}
              alt="Audumber Shirodkar"
              priority
            />
            <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full p-1">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent my-2"></div>
        </div>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col space-y-8 p-6 backdrop-blur-sm bg-black bg-opacity-30 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-extrabold relative inline-block">
              <span>Contact </span>
              <span className="text-red-500">Information</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-red-500 bg-opacity-20 rounded-full group-hover:bg-red-500 group-hover:bg-opacity-100 transition-all duration-300">
                  <FaEnvelope className="w-6 h-6 text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:audumbershirodkar28@gmail.com"
                    className="hover:text-red-400 transition-all duration-300 text-lg"
                  >
                    audumbershirodkar28@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-red-500 bg-opacity-20 rounded-full group-hover:bg-red-500 group-hover:bg-opacity-100 transition-all duration-300">
                  <FaMapMarkerAlt className="w-6 h-6 text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-lg">Valpoi, Goa, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-red-500 bg-opacity-20 rounded-full group-hover:bg-red-500 group-hover:bg-opacity-100 transition-all duration-300">
                  <FaGithub className="w-6 h-6 text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a
                    href="https://github.com/audumber28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-all duration-300 text-lg"
                  >
                    github.com/audumber28
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
              <p className="text-gray-300">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/audumber28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300"
                  aria-label="GitHub profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                {/* Add more social icons here as needed */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-black bg-opacity-30 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-extrabold mb-6 relative inline-block">
              <span>Send a </span>
              <span className="text-red-500">Message</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="hidden"
                name="access_key"
                value="ff4a516b-e69b-4d6f-8171-30790737e59d"
              />

              <div className="relative">
                <input
                  className="peer w-full bg-black bg-opacity-50 text-white border-b-2 border-gray-500 focus:border-red-500 outline-none p-3 pt-6 transition-all duration-300"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder=" "
                  aria-label="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-4 text-gray-400 transition-all duration-300 peer-focus:text-red-400 peer-focus:text-xs peer-focus:-top-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base -top-1 text-xs"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full bg-black bg-opacity-50 text-white border-b-2 border-gray-500 focus:border-red-500 outline-none p-3 pt-6 transition-all duration-300"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder=" "
                  aria-label="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-4 text-gray-400 transition-all duration-300 peer-focus:text-red-400 peer-focus:text-xs peer-focus:-top-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base -top-1 text-xs"
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  className="peer w-full bg-black bg-opacity-50 text-white border-b-2 border-gray-500 focus:border-red-500 outline-none p-3 pt-6 min-h-[120px] transition-all duration-300"
                  name="message"
                  id="message"
                  required
                  placeholder=" "
                  aria-label="Your Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 top-4 text-gray-400 transition-all duration-300 peer-focus:text-red-400 peer-focus:text-xs peer-focus:-top-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base -top-1 text-xs"
                >
                  Your Message
                </label>
              </div>

              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <button
                className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
                type="submit"
                disabled={isSubmitting}
                aria-live="polite"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      role="img"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {formStatus.message && (
                <div
                  className={`mt-4 p-3 rounded-md ${
                    formStatus.type === "success"
                      ? "bg-green-900 text-green-200"
                      : "bg-red-900 text-red-200"
                  }`}
                  role="alert"
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 max-w-3xl text-center">
          <h2 className="font-popins text-2xl font-extrabold mb-4">
            <span>Why </span>
            <span className="text-red-500">Contact Me?</span>
          </h2>
          <p className="text-gray-300">
            I'm always looking for new challenges and opportunities to collaborate.
            Whether you have questions, feedback, or ideas for a project, I'd love to hear
            from you. Your thoughts are important, and I'm here to help bring your vision
            to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
