interface SkeletonBoxProps {
    height: string;
    width: string;
    bgColor: "dark" | "medium" | "light";
    className?: string;
}

const SkeletonBox = ({ height, width, bgColor, className }: SkeletonBoxProps) => {
    const bgColorClasses = {
        dark: "bg-slate-500",
        medium: "bg-gray-500",
        light: "bg-gray-300",
    };

    return <div className={`${height} ${width} ${bgColorClasses[bgColor]} animate-pulse rounded-md ${className ?? ""}`}></div>;
};

export default SkeletonBox;
