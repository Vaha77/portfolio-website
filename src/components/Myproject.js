import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return <>.</>;
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="max-w-4xl mx-auto justify-center " id="proj">
        <Slider {...settings}>
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973__480.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    FastFood
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    bootcampda qilgan birinchi loyixa
                  </p>

                  <button
                    type="button"
                    class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a href="https://abudulvohit.netlify.app">Choose plan</a>
                    <svg
                      class="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* 2 */}
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://w.namu.la/s/b83047a8859f42733a4556e93f1509360b36c096e455b2c6d4fc00a07ecb7f692e99c84661ef6b801c635ba931c0bc656c879de1fdf3347e84ee61471a7dbf9ef46398cb91acfa6c2d56f7eedae0fea0"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    한국어 프로젝트{" "}
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a href="https://abfulvohidnews.netlify.app">Choose plan</a>
                    <svg
                      class="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
          </div>
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDlfMTk3%2FMDAxNjMxMTgxODMzNTQ2.Oj9gArZnbAXKT3EO0FKKhGoPHJPfw8tXNQc518MZEjog.4SEm-jlB63JlVOvhqlqDk5V5R40XZi3C0XoxO78PSXgg.JPEG.daramjuo%2Froad-trip-logistics-semi-truck-and-an-airstream-camper-on-the-highway-on-a-r.jpg&type=sc960_832"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Campedia
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    birinichi startuop loyoxada ikki kun qatnashganman
                  </p>
                  <button
                    type="button"
                    class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a href="https://campidiacar.netlify.app">Choose plan</a>
                    <svg
                      class="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* 4 */}
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://www.neweuropetours.eu/wp-content/uploads/2021/10/gabriella-clare-marino-tlyzsnu8md0-unsplash-1600x900.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Our Tours
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a href="https://thirsty-elion-775c4a.netlify.app">
                      Choose plan
                    </a>
                    <svg
                      class="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* 5 */}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
