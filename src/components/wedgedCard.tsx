import React from "react";

type WedgedCardProps = {
    cardNumber: number;
    title: string;
    explanation: string;
    roundedCorner?: "tr" | "br" | "bl" | "tl";
    children: React.ReactNode;
};

function WedgedCard({ cardNumber, title, explanation, roundedCorner, children }: WedgedCardProps) {

    const heartClass = `
        w-12 relative after:content-[attr(data-card-number)]
        after:text-primary after:text-xl after:inset-0 after:absolute
        after:text-center after:self-center after:font-semibold
    `;
    const roundedCornerDict = {
        tr: "rounded-tr-[10rem]",
        br: "rounded-br-[10rem]",
        bl: "rounded-bl-[10rem]",
        tl: "rounded-tl-[10rem]",
    };
    return (
        <div className="flex flex-col items-center justify-center gap-4 my-6">
            <div className={heartClass} data-card-number={cardNumber}>
                {/* <img src={smallHeart} alt="small heart" /> */}
            </div>

            <div className={`rounded-2xl h-64 w-64 flex justify-center items-center bg-primary ${roundedCorner && roundedCornerDict[roundedCorner]} shadow-primary shadow-secondary/20`}>
                {children}
            </div>

            <h4 className="text-xl font-semibold text-accent-primary">
                {title}
            </h4>
            <p className="w-3/5 text-[1.2rem] lg:text-base font-medium text-center text-secondary text-balance">
                {explanation}
            </p>
        </div>
    );
};

export default WedgedCard;
