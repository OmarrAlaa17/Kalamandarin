import logoMob from "@/assets/icons/logo.png";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <>
      <footer className="sticky items-center justify-center hidden shadow-xl bg-accent-primary/5 shadow-slate-600 h-fit md:flex">
        <div className="flex items-center justify-between w-[80%] gap-2 my-4 ">
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="font-bold cursor-pointer text-accent-primary hover:underline">
              جميع الحقوق محفوظة © 2025
            </p>
            <img src={logoMob} alt="logo" className=" w-14" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <SocialIcon url="https://www.instagram.com/kalammandarin/" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://www.tiktok.com/@kalamandarin/" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://www.facebook.com/people/Kalamandarin-%D9%83%D9%84%D8%A7%D9%85%D9%86%D8%AF%D8%B1%D9%8A%D9%86/61571095953016/" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://www.youtube.com/@kalammandarin" fgColor="#1A3A88" bgColor="transparent"/> 
            <SocialIcon url="https://open.spotify.com/show/30ROY32IPXJCHjBWvqjghH?si=01fa615acb5d4b45" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://space.bilibili.com/3546822391892199?plat_id=1&share_from=space&share_medium=iphone&share_plat=ios&share_session_id=F0EF8833-596E-4EAC-8816-D8B351770B0F&share_source=COPY&share_tag=s_i&spmid=main.space-contribution.0.0&timestamp=1735336953&unique_k=ALgq2pL" fgColor="#1A3A88" bgColor="transparent"/>
          </div>
        </div>
      </footer>

      <footer className="flex flex-col items-center w-full pt-4 bg-primary md:hidden bg-accent-primary/5 shadow-slate-600 ">
        <img src={logoMob} alt="logo" className="pb-4 w-28" />

        <p className="mb-8 font-bold cursor-pointer text-accent-primary hover:underline">
          جميع الحقوق محفوظة © 2025
        </p>
        <div className="flex flex-row items-center justify-center">
            <SocialIcon url="https://www.instagram.com/kalammandarin/" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://www.tiktok.com/@kalamandarin/" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://www.facebook.com/people/Kalamandarin-%D9%83%D9%84%D8%A7%D9%85%D9%86%D8%AF%D8%B1%D9%8A%D9%86/61571095953016/" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://www.youtube.com/@kalammandarin" fgColor="#1A3A88" bgColor="transparent"/> 
            <SocialIcon url="https://open.spotify.com/show/30ROY32IPXJCHjBWvqjghH?si=01fa615acb5d4b45" fgColor="#1A3A88" bgColor="transparent"/>
            <SocialIcon url="https://space.bilibili.com/3546822391892199?plat_id=1&share_from=space&share_medium=iphone&share_plat=ios&share_session_id=F0EF8833-596E-4EAC-8816-D8B351770B0F&share_source=COPY&share_tag=s_i&spmid=main.space-contribution.0.0&timestamp=1735336953&unique_k=ALgq2pL" fgColor="#1A3A88" bgColor="transparent"/>
          </div>
      </footer>
    </>
  );
}

export default Footer;
