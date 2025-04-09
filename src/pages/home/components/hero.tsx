import { Link } from "react-router-dom";
import "./hero.css";
import arrow from "@/assets/icons/curved-arrow-with-broken-line.png";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 px-8 pt-16 pb-16 lg:px-16 lg:flex-row bg-primary after:absolute">
      <div className="absolute w-1/2 -top-10 -right-10 h-1/2 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F6BD60"
            d="M56,-40.9C71.4,-25.4,81.9,-2.2,78.7,20.5C75.6,43.2,58.8,65.3,38.9,71.3C18.9,77.3,-4.3,67.3,-23.3,55.4C-42.3,43.6,-57,30,-64.9,10.5C-72.8,-9,-73.9,-34.4,-61.9,-49.1C-50,-63.8,-25,-67.7,-2.3,-65.9C20.3,-64,40.6,-56.3,56,-40.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute w-3/4 bottom-10 left-10 h-1/2 opacity-10">
        <img
          src={arrow}
          alt="arrow"
          className="absolute md:left-0 md:-bottom-36 -bottom-20 -left-10"
        />
      </div>
      <div className="flex basis-1/2">
        <div className="flex flex-col items-center justify-start my-auto lg:items-start h-3/5">
          <div className="text-2xl font-bold bg-primary-gradient bg-clip-text text-accent-primary">
            انطلق في مغامرة لغوية فريدة،
            <h1 className="inline px-2 text-3xl font-extrabold text-transparent bg-primary-gradient bg-clip-text">
              كلامندرين
            </h1>
            هو جسرك الفريد الذي يربط بين جماليات اللغة العربية وعمق التعابير
            الصينية الدارجة لتجربة تعلم لا مثيل لها. لتفتح لك آفاقًا جديدة في
            عالم التواصل
          </div>
          <div className="z-10 flex flex-row items-center justify-center gap-4 mt-8 text-lg">
            <button className="px-10 py-2 transition-all border-2 rounded-lg duration-50 border-accent-secondary bg-accent-secondary text-primary hover:cursor-pointer hover:bg-accent-secondary/80 hover:font-semibold">
              <Link to="/text" className="">
                <p>اكتشف اكثر</p>
              </Link>
            </button>
            <button className="px-10 py-2 transition-all border-2 rounded-lg duration-50 border-accent-secondary hover:cursor-pointer hover:bg-accent-secondary/5 hover:font-semibold min-w-40">
              <Link to="/podcasts" className="">
                <p className="w-full">بودكاست</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end basis-1/2">
        <div className="hero-grid">
          <div className="hero-grid__yellow leaf-off-diagonal bg-accent-yellow"></div>
          <div className="hero-grid__green leaf-main-diagonal bg-accent-green"></div>
          <img
            src="https://c.stocksy.com/a/QQqL00/z9/5206414.jpg"
            className="hero-grid__top-left leaf-main-diagonal"
          />
          <img
            src="https://c.stocksy.com/a/KscM00/z9/5392656.jpg"
            className="hero-grid__top-right leaf-off-diagonal"
          />
          <img
            src="https://c.stocksy.com/a/0QwM00/z9/5467780.jpg"
            className="hero-grid__bottom-left leaf-main-diagonal"
          />
          <img
            src="https://c.stocksy.com/a/HLMQ00/z9/6282415.jpg"
            className="hero-grid__bottom-right leaf-off-diagonal"
          />
        </div>
      </div>
    </section>
  );
};
