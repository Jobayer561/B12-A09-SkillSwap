import React from "react";

const AboutUs = () => {
  return (
    <section
      className="bg-linear-to-r  from-gray-100 to-gray-200
 text-gray-800 font-semibold py-12 px-6"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-emerald-600">
            About SkillSwap
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Empowering communities through skill-sharing and human connection.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-emerald-700 mb-2">
            🌍 Our Mission
          </h2>
          <p>
            Our mission is to unlock the power of shared knowledge. We aim to
            build a world where learning is not limited by cost or access, but
            driven by passion, generosity, and collaboration. SkillSwap is more
            than a platform—it’s a movement to make learning human again.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-emerald-700 mb-2">
            🤝 How It Works
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Offer a Skill:</strong> Create a listing for something
              you’re great at—tutoring, mentoring, or training.
            </li>
            <li>
              <strong>Browse & Learn:</strong> Explore local listings by
              category, rating, or skill level.
            </li>
            <li>
              <strong>Connect & Trade:</strong> Message providers, schedule
              sessions, and rate your experience.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-emerald-700 mb-2">
            💡 Why SkillSwap?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Local-first:</strong> We prioritize nearby connections to
              foster real-world learning.
            </li>
            <li>
              <strong>Inclusive & Diverse:</strong> From creative arts to tech
              skills, everyone’s welcome.
            </li>
            <li>
              <strong>Trust & Transparency:</strong> Ratings and reviews help
              users find reliable skill providers.
            </li>
            <li>
              <strong>Flexible & Fun:</strong> Learn at your own pace, in your
              own style, with people who care.
            </li>
          </ul>
        </div>
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-emerald-600">
            🚀 Ready to Share or Learn?
          </h2>
          <p className="mt-2 text-gray-700">
            Join SkillSwap today and become part of a growing network of
            learners and teachers helping each other grow.
          </p>
          <button className="mt-4 px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
