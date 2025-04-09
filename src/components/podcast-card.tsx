import { Link } from "react-router-dom";

type PodcastCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
};

function PodcastCard({ image, title, description, price, id }: PodcastCardProps) {

  return (
    <Link to={'/podcast/'+id}>
    <div className="p-2 shadow-lg rounded-br-2xl lg:rounded-t-4xl rounded-t-2xl lg:rounded-br-4xl max-w-80">
      <div className="relative">
        <div className="w-full m-auto overflow-hidden rounded-t-2xl lg:rounded-t-4xl lg:max-h-60">
          <img src={image} alt={title} className="object-scale-down" />
        </div>
      </div>
      <h3 className="my-2 text-lg font-semibold text-accent-secondary">
        {title}
      </h3>
      <p className="mb-6 text-base line-clamp-2 text-ellipsis">{description}</p>
      <div className="flex items-end justify-between px-3 my-4">
        <span className="text-sm font-semibold text-accent-secondary">
          <span className="text-xl font-bold">{price}</span> جنيه
        </span>
        <div className="flex flex-col items-end gap-2 md:gap-6 md:flex-row">
          <button>
            <Link to={'/podcast/'+id} className="px-4 font-semibold btn">
              اعرف اكثر
            </Link>
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}
export default PodcastCard;
