import { useState } from "react";
import { lawData } from "../data/data";

const getRandomIndex = (lawData: string | any[]) => {
  const randomIndex = Math.floor(Math.random() * lawData.length);
  return randomIndex;
};

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(getRandomIndex(lawData));

  const handleNewQuote = () => {
    setQuoteIndex(getRandomIndex(lawData));
  };

  return (
    <>
      <article className="hero">
        <img
          className="hero__img"
          src="https://m.media-amazon.com/images/I/61UZS3QA1UL._AC_UF1000,1000_QL80_.jpg"
          alt="Book The 48 Laws of Power"
        />

        <section className="section">
          <h2 className="section__title">{lawData[quoteIndex].law}</h2>
          <p className="section__desc">{lawData[quoteIndex].desc}</p>
          <button onClick={handleNewQuote} className="section__btn">
            Get New Quote
          </button>
        </section>
      </article>
      <p className="tag">
        Made with love by
        <a
          href="https://github.com/KramaDev"
          target="_blank"
          className="tag__signature"
        >
          Mario Kramarić
        </a>{" "}
        © 2024
        <span>
          <img
            className="tag__img"
            src="https://media.licdn.com/dms/image/D4D03AQF18y1YsyIbxA/profile-displayphoto-shrink_800_800/0/1669145631958?e=1720656000&v=beta&t=5NafQkdu1rp6YNcUNZyaPCQUOtE6VVguyvPDb8dK5Q8"
            alt="KramaDev photo"
          />
        </span>
      </p>
    </>
  );
};

export default Hero;
