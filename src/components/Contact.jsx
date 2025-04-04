import React from "react";

export default function Contact() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-semibold mb-4 text-center">Contact Me</h2>
      <div className="text-center space-y-2">
        <p>Email: <a className="text-blue-600" href="mailto:davish.std@gmail.com">davish.std@gmail.com</a></p>
        <p>Phone: <a className="text-blue-600" href="tel:+919489483316">+91 94894 83316</a></p>
        <p>LinkedIn: <a className="text-blue-600" href="https://linkedin.com/in/edavish" target="_blank">@edavish</a></p>
        <p>GitHub: <a className="text-blue-600" href="https://github.com/davhsi" target="_blank">@davhsi</a></p>
      </div>
    </section>
  );
}