import { Flower } from "@/assets/icons/home/flower";
import img from "../../../assets/images/aboutus/fatema.png";
import { Leaf } from "@/assets/icons/leaf";
export const AboutUs = () => {
  return (
    <section className="px-8 pt-8 lg:pt-0 lg:px-20 relative bg-accent-primary ">
      <Flower className=" absolute lg:block hidden top-[-13%] left-0 w-[9rem]" />
      <Leaf className="fill-accent-yellow absolute top-[-15%] right-0 w-[9rem]" />
      <h2 className=" relative lg:hidden block">
        <span className="z-10 text-accent-secondary font-bold text-3xl ">
          تعرف على مدربنا الرئيسي
        </span>
      </h2>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start w-full gap-6 py-10 relative">
        <div className="basis-3/5">
          <h2 className="mb-16 relative hidden lg:block">
            <span className="z-10 text-accent-secondary font-bold text-2xl ">
              تعرف على مدربنا الرئيسي
            </span>
          </h2>
          <p className="w-[95%] lg:w-[80%] lg:text-right text-center text-lg leading-7 m-auto lg:m-0">
            أم لطفلين، مستشار نفسي وتربوي وباحثة في علم العادات، خريجة كلية
            الحاسبات والمعلومات. حاصلة على دبلوم عام في علم النفس التربوي،
            ودبلوم خاص تخصص علم النفس التربوي وإرشاد أسري، وتمهيدي ماجستير.
            حالياً طالبة ماجستير في علم العادات. تخرجت من فقة النفس مع د. عبد
            الرحمن زاكر، ومن أمومة واعية مع الشيخ محمد خيري. أتممت أربع مستويات
            في أكاديمية زاد، وأتممت المستوى الأول في أكاديمية هندسة الأجيال.
            حصلت على كورس العادات من صاحب كتاب العادات الذرية، جيمس كلير. بدأت
            رحلتي في تعليم وتدريس الأمهات منذ عام ٢٠٢٠ حتى الآن، وتستمر
            الرحلة...
          </p>
        </div>
        <div className="w-full basis-2/5 flex flex-row-reverse lg:flex-col items-center justify-between gap-6">
          {/* <Flower /> */}
          <div className="relative">
            <img src={img} alt="about us" className="w-[10rem] lg:w-[15rem]" />
            <Leaf className="fill-accent-pink lg:block hidden absolute top-[60%] right-[70%] w-[9rem]" />
          </div>
          <h1 className="text-accent-secondary font-semibold text-xl">
            فاطمة الزهراء طارق
          </h1>
        </div>
      </div>
    </section>
  );
};
