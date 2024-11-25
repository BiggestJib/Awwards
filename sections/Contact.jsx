import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  //service_8gy2day
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_8gy2day", // EmailJS service ID
        "template_nf69c4f", // EmailJS template ID
        {
          from_name: form.name, // Sender's name
          to_name: "Olaosebikan Ajibola Peter", // Your name
          from_email: form.email, // Sender's email
          reply_to: form.email, // Reply-to email
          to_email: "olaosebikanajibola18@gmail.com", // Your email
          message: form.message, // Message content
        },
        "1IRwyEetGGylaJDQf" // Public API Key
      );

      alert("Message sent successfully");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Message failed to send");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          className="absolute inset-0 min-h-screen"
          alt="termina background"
        />
        <div className="contact-container">
          <h3 className="head-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
          from-indigo-400 
          via-purple-500 
          to-pink-600 
          bg-clip-text 
          text-transparent">Get in Touch Today</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, enhance your existing
            platforms, or bring a unique project to life, I'm here to help make
            it happen.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Johndoe@email.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Leave a Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job ... "
              />
            </label>
            <button className="field-btn " type="submit" disabled={loading}>
              {loading ? "loading..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
