import { TextSizeType } from "@/lib/types";

interface AavegotchiTextBodyProps {
    size?: TextSizeType;
    className?: string;
    children: React.ReactNode;
    color?: string;
}

const Text = ({ size = "body3", children, className, color = "text-white" }: AavegotchiTextBodyProps) => {
    const classes = `${color} ${className} ${getTextsizes(size)} ${size.indexOf("body") === -1 && size.indexOf("subtitle") === -1 ? "uppercase" : ""}`;

    if (
        [
            "display1",
            "display2",
            "subtitle1",
            "subtitle2",
            "subtitle3",
            "subtitle4",
            "caption1",
            "caption2",
            "caption3",
            "button1",
            "button2",
            "button3",
        ].includes(size)
    ) {
        return <div className={classes}>{children}</div>;
    } else if (["body1", "body2", "body3", "body4", "body5", "body6"].includes(size)) {
        return <p className={classes}>{children}</p>;
    }

    const HeadingMap: { [key in TextSizeType]?: React.FC<React.HTMLAttributes<HTMLHeadingElement>> } = {
        h1: (props) => <h1 {...props} />,
        h2: (props) => <h2 {...props} />,
        h3: (props) => <h3 {...props} />,
        h4: (props) => <h4 {...props} />,
        h5: (props) => <h5 {...props} />,
        h6: (props) => <h6 {...props} />,
        h7: (props) => <div {...props} />,
    };

    const Component = HeadingMap[size];
    if (Component) return <Component className={classes}>{children}</Component>;

    return <p className={`${color} font-kanit font-light ${size} ${className}`}>{children}</p>;
};

const getTextsizes = (size: TextSizeType) => {
    const product = {
        display1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black",
        display2: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black",
        h1: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold",
        h2: "text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold",
        h3: "text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold",
        h4: "text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold",
        h5: "text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg font-bold",
        h6: "text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base font-bold",
        h7: "text-[10px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-bold",
        button1: "text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold",
        button2: "text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-lg font-bold",
        button3: "text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-bold",
        body1: "text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light",
        body2: "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light",
        body3: "text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-light",
        body4: "text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-light",
        body5: "text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base font-light",
        body6: "text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-sm font-light",
        subtitle1: "text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal",
        subtitle2: "text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal",
        subtitle3: "text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-normal",
        subtitle4: "text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base font-normal",
        caption1: "text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-light",
        caption2: "text-[10px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-light",
        caption3: "text-[8px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-xs font-light",
    };

    return product[size];
};

export default Text;
