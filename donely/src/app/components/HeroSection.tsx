export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Getting started in Sonola
        </h2>
        <p className="text-gray-500 mb-4">
          Create intriguing marketing contents with ease!
        </p>
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Start creating now
        </button>
      </div>
      <div className="hidden md:block">
        <img
          src="/hero-illustration.png"
          alt="Illustration"
          className="w-64 rounded-lg"
        />
      </div>
    </section>
  );
}
