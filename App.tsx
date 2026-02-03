
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import { CheckIcon, CrossIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-800">
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <Header />

        <div className="space-y-16">
          <Section title="About the Collaboration">
            <p className="text-lg text-neutral-600 leading-relaxed">
              I'm looking to collaborate with other creative and ambitious female creators in Kolkata. We'll be creating lifestyle content—reels, fashion shoots, and fun, expressive videos. The vibe is cute, stylish, and confident, but always professional and perfect for building a strong Instagram presence.
            </p>
          </Section>

          <Section title="Why This Is a Real Opportunity">
             <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              This is more than just creating content together. It's a chance to grow. I've built my own account and learned how to monetize my passion, and I'm ready to share what I know. You'll get:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckIcon className="w-6 h-6 mr-3 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-neutral-600">Hands-on experience in growing an Instagram account from the ground up.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-6 h-6 mr-3 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-neutral-600">Real insights into monetizing your content and brand.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-6 h-6 mr-3 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-neutral-600">Exposure through collaboration and cross-promotion.</span>
              </li>
              <li className="flex items-start">
                 <CheckIcon className="w-6 h-6 mr-3 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-neutral-600">A safe, comfortable, and creative environment to express yourself.</span>
              </li>
            </ul>
          </Section>

          <Section title="Location & Setup">
            <p className="text-lg text-neutral-600 leading-relaxed">
              To build trust and ensure a professional workflow, all our content will be created in person. I have my own private apartment in New Town, Kolkata, which serves as our creative studio. It's a safe, secure, and fully-equipped space where we can focus on creating amazing content without distractions.
            </p>
          </Section>

          <div className="grid md:grid-cols-2 gap-12">
            <Section title="Who This Is For">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Female creators aged 18–25.</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Based in or near Kolkata.</span>
                </li>
                 <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Comfortable and confident on camera.</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Passionate about lifestyle, fashion, and reels.</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Serious about growing and monetizing.</span>
                </li>
              </ul>
            </Section>

            <Section title="Who This Is NOT For">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CrossIcon className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Anyone under the age of 18.</span>
                </li>
                <li className="flex items-start">
                  <CrossIcon className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Anyone not based in Kolkata.</span>
                </li>
                 <li className="flex items-start">
                  <CrossIcon className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Those looking for online-only work.</span>
                </li>
                <li className="flex items-start">
                  <CrossIcon className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-600">Those uncomfortable with bold or confident content.</span>
                </li>
              </ul>
            </Section>
          </div>
          
          <section className="bg-neutral-100 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-neutral-800">Get In Touch</h2>
            <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
              If you align with this vision and are ready to create, I'd love to hear from you. Click the button below to open the application form.
            </p>
            <div className="mt-8">
              <a
                href="https://forms.gle/uQARXBYfc3UwQWxTA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800 transition-colors duration-300"
                aria-label="Contact Us by opening a Google Form in a new tab"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Please note: Due to the high number of inquiries, only selected creators will be contacted. Further details will be discussed privately.
            </p>
          </section>
        </div>
      </main>
       <footer className="text-center py-6 text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Maya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;