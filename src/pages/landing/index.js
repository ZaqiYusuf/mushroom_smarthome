import React from "react";
import { Slider } from './slider.js'
import DemoCarousel from "./slider.js";

export default function index() {
  return (
    <div>
      {/* HomePage */}
      <header className="bg-[#DDCEBF] z-50 fixed top-0 left-0 right-0">
        <nav class="bg-black-500 p-4">
          <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <img src="/assets/img/logo.png" alt="" class="w-10 h-10" />
              <a
                href="#"
                class="text-black text-xl font-bold"
                style={{ fontFamily: "Poppins" }}
              >
                MushRoom
              </a>
            </div>

            <ul class="flex space-x-10">
              <li>
                <a href="#" class="text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-black">
                  How To Use
                </a>
              </li>
              <li>
                <a href="#" class="text-black">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" class="text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="flex ml-20 mt-40 gap-10">
        <div>
          <img src="/assets/img/group1.png" alt="" />
        </div>
        <div className="container mx-auto">
          <img src="/assets/img/mushroom.png" alt="" className="w-20 h-20" />
          <h1 className="text-5xl font-bold mt-5">
            MushRoom Smart <br />
          </h1>
          <p className="text-5xl font-bold my-5">Home</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit.
            </p>
          </div>
          <br />
          <button className="bg-[#40362C] text-white p-2">Explore More!</button>
        </div>
      </div>

      {/* About Us */}
      <div className="flex items-center justify-center min-h-screen relative">
        <div className="flex flex-col md:flex-row items-center relative z-10">
          <div className="mr-10 md:mr-0">
            <div className="relative">
              <img
                src="/assets/img/about.png"
                alt="About Us"
                className="w-80 h-70 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg shadow-lg"
              />
              <div className="absolute bg-[#665A48] px-5 py-3 text-center text-white opacity-75 top-10 -left-10 rounded-lg">
                <p>47+ Jenis Jamur</p>
              </div>
              <div className="absolute bg-[#665A48] px-5 py-3 text-center text-white opacity-75 -bottom-7 right-10 rounded-lg">
                <p>
                  700+ <br />
                  Manfaat Jamur
                </p>
              </div>
            </div>
          </div>
          <div className="ml-40">
            <h4 className="text-xl font-semibold mb-2 border-l-4 border-neutral-700 pl-5">
              About Us
            </h4>
            <h1 className="text-5xl font-bold">
              MushRoom Smart <br /> Home
            </h1>
            <p className="text-lg text-gray-600 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
              <br />
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
              <br />
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              <br />
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt
              <br />
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* How To Use */}
      <div className="flex justify-between items-center">
      <div className="py-12 ml-32 mt-20">
        <div className="container mx-auto">
          <h4 className="text-xl font-semibold mb-5 border-l-4 border-neutral-700 pl-5">
            How To Use
          </h4>
          <h1 className="text-5xl font-bold mb-5">
            Lorem Ipsum <br /> Dolor.
          </h1>
          <div className="grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-wrap -mx-3 w-full">
            {/* pertama */}
            <div className="w-full md:w-1/2 px-3 mb-3">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-3 relative">
                  <img
                    src="/assets/img/number.png"
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xl bg-[#665A48] rounded-full">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 text-2xl font-bold text-[#665A48]">
                    Lorem Ipsum Dolor.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>

            {/* kedua */}
            <div className="w-full md:w-1/2 px-3 mb-3">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-3 relative">
                  <img
                    src="/assets/img/number.png"
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xl bg-[#665A48] rounded-full">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 text-2xl font-bold text-[#665A48]">
                    Lorem Ipsum Dolor.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>

            {/* ketiga */}
            <div className="w-full md:w-1/2 px-3 mb-3">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-3 relative">
                  <img
                    src="/assets/img/number.png"
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xl bg-[#665A48] rounded-full">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 text-2xl font-bold text-[#665A48]">
                    Lorem Ipsum Dolor.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>

            {/* keempat */}
            <div className="w-full md:w-1/2 px-3 mb-3">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-3 relative">
                  <img
                    src="/assets/img/number.png"
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xl bg-[#665A48] rounded-full">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 text-2xl font-bold text-[#665A48]">
                    Lorem Ipsum Dolor.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          {/* Menambahkan class "flex items-center justify-end" untuk mengatur gambar di sebelah kanan */}
          <img
            src="/assets/img/howtouse.png"
            alt="How To Use"
            className="w-65 h-65 mt-10 mr-20"
          />

      </div>
      {/* Gallery */}
      <div className="flex items-center justify-center min-h-screen relative">
        <div className="flex flex-col md:flex-row items-center relative z-10">
          <div className="mr-10 md:mr-0">
            <div className="relative">
              <img
                src="/assets/img/about.png"
                alt="About Us"
                className="w-80 h-70 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="ml-40">
            <h4 className="text-xl font-semibold mb-2 border-l-4 border-neutral-700 pl-5">
              Gallery
            </h4>
            <h1 className="text-5xl font-bold">
              MushRoom Smart <br /> Home Gallery
            </h1>
            <p className="text-lg text-gray-600 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
              <br />
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
              <br />
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              <br />
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt
              <br />
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div>
        <DemoCarousel/>
      </div>

    </div>
  );
}
