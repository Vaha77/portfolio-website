import React, { useState } from "react";
import Slider from "react-slick";

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { DiPhotoshop } from "react-icons/di";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function ProCards() {
  return (
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center my-10">
          1 saxifali Projects
        </p>

        <div class="flex flex-wrap -m-4 text-center">
          {/* 1 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <a href="https://eager-morse-9c95b7.netlify.app">
              <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img src="https://miro.medium.com/max/1200/1*7fXfXk2_d5t3_NHUMP-ZmQ.jpeg" />

                <h2 class="title-font font-medium text-3xl text-gray-900">Eager</h2>
                <p class="leading-relaxed">bir saxifali online ish tajriba</p>
              </div>
            </a>
          </div>
          {/* 2 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 3 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 4 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 5 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 6 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 7*/}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 8 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 9 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/*10 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 12 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 13 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 14 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 15 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 16 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 17 */}
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
          {/* 18 */}
        </div>
      </div>
    </section>
  );
}

export default ProCards;
