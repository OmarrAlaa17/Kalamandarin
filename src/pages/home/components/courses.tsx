import { Leaf } from "@/assets/icons/leaf";
import CourseCard from "@/components/podcast-card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { COURSESDATA } from "@/data/courses";
import { useEffect, useState } from "react";

export const Courses = () => {
  const [api, setApi] = useState<CarouselApi>();

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setSelected(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section>
      <div className="relative w-full">
        <h2 className="relative px-8 mb-4 lg:mb-12 lg:px-20">
          <span className="z-10 text-3xl font-bold">الكورسات</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-2 m-auto mb-8 md:justify-around md:flex-row w-[90vw] lg:w-[80vw]">
          {COURSESDATA.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              price={course.price}
              id={course.id}
            />
          ))}
        </div>
        {/* <div className="w-[90vw] m-auto">
          <Carousel
            opts={{
              align: "center",
            }}
            setApi={setApi}
          >
            <CarouselContent className="flex-row-reverse justify-between py-4">
              {COURSESDATA.map((course, index) => (
                <CarouselItem key={index} className=" xl:basis-1/4 basis-1/2">
                  <CourseCard
                    key={index}
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    id={course.id}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden bg-accent-secondary text-primary focus:bg-accent-secondary focus:text-primary lg:flex" />
            <CarouselNext className="hidden bg-accent-secondary text-primary focus:bg-accent-secondary focus:text-primary lg:flex" />
            <div className="flex justify-between w-1/2 py-3 m-auto lg:w-1/4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-2 rounded-lg ${
                    index === selected
                      ? "bg-accent-green"
                      : "bg-accent-green/40"
                  }`}
                ></div>
              ))}
            </div>
          </Carousel>
        </div> */}
      </div>

      {/* </div> */}
    </section>
  );
};
