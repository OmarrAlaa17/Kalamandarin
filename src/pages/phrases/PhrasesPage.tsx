import coverPic5 from "@/assets/images/coverPic5.png";
import GoogleSheetsTable from "./GoogleSheetsTable";

export const PhrasesPage = () => {
  return (
    <main>
      <div className="py-20 justify-center my-auto pr-16 flex flex-col relative overflow-hidden bg-gradient-to-l from-accent-primary from-25%">
        <img
          src={coverPic5}
          alt="cover"
          className="absolute right-[15%] top-0 md:top-[-210%] object-fill w-full -z-[10]"
        />
        <h1 className="text-4xl font-bold text-white">المصطلحات</h1>
      </div>
      <div className="flex items-center justify-center min-h-80">
        <GoogleSheetsTable />
      </div>
    </main>
  );
};
