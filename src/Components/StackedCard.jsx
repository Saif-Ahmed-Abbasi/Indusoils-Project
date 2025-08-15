import React from "react";

const StackedCard = ({ cardsData }) => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <ul className="relative flex flex-col items-center w-full max-w-lg gap-6 pb-[calc(var(--cards)*var(--cardTopPadding))]">
        {cardsData.map(({ id,  heading, text }, index) => (
          <li
            key={id}
            className={`sticky top-0 pt-[calc(${index + 1}*var(--cardTopPadding))] w-full`}
          >
            <div
              className={`sm-px-16  flex flex-col justify-center  items-center transition-all duration-500 bg-white w-full h-[60vh] `}
            >
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-center">
                {heading}
              </h2>
              <p className="mt-4 p-4  text-center text-sm md:text-base">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackedCard;
