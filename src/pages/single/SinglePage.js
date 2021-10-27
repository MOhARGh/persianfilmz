import "flickity/dist/flickity.min.css";
// import "./styles.css";
import movies from "../../public/data/movies";

const Single = (props) => {
  const slug = props.match.params.slug;

  var movie = movies.find((movie) => {
    return movie.slug === slug;
  });

  return (
    <div className="App">
      <div className="carousel-main carousel-main-background">
        <div className="carousel-m-0 carousel-cell carousel-cell-main">
          <div
            className="single-background md:block hidden z-10"
            style={{
              backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(${movie.banner})`,
            }}
          ></div>
          <div
            className="single-background md:hidden block z-10"
            style={{
              backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 215vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(${movie.bannerMobile})`,
            }}
          ></div>
          <div className="absolute inset-0 z-20 container h-full flex pt-6 container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex w-full">
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
                {/* Cast */}
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
                {/* Year */}
                <div className="mb-5">
                  <div className="flex text-right justify-start">
                    <div className="ml-3 text-yellow-400">سال ساخت:</div>
                    <div className="flex">
                      <div className="person flex">
                        <div className="detail-name">{movie.year}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Score */}
                <div className="mb-5">
                  <div className="flex text-right justify-start">
                    <div className="ml-3 text-yellow-400">امتیاز:</div>
                    <div className="flex">
                      <div className="year flex items-center">
                        <div className="score-single-icon mr-2">
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
                        <div className="score-single-icon score-icon mr-2">
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
                        <div className="score-single-icon score-icon mr-2">
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
                        <div className="score-single-icon score-icon mr-2">
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
                        <div className="score-single-icon score-icon mr-2">
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
                {/* Genres */}
                <div className="mb-5">
                  <div className="flex text-right justify-start">
                    <div className="ml-3 text-yellow-400">ژانر:</div>
                    <div className="flex">
                      {movie.genres.map((genre) => (
                        <div key={genre.id} className="person flex">
                          <div className="detail-name">{genre.name}</div>
                          <div className="detail-name mx-1 virgool">،</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Language */}
                <div className="mb-5">
                  <div className="flex text-right justify-start">
                    <div className="ml-3 text-yellow-400">زبان:</div>
                    <div className="flex">
                      {movie.language.map((lang) => (
                        <div key={lang.id} className="person flex">
                          <div className="detail-name">{lang.name}</div>
                          <div className="detail-name mx-1 virgool">،</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Country */}
                <div className="mb-5">
                  <div className="flex text-right justify-start">
                    <div className="ml-3 text-yellow-400">کشور سازنده:</div>
                    <div className="flex">
                      {movie.country.map((count) => (
                        <div key={count.id} className="person flex">
                          <div className="detail-name">{count.name}</div>
                          <div className="detail-name mx-1 virgool">،</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* ESRB */}
                <div className="mb-5">
                  <div className="flex text-right justify-start">
                    <div className="ml-3 text-yellow-400">رده سنی:</div>
                    <div className="flex">
                      <div className="person flex">
                        <div className="person-name">{movie.esrb}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Duration */}
                <div className="mb-5">
                  <div className="flex text-right justify-start">
                    <div className="ml-3 text-yellow-400">مدت زمان:</div>
                    <div className="flex">
                      <div className="person flex">
                        <div className="detail-name">{movie.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Left Part Slider */}
              <div className="w-full flex-col justify-end	flex">
                <div className="mb-5 lg:text-left text-center detail">
                  <h1 className="title-name">{movie.name}</h1>
                </div>
                <div className="mb-5">
                  <div className="flex text-justify justify-end flex-wrap">
                    <div className="text-white stroy-text">{movie.story}</div>
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
      </div>
    </div>
  );
};

export default Single;
