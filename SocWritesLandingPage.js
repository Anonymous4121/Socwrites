import React from 'react';

export default function SocWritesLandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 shadow bg-white flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">SocWrites</h1>
        <nav className="space-x-6 font-medium">
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#publish" className="hover:text-red-600">Publish</a>
          <a href="#explore" className="hover:text-red-600">Explore</a>
          <a href="#join" className="hover:text-red-600">Join Us</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </nav>
      </header>
      <section className="text-center py-24 px-4 bg-gradient-to-br from-red-50 to-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Publishing the Future of Psychology</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          SocWrites makes psychology research fast, fair, and accessible—empowering early scholars and reshaping academic publishing.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-red-700 transition">Submit Your Work</button>
      </section>
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
        <p className="text-gray-700 text-lg">
          SocWrites aims to make psychological publishing in India faster, fairer, and more accessible—giving early researchers a platform to share their work, reach a global audience, and challenge outdated academic norms.
        </p>
      </section>
      <section id="publish" className="bg-gray-100 py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Publish With Us</h3>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          Whether you're a student or seasoned researcher, SocWrites offers an easy, fast, and transparent submission process.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-red-700 transition">View Guidelines</button>
      </section>
      <section id="explore" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Explore Research</h3>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          Discover cutting-edge work in cognitive science, behavioral theory, mental health, and more.
        </p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-gray-900 transition">Browse Articles</button>
      </section>
      <section id="join" className="bg-gray-100 py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Join the Movement</h3>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          We’re looking for editors, reviewers, and contributors who believe in accessible, high-impact research.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-red-700 transition">Get Involved</button>
      </section>
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-700 mb-4">Have questions or ideas? Reach out at <span className="text-red-600 font-medium">team@socwrites.in</span></p>
        <form className="space-y-4 mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-xl h-32" />
          <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-red-700 transition">Send Message</button>
        </form>
      </section>
      <footer className="bg-white p-6 text-center text-gray-600 border-t mt-12">
        © 2025 SocWrites. All rights reserved.
      </footer>
    </main>
  );
}
