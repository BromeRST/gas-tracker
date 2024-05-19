interface SkeletonBoxProps {
    height: string;
    width: string;
    bgColor: "dark" | "medium" | "light";
    className?: string;
    "data-testid"?: string;
}

const SkeletonBox: React.FC<SkeletonBoxProps> = ({ height, width, bgColor, className, "data-testid": testId }) => {
    const bgColorClasses = {
        dark: "bg-slate-500",
        medium: "bg-gray-500",
        light: "bg-gray-300",
    };

    return (
        <div
            data-testid={testId || "skeleton"}
            className={`${height} ${width} ${bgColorClasses[bgColor]} animate-pulse rounded-md ${className ?? ""}`}
        ></div>
    );
};

export default SkeletonBox;
