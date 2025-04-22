import logoMob from "@/assets/icons/logo.png";
import { SocialIcon } from "react-social-icons";
import image from "@/assets/icons/camera.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="sticky items-center justify-center hidden shadow-xl shadow-slate-600 h-fit md:flex">
        <div className="flex items-center justify-between w-[80%] gap-2 my-4 ">
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="font-bold text-black cursor-pointer hover:underline">
              جميع الحقوق محفوظة © 2025
            </p>
            <img src={logoMob} alt="logo" className=" w-14" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <Link
              to="https://www.instagram.com/kalammandarin/"
              target="_blank"
              className="mx-3 w-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="instagram"
              >
                <path
                  d="M5.41421,1.17157c1.17157,1.17157 1.17157,3.07107 0,4.24264c-1.17157,1.17157 -3.07107,1.17157 -4.24264,0c-1.17157,-1.17157 -1.17157,-3.07107 -8.88178e-16,-4.24264c1.17157,-1.17157 3.07107,-1.17157 4.24264,-8.88178e-16"
                  transform="translate(4.707 4.707)"
                ></path>
                <path d="M11.5,0h-7c-2.48145,0 -4.5,2.01855 -4.5,4.5v7c0,2.48145 2.01855,4.5 4.5,4.5h7c2.48145,0 4.5,-2.01855 4.5,-4.5v-7c0,-2.48145 -2.01855,-4.5 -4.5,-4.5Zm-3.5,12c-2.20557,0 -4,-1.79395 -4,-4c0,-2.20605 1.79443,-4 4,-4c2.20557,0 4,1.79395 4,4c0,2.20605 -1.79443,4 -4,4Zm4.5,-8c-0.276123,0 -0.5,-0.223877 -0.5,-0.5c0,-0.276184 0.223877,-0.5 0.5,-0.5c0.276123,0 0.5,0.223816 0.5,0.5c0,0.276123 -0.223877,0.5 -0.5,0.5Z"></path>
              </svg>
            </Link>
            <SocialIcon
              url="https://www.tiktok.com/@kalamandarin/"
              fgColor="#000000"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.facebook.com/people/Kalamandarin-%D9%83%D9%84%D8%A7%D9%85%D9%86%D8%AF%D8%B1%D9%8A%D9%86/61571095953016/"
              fgColor="#000000"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.youtube.com/@kalammandarin"
              fgColor="#000000"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://open.spotify.com/show/30ROY32IPXJCHjBWvqjghH?si=01fa615acb5d4b45"
              fgColor="#000000"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://space.bilibili.com/3546822391892199?plat_id=1&share_from=space&share_medium=iphone&share_plat=ios&share_session_id=F0EF8833-596E-4EAC-8816-D8B351770B0F&share_source=COPY&share_tag=s_i&spmid=main.space-contribution.0.0&timestamp=1735336953&unique_k=ALgq2pL"
              fgColor="#000000"
              bgColor="transparent"
            />
          </div>
        </div>
      </footer>

      <footer className="flex flex-col items-center w-full pt-4 md:hidden shadow-slate-600 ">
        <img src={logoMob} alt="logo" className="pb-4 w-28" />

        <p className="mb-8 font-bold cursor-pointer text-blsck hover:underline">
          جميع الحقوق محفوظة © 2025
        </p>
        <div className="flex flex-row items-center justify-center">
        <Link
              to="https://www.instagram.com/kalammandarin/"
              target="_blank"
              className="w-8 mx-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="instagram"
              >
                <path
                  d="M5.41421,1.17157c1.17157,1.17157 1.17157,3.07107 0,4.24264c-1.17157,1.17157 -3.07107,1.17157 -4.24264,0c-1.17157,-1.17157 -1.17157,-3.07107 -8.88178e-16,-4.24264c1.17157,-1.17157 3.07107,-1.17157 4.24264,-8.88178e-16"
                  transform="translate(4.707 4.707)"
                ></path>
                <path d="M11.5,0h-7c-2.48145,0 -4.5,2.01855 -4.5,4.5v7c0,2.48145 2.01855,4.5 4.5,4.5h7c2.48145,0 4.5,-2.01855 4.5,-4.5v-7c0,-2.48145 -2.01855,-4.5 -4.5,-4.5Zm-3.5,12c-2.20557,0 -4,-1.79395 -4,-4c0,-2.20605 1.79443,-4 4,-4c2.20557,0 4,1.79395 4,4c0,2.20605 -1.79443,4 -4,4Zm4.5,-8c-0.276123,0 -0.5,-0.223877 -0.5,-0.5c0,-0.276184 0.223877,-0.5 0.5,-0.5c0.276123,0 0.5,0.223816 0.5,0.5c0,0.276123 -0.223877,0.5 -0.5,0.5Z"></path>
              </svg>
            </Link>
          <SocialIcon
            url="https://www.tiktok.com/@kalamandarin/"
            fgColor="#000000"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/people/Kalamandarin-%D9%83%D9%84%D8%A7%D9%85%D9%86%D8%AF%D8%B1%D9%8A%D9%86/61571095953016/"
            fgColor="#000000"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.youtube.com/@kalammandarin"
            fgColor="#000000"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://open.spotify.com/show/30ROY32IPXJCHjBWvqjghH?si=01fa615acb5d4b45"
            fgColor="#000000"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://space.bilibili.com/3546822391892199?plat_id=1&share_from=space&share_medium=iphone&share_plat=ios&share_session_id=F0EF8833-596E-4EAC-8816-D8B351770B0F&share_source=COPY&share_tag=s_i&spmid=main.space-contribution.0.0&timestamp=1735336953&unique_k=ALgq2pL"
            fgColor="#000000"
            bgColor="transparent"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
