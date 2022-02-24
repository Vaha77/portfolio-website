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
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
        1 saxifali Projects
      </p>

      <div className="flex flex-wrap justify-center ">
        {/* html */}
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--TPUuQx-_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/86kkwdhp8nzpcm99z54m.png" />
          <p className="mt-6 text-xl font-semibold text-center">
            <a href="https://eager-morse-9c95b7.netlify.app">
              bir saxifali online ish tajriba
            </a>
          </p>
        </div>
        {/* quiz */}
        <div className="flex flex-col 	items-center w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbr2kfDE7IdbF9tpvppCXpnaPZwXamvdZ-Q_1aWs3oosr6SJciHpEBerBHArf0OSBHmM&usqp=CAU" />
          <p className="mt-6 text-xl font-semibold text-center">
            <a href="https://serene-ramanujan-712632.netlify.app/">Quiz</a>{" "}
          </p>
        </div>
        {/* tailwind */}
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <img src="https://i0.wp.com/ma.tt/files/2018/10/bag-v4-small.jpg?fit=604%2C270&ssl=1" />
          <p className="mt-6 text-base font-semibold text-center">
            <a href="https://elated-euler-bfe989.netlify.app">
              Your bad bir saxifali online ish tajriba
            </a>
          </p>
        </div>
        {/* javaScript */}
        <a href="">
          {" "}
          <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
            <img src="" />
            <p className="mt-6 text-xl font-semibold text-center">
              {" "}
              JavaScript{" "}
            </p>
          </div>
        </a>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNodedotjs color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">NodeJs</p>
          <div class="m-3">
            <button class="bg-white  text-gray-800 font-bold rounded border-b-2  border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">ReactJs</p>
          <div class="m-3">
            <button class="bg-white  text-gray-800 font-bold rounded border-b-2  border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FiFigma color="orange" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Figma</p>
          <div class="m-3">
            <button class="bg-white  text-gray-800 font-bold rounded border-b-2  border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiGithub color="black" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Github</p>
          <div class="m-3">
            <button class="bg-white  text-gray-800 font-bold rounded border-b-2  border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <DiPhotoshop color="blue" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Photoshop</p>
          <div class="m-3">
            <button class="bg-white  text-gray-800 font-bold rounded border-b-2  border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ScrollIntoView selector="#contactme">
        <div class="mx-auto ">
          <div
            className="max-w-lg w-full text-center m-auto pt-36 pb-10"
            id="contactme"
          >
            <h1 className="text-4xl">Interested in working together?</h1>
          </div>
          <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default ProCards;
