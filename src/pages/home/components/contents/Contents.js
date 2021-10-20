import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

const Contents = ({ data }) => {
  const testimonialFlickityOptions = {
    wrapAround: false,
    // asNavFor: ".carousel.carousel-main",
    contain: true,
    pageDots: false,
    rightToLeft: true,
    cellAlign: "right",
    prevNextButtons: true,
    selectedAttraction: 0.2, //Speed
    friction: 0.8,
  };

  return (
    <div className="container flex flex-wrap py-6 mx-auto px-2 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="flex items-center py-5">
          <div className="header-text w-full relative text-white">
            <h2 className="line-header text-lg pr-2">جدیدترین</h2>
          </div>
          <div className="header-text w-full flex justify-end relative text-white">
            <div className="flex flex-shrink-0 items-center text-lg px-4 py-1 border-purple-600 text-white rounded-lg border-2">
              <div>آرشیو کلی</div>
              <div className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-slider relative">
          <Flickity
            className={"custom-images-carousel"}
            elementType={"section"}
            options={testimonialFlickityOptions}
            disableImagesLoaded={false}
          >
            {data.map((movie) => (
              <div
                key={movie.id}
                className="carousel-cell carousel-thumbs film-card overflow-hidden"
              >
                <div className="flex flex-wrap">
                  <img
                    src={movie.thumbnail}
                    alt={movie.name}
                    className="w-full"
                  />
                  <div className="text-white Roboto flex flex-wrap w-full leading-none">
                    <div className="w-full flex items-center text-left ltr">
                      <h3 className="text-white">{movie.name}</h3>
                    </div>
                    <div className="w-full flex items-center justify-end ltr">
                      <div className="flex items-center w-full">
                        <div className="film-card-score score-icon mr-1">
                          <svg
                            className="w-full h-full"
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
                            ></path>
                          </svg>
                        </div>
                        <div className="text-white text-sm">7.2</div>
                      </div>
                      <div className="flex items-center w-full justify-end">
                        <div className="film-card-score heart-icon mr-1">
                          <svg
                            className="w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                          >
                            <path
                              d="M7.6 1C9.29038 1 10.8323 1.84142 12 2.8C13.1677 1.84142 14.7096 1 16.4 1C20.0451 1 23 3.71049 23 7.05386C23 13.795 15.3274 17.721 12.7981 18.8321C12.2886 19.056 11.7114 19.056 11.2019 18.8321C8.67259 17.721 1 13.7948 1 7.0537C1 3.71033 3.95492 1 7.6 1Z"
                              stroke="#212135"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        <div className="text-white text-sm">209</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Flickity>
        </div>
      </div>
    </div>
  );
};

export default Contents;
