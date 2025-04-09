import coverPic2 from '@/assets/images/coverPic2.png';
import {Podcasts} from "@/pages/home/components/podcasts";

export const PodcastsPage = () => {
  return (
    <main>
      <div className="py-20 justify-center my-auto pr-16 flex flex-col relative overflow-hidden bg-gradient-to-l from-accent-primary from-25%">
        <img src={coverPic2} alt='cover' className='absolute left-0 top-0 md:top-[-270%] object-fill w-full -z-[10]' />
        <h1 className="text-4xl font-bold text-white">جميع حلقات البودكاست</h1>
      </div>
      <div className='flex py-8'>
       <Podcasts />
       </div>
    </main>
  );
};
