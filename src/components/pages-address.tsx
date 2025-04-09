type PageAddressProps = {
  routes: string[];
};
export const PagesAddress = (props: PageAddressProps) => {
  return (
    <div>
      {props.routes.map((item, index) => {
        return (
          <span className="hidden text-base md:flex md:flex-row text-accent-yellow">{item} {index!==props.routes.length -1? '>': ''} </span>
        );
      })}
    </div>
  );
};
