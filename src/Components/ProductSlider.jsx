import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

// Autoplay Plugin
function AutoplayPlugin(slider) {
  let timeout;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 3000); // 3s delay
  }
  slider.on("created", nextTimeout);
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

export default function ProductSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 3,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 640px)": {
          slides: { perView: 1, spacing: 10 },
        },
        "(max-width: 1024px)": {
          slides: { perView: 2, spacing: 15 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [AutoplayPlugin]
  );

  return (
    <div className="relative mx-10">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {images.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={typeof item === "string" ? item : item.src}
                alt={`Slide ${index + 1}`}
                className="rounded-lg transition-transform duration-500 group-hover:scale-105 rounded-0 mt-5"
              />
              {typeof item !== "string" && item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md text-white p-3 text-center text-sm">
                  {item.caption}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
{instanceRef.current && (
  <div className="absolute -top-10 right-4 flex space-x-2 z-10">
    <button
      onClick={() => instanceRef.current.prev()}
      className="bg-black text-white p-2 px-5 shadow-lg hover:bg-gray-800 transition"
    >
      ❮
    </button>
    <button
      onClick={() => instanceRef.current.next()}
      className="bg-black text-white p-2 px-5 shadow-lg hover:bg-gray-800 transition"
    >
      ❯
    </button>
  </div>
)}

      {/* Dots */}
      {instanceRef.current && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === idx ? "bg-black" : "bg-gray-400"
                }`}
              ></button>
            )
          )}
        </div>
      )}
    </div>
  );
}
