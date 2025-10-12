"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full bg-gradient-to-r mb-7 from-[#f9f7ff] to-[#e4d9cc] rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between overflow-hidden transition-colors">
      {/* --- Decorative background circles (bottom-right) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-150px] left-[500px] w-[500px] h-[500px] rounded-full border-[1px] border-purple-300 opacity-40"></div>
        <div className="absolute bottom-[-150px] left-[550px] w-[500px] h-[450px] rounded-full border-[1px] border-purple-400 opacity-30"></div>
        <div className="absolute bottom-[-170px] left-[600px] w-[500px] h-[450px] rounded-full border-[1px] border-purple-400 opacity-20"></div>
        <div className="absolute bottom-[-180px] left-[650px] w-[500px] h-[400px] rounded-full border-[1px] border-purple-500 opacity-10"></div>
      </div>

      {/* Left Section */}
      <div className="flex-1 space-y-4 max-w-lg relative z-10">
        <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
          Getting started <br /> in Sonola
        </h2>
        <p className="text-gray-600">
          Create intriguing marketing contents with ease!
        </p>
        <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#6950ca] to-[#3b3cee] text-white font-medium rounded-xl shadow hover:opacity-90 transition [box-shadow:inset_0_0_8px_white] cursor-pointer   duration-300 ease-in-out hover:scale-105 hover:brightness-110 ">
          Start creating now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative flex-1 mt-10 lg:mt-0 flex justify-center items-center flex-wrap gap-4 z-10">
        {/* Card 1 */}
        <div className="flex flex-col gap-3 rounded-2xl shadow-md">
          <div className="mt-2">
            <Image
              src="/assets/banner/increaseRetention.png"
              alt="Analytics Chart"
              width={250}
              height={100}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative rounded-2xl -top-20 overflow-hidden shadow-md w-74 h-64">
            <video
              src="assets/banner/Emma_video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute left-0 w-full h-full object-cover"
            ></video>

            <div className="relative p-3 z-10 rounded-2xl h-full flex flex-col justify-end">
              <h4 className="font-medium text-white text-2xl">Emma Owens</h4>
              <p className="text-xl text-gray-200">Lead Project Director</p>
            </div>
          </div>
          <div className="mt-2">
            <Image
              src="/assets/banner/collaborate.jpeg"
              alt="Analytics Chart"
              width={290}
              height={200}
              className="absolute rounded-xl top-50 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mt-2">
            <Image
              src="/assets/banner/shedulepost.jpeg"
              alt="Analytics Chart"
              width={240}
              height={100}
              className="absolute rounded-xl -top-20 -right-10 object-cover"
            />
          </div>

          <div className="w-44 top-40">
            <div className="absolute top-44 bg-white w-68 rounded-2xl p-4 ml-2 shadow-md">
              <div className="flex space-x-2 mt-2">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  alt="Slack"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                  alt="Trello"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                  alt="Zoom"
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="font-semibold text-gray-500 text-xl">
                Integrations
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Connect with your favourite apps
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* White faded bottom layer */}
      <div className="absolute -bottom-8 left-0 w-full h-46 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
