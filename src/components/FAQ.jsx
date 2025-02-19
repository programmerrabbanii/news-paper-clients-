import React from "react";

const FAQ = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <h4 className="text-4xl pb-4 font-bold text-center text-gray-800">
        Frequently Asked Questions
      </h4>
      <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg border border-gray-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-blue-600">
          What type of news can be found on this website?
        </div>
        <div className="collapse-content">
          <p className="p-4 text-gray-700">
            Our website offers a variety of news categories including national, international, economic, technology, health, and cultural news to keep you updated on current events.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg border border-gray-300 mt-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-blue-600">
          How can I submit news?
        </div>
        <div className="collapse-content">
          <p className="p-4 text-gray-700">
            You can submit your news stories through our contact form available on the website or by reaching out to us via email. We value contributions from our readers!
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg border border-gray-300 mt-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-blue-600">
          How do I sign up for your newsletter?
        </div>
        <div className="collapse-content">
          <p className="p-4 text-gray-700">
            To sign up for our newsletter, please enter your email address in the subscription form located at the bottom of our homepage. Stay updated with the latest news!
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg border border-gray-300 mt-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-blue-600">
          Can I customize my news feed?
        </div>
        <div className="collapse-content">
          <p className="p-4 text-gray-700">
            Yes! You can personalize your news feed by selecting your preferred categories in your user settings to receive the most relevant news.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg border border-gray-300 mt-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-blue-600">
          How can I contact customer support?
        </div>
        <div className="collapse-content">
          <p className="p-4 text-gray-700">
            For any inquiries, you can reach our customer support team through the contact form or email us directly at support@example.com.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg border border-gray-300 mt-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-blue-600">
          Are there advertising opportunities available?
        </div>
        <div className="collapse-content">
          <p className="p-4 text-gray-700">
            Yes, we offer various advertising opportunities for businesses. Please contact us for more details on our advertising packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
