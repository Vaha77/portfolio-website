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
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973__480.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    FastFood
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    The first project I worked on in the web development
                    boot-camp.
                  </p>

                  <button
                    type="button"
                    className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a href="https://abudulvohit.netlify.app" target="blank">
                      Click to preview
                    </a>
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fillRule="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                       fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* 2 */}
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src="https://w.namu.la/s/b83047a8859f42733a4556e93f1509360b36c096e455b2c6d4fc00a07ecb7f692e99c84661ef6b801c635ba931c0bc656c879de1fdf3347e84ee61471a7dbf9ef46398cb91acfa6c2d56f7eedae0fea0"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    한국어 프로젝트{" "}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    My first Korean language project.
                  </p>
                  <button
                    type="button"
                    className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a href="https://abfulvohidnews.netlify.app" target="blank">
                      Choose plan
                    </a>
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fillRule="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
          </div>
          <div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDlfMTk3%2FMDAxNjMxMTgxODMzNTQ2.Oj9gArZnbAXKT3EO0FKKhGoPHJPfw8tXNQc518MZEjog.4SEm-jlB63JlVOvhqlqDk5V5R40XZi3C0XoxO78PSXgg.JPEG.daramjuo%2Froad-trip-logistics-semi-truck-and-an-airstream-camper-on-the-highway-on-a-r.jpg&type=sc960_832"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Campedia
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    The team project I helped to my friends where I made huge
                    contributions.
                  </p>
                  <button
                    type="button"
                    className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a href="https://campidiacar.netlify.app" target="blank">
                      Choose plan
                    </a>
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fillRule="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* 4 */}
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src="https://www.neweuropetours.eu/wp-content/uploads/2021/10/gabriella-clare-marino-tlyzsnu8md0-unsplash-1600x900.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Our Tours
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Blogs website that gives information about famous hotels
                  </p>
                  <button
                    type="button"
                    className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <a
                      href="https://thirsty-elion-775c4a.netlify.app"
                      target="blank"
                    >
                      Choose plan
                    </a>
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fillRule="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
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
