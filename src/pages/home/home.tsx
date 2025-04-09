import { Hero } from "./components/hero";
import { Podcasts } from "./components/podcasts";
import { Courses } from "./components/courses";
function Home() {
  return (
    <main className="flex flex-col gap-12 min-h-[50vh]">
      <Hero />
      {/* <Courses />  */}
      <Podcasts title={true}/>
    </main>
  );
}

export default Home;
