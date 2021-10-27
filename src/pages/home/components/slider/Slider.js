import { Link } from "react-router-dom";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import "flickity-as-nav-for";
import "flickity-fade";

const Slider = ({ data }) => {
  const flickityOptions = {
    wrapAround: true,
    rightToLeft: true,
    autoPlay: 10000,
    pauseAutoPlayOnHover: false,
    lazyLoad: 2,
    // fade: ".carousel.carousel-main",
    arrowShape:
      "M100,47.564v4.632c0,3.014-2.532,5.609-5.546,5.609H27.382l21.273,21.2   c1.03,1.028,1.595,2.33,1.595,3.791c0,1.464-0.564,2.836-1.595,3.863l-3.273,3.275c-1.029,1.027-2.4,1.594-3.863,1.594   c-1.464,0-2.836-0.565-3.865-1.594L1.595,53.877C0.561,52.845-0.004,51.467,0,49.995c-0.004-1.464,0.561-2.84,1.595-3.874   l36.059-36.056c1.029-1.029,2.402-1.594,3.865-1.594s2.834,0.569,3.863,1.598l3.273,3.275c1.03,1.032,1.595,2.416,1.595,3.88   c0,1.463-0.564,2.858-1.595,3.887L27.619,42.192h66.916l-0.156-0.034C97.393,42.159,100,44.553,100,47.564",
  };

  return (
    <div className="App">
      <Flickity
        id="main-flickity"
        className="carousel carousel-main carousel-main-background"
        elementType={"section"}
        options={flickityOptions}
        // disableImagesLoaded={false}
      >
        {data.map((movie) => (
          <div
            key={movie.id}
            className="carousel-m-0 carousel-cell carousel-cell-main"
          >
            <div
              className="slider-background md:block hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(${movie.banner})`,
              }}
            ></div>
            <div
              className="slider-background md:hidden block"
              style={{
                backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 215vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(${movie.bannerMobile})`,
              }}
            ></div>
            <div className="container h-full flex pt-6 container mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex w-full silder-content">
                {/* Right Part Slider */}
                <div className="w-full flex-col justify-end	lg:flex hidden">
                  <div className="mb-5">
                    <div className="flex text-right justify-start">
                      <div className="ml-3 text-yellow-400">کارگردان:</div>
                      <div className="flex">
                        {movie.directors.map((director) => (
                          <div key={director.id} className="person flex">
                            <div className="person-name">{director.name}</div>
                            <div className="person-name mx-1 virgool">،</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="flex text-right justify-start">
                      <div className="ml-3 text-yellow-400">بازیگران:</div>
                      <div className="flex">
                        {movie.cast.map((actor) => (
                          <div key={actor.id} className="person flex">
                            <div className="person-name">{actor.name}</div>
                            <div className="person-name mx-1 virgool">،</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="flex text-right justify-start flex-wrap">
                      <div className="ml-3 w-full text-yellow-400">داستان:</div>
                      <div className="text-white stroy-text">{movie.story}</div>
                    </div>
                  </div>
                </div>
                {/* Left Part Slider */}
                <div className="w-full flex-col justify-end	flex">
                  <div className="mb-5 lg:text-left text-center">
                    <Link to={`/title/${movie.slug}`}>
                      <h1 className="title-name">{movie.name}</h1>
                    </Link>
                  </div>
                  <div className="mb-5">
                    <div className="flex flex-wrap lg:flex-nowrap lg:text-left text-center justify-center lg:justify-end">
                      <div className="flex">
                        <div className="year flex items-center">
                          <div className="year">{movie.duration}</div>
                          <div className="year-icon mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 6C12 6 12 10 12 11C12 12 12 12 13 12C14 12 18 12 18 12"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex mr-5">
                        <div className="year flex items-center">
                          <div className="year">{movie.year}</div>
                          <div className="year-icon mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#fff"
                              width="24"
                              height="26"
                              className="fill-current	text-white"
                            >
                              <path
                                d="M6 16L9 16"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6 20L9 20"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 0C8.55229 0 9 0.447715 9 1V2.08526C9.91022 2.02588 10.9077 2 12 2C13.0923 2 14.0898 2.02588 15 2.08526V1C15 0.447715 15.4477 0 16 0C16.5523 0 17 0.447715 17 1V2.29284C21.5655 2.98124 23.3272 5.03464 23.8321 10C23.8648 10.321 23.8922 10.6542 23.9147 11C23.9357 11.3219 23.9525 11.6547 23.9655 11.9987C23.9892 12.6276 24 13.294 24 14C24 14.7056 23.9892 15.3716 23.9655 16.0001C23.9526 16.3446 23.9358 16.6778 23.9147 17C23.8923 17.3446 23.865 17.6766 23.8325 17.9966C23.2926 23.3131 21.3131 25.2926 15.9966 25.8325C15.6766 25.865 15.3446 25.8923 15 25.9147C14.6778 25.9358 14.3446 25.9526 14.0001 25.9655C13.3716 25.9892 12.7056 26 12 26C2.118 26 0 23.882 0 14C0 13.294 0.0108119 12.6276 0.0344942 11.9987C0.0474512 11.6547 0.0642606 11.3219 0.0852604 11C0.107819 10.6542 0.135213 10.321 0.16786 10C0.672822 5.03464 2.43455 2.98124 7 2.29284V1C7 0.447715 7.44772 0 8 0ZM7 4.31862C5.65606 4.54689 4.74838 4.897 4.10819 5.36634C3.1636 6.05884 2.48259 7.275 2.17921 10H21.8208C21.5174 7.275 20.8364 6.05884 19.8918 5.36634C19.2516 4.897 18.3439 4.54689 17 4.31862V5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5V4.09118C14.1318 4.0305 13.1387 4 12 4C10.8613 4 9.86819 4.0305 9 4.09118V5C9 5.55228 8.55229 6 8 6C7.44772 6 7 5.55228 7 5V4.31862ZM21.5261 18.0538C21.6253 18.0407 21.7229 18.0293 21.8185 18.0193C21.5563 20.3506 21.0166 21.5664 20.2915 22.2915C19.5664 23.0166 18.3506 23.5563 16.0193 23.8185C16.0293 23.7229 16.0407 23.6253 16.0538 23.5261C16.2289 22.2038 16.6825 20.7317 17.7071 19.7071C18.7317 18.6825 20.2038 18.2289 21.5261 18.0538ZM14.0712 23.2636C14.0389 23.507 14.0152 23.7416 13.9982 23.9641C13.3793 23.9886 12.7146 24 12 24C9.57515 24 7.76307 23.8675 6.38993 23.5623C5.03949 23.2622 4.23924 22.8223 3.70846 22.2915C3.17768 21.7608 2.73783 20.9605 2.43771 19.6101C2.13254 18.2369 2 16.4249 2 14C2 13.2846 2.01144 12.6193 2.03593 12H21.9641C21.9886 12.6193 22 13.2846 22 14C22 14.7146 21.9886 15.3793 21.9641 15.9982C21.7416 16.0152 21.507 16.0389 21.2636 16.0712C19.7536 16.2711 17.7683 16.8175 16.2929 18.2929C14.8175 19.7683 14.2711 21.7536 14.0712 23.2636Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex mr-5">
                        {movie.genres.map((genre) => (
                          <div key={genre.id} className="genre flex">
                            <div className="genre-name">{genre.name}</div>
                            <div className="genre-name mx-1 virgool">،</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="flex lg:text-left text-center justify-center lg:justify-end">
                      <div className="flex esrb-icon">{movie.esrb}</div>
                      <div className="flex mr-5">
                        <div className="year flex items-center">
                          <div className="year-icon mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12.0312 1C13.0666 1 14.6926 5.69969 15.2795 7.50668C15.4141 7.92126 15.7943 8.20684 16.23 8.22162C18.1151 8.28556 23 8.55772 23 9.66144C23 10.7495 19.5188 13.4853 18.0955 14.5583C17.7427 14.8243 17.5982 15.2836 17.734 15.704C18.3132 17.4975 19.7048 22.1483 18.8117 22.8815C17.9323 23.6034 14.1749 20.7486 12.6485 19.5286C12.2692 19.2254 11.7305 19.2251 11.3511 19.528C9.82346 20.7477 6.06764 23.6035 5.25065 22.8815C4.41962 22.1471 5.73815 17.4816 6.28237 15.6949C6.40915 15.2786 6.26319 14.8287 5.91569 14.5668C4.4996 13.4997 1 10.7523 1 9.66144C1 8.55659 5.89498 8.285 7.77586 8.22142C8.20861 8.2068 8.58723 7.92462 8.72415 7.51385C9.32468 5.71216 10.9944 1 12.0312 1Z"
                                stroke="#fff103"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="year-icon score-icon mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12.0312 1C13.0666 1 14.6926 5.69969 15.2795 7.50668C15.4141 7.92126 15.7943 8.20684 16.23 8.22162C18.1151 8.28556 23 8.55772 23 9.66144C23 10.7495 19.5188 13.4853 18.0955 14.5583C17.7427 14.8243 17.5982 15.2836 17.734 15.704C18.3132 17.4975 19.7048 22.1483 18.8117 22.8815C17.9323 23.6034 14.1749 20.7486 12.6485 19.5286C12.2692 19.2254 11.7305 19.2251 11.3511 19.528C9.82346 20.7477 6.06764 23.6035 5.25065 22.8815C4.41962 22.1471 5.73815 17.4816 6.28237 15.6949C6.40915 15.2786 6.26319 14.8287 5.91569 14.5668C4.4996 13.4997 1 10.7523 1 9.66144C1 8.55659 5.89498 8.285 7.77586 8.22142C8.20861 8.2068 8.58723 7.92462 8.72415 7.51385C9.32468 5.71216 10.9944 1 12.0312 1Z"
                                stroke="#fff103"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="year-icon score-icon mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12.0312 1C13.0666 1 14.6926 5.69969 15.2795 7.50668C15.4141 7.92126 15.7943 8.20684 16.23 8.22162C18.1151 8.28556 23 8.55772 23 9.66144C23 10.7495 19.5188 13.4853 18.0955 14.5583C17.7427 14.8243 17.5982 15.2836 17.734 15.704C18.3132 17.4975 19.7048 22.1483 18.8117 22.8815C17.9323 23.6034 14.1749 20.7486 12.6485 19.5286C12.2692 19.2254 11.7305 19.2251 11.3511 19.528C9.82346 20.7477 6.06764 23.6035 5.25065 22.8815C4.41962 22.1471 5.73815 17.4816 6.28237 15.6949C6.40915 15.2786 6.26319 14.8287 5.91569 14.5668C4.4996 13.4997 1 10.7523 1 9.66144C1 8.55659 5.89498 8.285 7.77586 8.22142C8.20861 8.2068 8.58723 7.92462 8.72415 7.51385C9.32468 5.71216 10.9944 1 12.0312 1Z"
                                stroke="#fff103"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="year-icon score-icon mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12.0312 1C13.0666 1 14.6926 5.69969 15.2795 7.50668C15.4141 7.92126 15.7943 8.20684 16.23 8.22162C18.1151 8.28556 23 8.55772 23 9.66144C23 10.7495 19.5188 13.4853 18.0955 14.5583C17.7427 14.8243 17.5982 15.2836 17.734 15.704C18.3132 17.4975 19.7048 22.1483 18.8117 22.8815C17.9323 23.6034 14.1749 20.7486 12.6485 19.5286C12.2692 19.2254 11.7305 19.2251 11.3511 19.528C9.82346 20.7477 6.06764 23.6035 5.25065 22.8815C4.41962 22.1471 5.73815 17.4816 6.28237 15.6949C6.40915 15.2786 6.26319 14.8287 5.91569 14.5668C4.4996 13.4997 1 10.7523 1 9.66144C1 8.55659 5.89498 8.285 7.77586 8.22142C8.20861 8.2068 8.58723 7.92462 8.72415 7.51385C9.32468 5.71216 10.9944 1 12.0312 1Z"
                                stroke="#fff103"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="year-icon score-icon mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12.0312 1C13.0666 1 14.6926 5.69969 15.2795 7.50668C15.4141 7.92126 15.7943 8.20684 16.23 8.22162C18.1151 8.28556 23 8.55772 23 9.66144C23 10.7495 19.5188 13.4853 18.0955 14.5583C17.7427 14.8243 17.5982 15.2836 17.734 15.704C18.3132 17.4975 19.7048 22.1483 18.8117 22.8815C17.9323 23.6034 14.1749 20.7486 12.6485 19.5286C12.2692 19.2254 11.7305 19.2251 11.3511 19.528C9.82346 20.7477 6.06764 23.6035 5.25065 22.8815C4.41962 22.1471 5.73815 17.4816 6.28237 15.6949C6.40915 15.2786 6.26319 14.8287 5.91569 14.5668C4.4996 13.4997 1 10.7523 1 9.66144C1 8.55659 5.89498 8.285 7.77586 8.22142C8.20861 8.2068 8.58723 7.92462 8.72415 7.51385C9.32468 5.71216 10.9944 1 12.0312 1Z"
                                stroke="#fff103"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="flex lg:text-left text-center justify-center lg:justify-end">
                      <div className="flex cursor-pointer	justify-center items-center px-5 btn-slider border-2 border-yellow-400 text-yellow-400 rounded-lg">
                        بیشتر
                      </div>
                      <div className="flex cursor-pointer	mr-5 justify-center items-center px-5 btn-slider border-2 border-yellow-400 text-yellow-400 rounded-lg">
                        امتیاز
                      </div>
                      <div className="flex cursor-pointer	mr-5 justify-center items-center px-5 btn-slider bg-yellow-400 text-black rounded-lg">
                        آلبوم موسیقی
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default Slider;
