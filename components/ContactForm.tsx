
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert('Please fill out all fields.');
      return;
    }
    setIsSubmitting(true);
    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // In a real app, you'd send this data to a server.
      console.log({ name, phone, email });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center bg-green-50 border border-green-200 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
        <p className="mt-2 text-green-700">Your information has been received. If you're a potential fit, we will be in touch soon to discuss the next steps.</p>
      </div>
    );
  }

  return (
    <section className="bg-neutral-100 rounded-lg p-8 md:p-12 text-center">
      <h2 className="text-3xl font-bold text-neutral-800">Ready to Grow Together?</h2>
      <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
        If you're aligned with this vision and ready to create, I'd love to hear from you. Fill out the form below to get in touch.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
        <div className="space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-md focus:ring-pink-500 focus:border-pink-500 transition"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-md focus:ring-pink-500 focus:border-pink-500 transition"
              placeholder="Your contact number"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-md focus:ring-pink-500 focus:border-pink-500 transition"
              placeholder="Your email address"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full bg-neutral-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors duration-300"
        >
          {isSubmitting ? 'Submitting...' : 'Get in Touch'}
        </button>
      </form>
      <p className="mt-6 text-sm text-neutral-500">
        Please note: Due to the high number of inquiries, only selected creators will be contacted. Further details will be discussed privately.
      </p>
    </section>
  );
};

export default ContactForm;
