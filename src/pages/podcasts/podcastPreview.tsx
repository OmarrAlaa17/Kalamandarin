import { PODCASTSDATA } from "@/data/podcasts";
import { useParams } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import microphone from "@/assets/icons/microphone.gif";
import camera from "@/assets/icons/camera.gif";

export const PodcastPreview = () => {
  const { id } = useParams();
  const podcast = PODCASTSDATA.find((podcast) => podcast.id === parseInt(id!));
  const [player, setPlayer] = useState("Youtube");

  useEffect(() => {
    // Scroll l to top of the page when the component mounts smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main>
      <div className="py-14 md:py-18 justify-center my-auto pr-16 flex flex-col mb-12 relative overflow-hidden bg-gradient-to-l from-accent-secondary from-25%">
        <img
          src={podcast?.coverPic}
          alt="cover"
          className="absolute left-[-10%]  md:top-[-180%] top-0  object-fill w-full -z-[10]"
        />
        <h1 className="w-4/5 mt-4 text-3xl font-bold text-white md:text-6xl md:w-[70%]">
          {podcast?.title || ""}
        </h1>
      </div>
      <div className="relative flex flex-col overflow-hidden">
        <div className="hidden md:block w-full h-full -z-[20]">
        <img
          src={microphone}
          alt="cover"
          className="absolute left-[10%] top-[10%] object-fill w-28 -z-[20] -rotate-[20deg]"
        />
        <img
          src={camera}
          alt="cover"
          className="absolute right-[10%] top-[30%] object-fill w-28 -z-[20] rotate-[20deg]"
        />
        <div className="absolute left-[40%]  w-[80rem] -z-[30] opacity-40">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#B3D1C9"
            d="M56,-40.9C71.4,-25.4,81.9,-2.2,78.7,20.5C75.6,43.2,58.8,65.3,38.9,71.3C18.9,77.3,-4.3,67.3,-23.3,55.4C-42.3,43.6,-57,30,-64.9,10.5C-72.8,-9,-73.9,-34.4,-61.9,-49.1C-50,-63.8,-25,-67.7,-2.3,-65.9C20.3,-64,40.6,-56.3,56,-40.9Z"
            transform="translate(100 100)"
          />
        </svg>
        </div>
        <div className="absolute left-[15%] -top-10  w-[20rem] -z-[30] opacity-40 rotate-90">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F6BD60"
            d="M56,-40.9C71.4,-25.4,81.9,-2.2,78.7,20.5C75.6,43.2,58.8,65.3,38.9,71.3C18.9,77.3,-4.3,67.3,-23.3,55.4C-42.3,43.6,-57,30,-64.9,10.5C-72.8,-9,-73.9,-34.4,-61.9,-49.1C-50,-63.8,-25,-67.7,-2.3,-65.9C20.3,-64,40.6,-56.3,56,-40.9Z"
            transform="translate(100 100)"
          />
        </svg>
        </div>
        </div>

        <ul className="flex flex-row justify-center w-[80%] m-auto mb-10 gap-4">
          <li>
            <button
              onClick={() => {
                setPlayer("Spotify");
              }}
              className={`flex items-center justify-end rounded-e-4xl gap-4 border-2 border-[#2ebd59] min-w-44 hover:bg-[#2ebd59] hover:border-[#2ebd59] transition-all duration-300 ${
                player === "Spotify" ? "bg-[#2ebd59] " : "bg-primary"
              }`}
            >
              <p
                className={`font-mono text-lg font-extrabold hover:text-primary  ${
                  player === "Spotify" ? "text-primary" : "text-secondary"
                }`}
              >
                Spotify
              </p>
              <SocialIcon url="https://spotify.com" label="Youtube" as="div" />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPlayer("Youtube");
              }}
              className={`flex items-center justify-start rounded-s-full gap-4 border-2 border-[#ff3333] min-w-44 hover:bg-[#ff3333] hover:border-[#ff3333] transition-all duration-300 ${
                player === "Youtube" ? "bg-[#ff3333] " : "bg-primary"
              }`}
            >
              <SocialIcon
                url="https://youtube.com"
                label="Youtube"
                as="div"
                className="translate-x-1"
              />
              <p
                className={`font-mono text-lg font-extrabold hover:text-primary ${
                  player === "Youtube" ? "text-primary" : "text-secondary"
                }`}
              >
                Youtube
              </p>
            </button>
          </li>
        </ul>
        {player === "Youtube" ? (
          <div className="flex md:w-[50%] w-[90%] m-auto mb-8 md:justify-around md:flex-row md:min-h-[60vh] min-h-[40vh] shadow-lg">
            <iframe
              width="100%"
              height="full"
              src={podcast?.link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ) : (
          <div className="flex md:w-[50%] w-[90%] m-auto mb-8 items-center md:justify-around md:flex-row md:min-h-[60vh] min-h-[40vh]">
            <iframe
              style={{
                borderRadius: "12px",
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              src={podcast?.spotifyLink}
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </main>
  );
};
