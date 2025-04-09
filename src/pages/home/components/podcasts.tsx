import { Card } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import { PODCASTSDATA } from "@/data/podcasts";
import microphone from "@/assets/icons/microphone.gif";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PodcastsProps {
  title?: boolean;
  // True if title is used like in the home page
  // False if title is used like in the podcasts page
}
export const Podcasts = ({ title }: PodcastsProps) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <section className="relative">
      {title && (
        <>
          <h2 className="z-10 text-4xl font-extrabold text-center">بودكاست</h2>
          <img
            src={microphone}
            alt="cover"
            className="absolute md:left-[37%] left-[10%] md:-top-[5%] top-0 object-fill md:w-28 w-20 -z-[20] -rotate-[20deg]"
          />
        </>
      )}
      <div className="w-3/4 pt-10 mx-auto md:w-4/5 ">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent className="flex-row-reverse justify-between px-2 pt-6 pb-10">
            {PODCASTSDATA.map((podcast, index) => (
              <CarouselItem
                key={index}
                className="w-full xl:basis-1/3 md:basis-1/2"
              >
                <div className="relative">
                  <Link to={`/podcast/${podcast.id}`}>
                    <Card
                      className={`rounded-3xl border-2 border-accent-secondary before:content-[''] before:absolute before:inset-0 before:block before:rounded-3xl before:z-10  ${
                        index === 0
                          ? "before:bg-red-card-gradient hover:before:opacity-60"
                          : index === 1
                          ? "before:bg-green-card-gradient hover:before:opacity-60"
                          : index === 2
                          ? "before:bg-blue-card-gradient hover:before:opacity-60"
                          : "before:bg-yellow-card-gradient hover:before:opacity-60"
                      } hover:cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:shadow-lg`}
                    >
                      <img
                        src={podcast.image}
                        alt="cover"
                        className="object-center w-full aspect-square rounded-3xl"
                      />
                      <h1 className="absolute bottom-0 z-10 px-6 pb-3 text-lg font-semibold text-primary">
                        {podcast.title}
                      </h1>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-accent-secondary text-primary focus:bg-accent-secondary focus:text-primary lg:flex" />
          <CarouselNext className=" bg-accent-secondary text-primary focus:bg-accent-secondary focus:text-primary lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};
