import { NAVDATA } from "@/data/navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/icons/logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { BurgerMenu } from "@/assets/icons/burger-menu";
import { DialogClose } from "@radix-ui/react-dialog";

function Navbar() {
  const location = useLocation();

  const renderNavLinks = (isMobile: boolean) => {
    return (
      <>
        {NAVDATA.map((item, index) => {
          if (isMobile)
            return (
              <DialogClose asChild>
                <Link
                  key={index}
                  to={item.url}
                  className={
                    location.pathname === item.url
                      ? "text-accent-secondary"
                      : ""
                  }
                >
                  {item.title}
                </Link>
              </DialogClose>
            );

          return (
            <Link
              key={index}
              to={item.url}
              className={
                location.pathname === item.url
                  ? "text-accent-secondary"
                  : ""
              }
            >
              {item.title}
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div className="z-20 flex items-center justify-between px-8 py-4 border-b shadow-md lg:px-16 bg-primary">
      <Link to="/" className="flex flex-row items-center justify-center gap-2 py-2">
        <img src={logo} alt="logo" className="w-20" />
      </Link>
      <nav className="hidden gap-6 text-lg font-semibold md:flex underline-offset-8 decoration-2">
        {renderNavLinks(false)}
      </nav>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <button
            aria-label="Navbar"
            className="p-2 rounded-md fill-accent-secondary"
          >
            <BurgerMenu className="size-8" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col w-full gap-4 text-lg bg-primary"
        >
          <SheetHeader className="w-full mb-6 border-b border-b-accent-secondary">
            <DialogClose asChild>
              <Link
                to="/"
                className="flex flex-col items-center justify-center text"
              >
                <img src={logo} alt="logo" className="w-32 pb-10" />
              </Link>
            </DialogClose>
          </SheetHeader>
          <div className="flex flex-col items-center justify-between h-full pb-16 text-center">
            <div className="flex flex-col gap-8 text-xl font-semibold underline-offset-8 decoration-2">
              {renderNavLinks(true)}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Navbar;
