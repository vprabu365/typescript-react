import React, { useEffect, useState } from "react";

type Props = {
  places: string;
  rating: number;
  distance: number;
  price: number;
};
const CardCarousel = ({ distance, places, rating, price }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);

  const accessKey =
    "live_FvB7pJn3okXElxQymQqaTdgpXNsrDvKeSvRI3G7kjiN1FxXU1BShSDFRvfc0v3a4";
  const fetchRandomImage = () => {
    fetch(`https://dog.ceo/api/breeds/image/random/120?api_key${accessKey}`)
      .then((response) => response.json())
      .then((data) => {
        setImageData(data.message);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    const controller = new AbortController();
    fetchRandomImage();
    return () => {
      controller.abort();
    };
  }, []);

  // [0,1,2,3,4]
  const prevPage = () => {
    const check = currentIndex === 0 ? imageData.length - 1 : currentIndex - 1;
    setCurrentIndex(check);
  };
  const nextPage = () => {
    const check = currentIndex === imageData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(check);
  };
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="card--container">
          {imageData && <img src={imageData[currentIndex]} alt="" />}
          <div className="title-tags">
            <div className="price">
              <span>{places}</span>
              <span>{distance} miles away</span>
              <span>${price}</span>
            </div>
            <div className="title-content">
              <img src="https://www.svgrepo.com/show/303501/red-star-1-logo.svg"></img>
              <span>{rating}</span>
            </div>

            <div className="buttons">
              <button
                onClick={prevPage}
                className={
                  currentIndex > 0 ? "hide--index" : "previous--button"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </button>

              <button onClick={nextPage} className="next--button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCarousel;
