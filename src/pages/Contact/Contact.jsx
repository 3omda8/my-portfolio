import { useState, useRef } from "react";

function Contact() {
  const baseUrl = window.location.origin;
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent immediate redirect

    setShowSuccess(true); // show "message sent" message

    setTimeout(() => {
      formRef.current.submit(); // then submit form after delay
    }, 500); // 2 seconds delay
  };

  return (
    <main>
      <h2 className="text-4xl xl:text-5xl font-bold text-center pt-16 md:pb-12 text-orange-900">
        Contact Me
      </h2>
      <section className="flex flex-col md:flex-row">
        <div className="w-3/4 mx-auto md:w-1/2">
          <div className="md:w-3/4 mx-auto px-8">
            <p className="text-center md:text-left text-main-txt text-xl md:text-2xl font-semibold py-4 md:font-bold">
              Thank you for visiting, and I hope you find inspiration in my
              work!
            </p>
            <h3 className=" text-main-txt  text-xl font-bold py-4 ">
              Mohamed Emad
            </h3>
            <p className="text-white text-lg font-semibold bg-main-txt max-w-fit px-4 py-2 rounded-full relative ms-[-12px]">
              Contact Information
            </p>
            <ul className="flex flex-col gap-2 mt-4 mb-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/mohamed-emad-hamdy-dawood-engineering-student/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-text font-semibold hover:underline"
                >
                  <i
                    className="fa-brands fa-linkedin text-xl me-1"
                    style={{ color: "#0476cd" }}
                  ></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/3omda8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-text font-semibold hover:underline"
                >
                  <i
                    className="fa-brands fa-github text-xl me-1"
                    style={{ color: "#333" }}
                  ></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201067111230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-text font-semibold hover:underline"
                >
                  <i
                    className="fa-brands fa-square-whatsapp text-xl me-1"
                    style={{ color: "#0bfe3c" }}
                  ></i>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mohamed.emad.599906/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-text font-semibold hover:underline "
                >
                  <i
                    className="fa-brands fa-facebook text-xl me-1"
                    style={{ color: "#1964e6" }}
                  ></i>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2 mt-4 mb-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/mohameddawood664@gmail.com"
            method="POST"
            className="bg-white p-8 rounded shadow-md w-full max-w-lg space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${baseUrl}/contact`} />

            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full border rounded px-4 py-2 mt-1 focus:outline-orange-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full border rounded px-4 py-2 mt-1 focus:outline-orange-900"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full border rounded px-4 py-2 mt-1 focus:outline-orange-900 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-900 text-white py-2 rounded font-semibold hover:bg-orange-800 transition-colors"
            >
              Send Message
            </button>

            {showSuccess && (
              <p className="text-green-600 text-center font-medium mt-4">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
