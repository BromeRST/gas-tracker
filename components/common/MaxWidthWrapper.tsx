interface MaxWidthWrapperProps {
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
    return <div className={`mx-auto h-full max-w-[1400px]`}>{children}</div>;
};

export default MaxWidthWrapper;
