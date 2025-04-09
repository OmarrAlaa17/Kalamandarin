import { cn } from "@/lib/utils";

interface Props {
    title: string;
    align: string;
    className?: string;
}

function Header(props: Props) {
    return (
        <h2 className={cn(`text-accent-primary lg:text-4xl text-3xl font-bold  ${props.align === "right" ? "text-right lg:mr-40 mr-12" : "text-center"}`, props.className)} >{props.title}</h2>
    );
}

export default Header;