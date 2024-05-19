interface CardShapeProps {
    children: React.ReactNode;
}

const CardShape = ({ children }: CardShapeProps) => (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white py-6 shadow-strong">{children}</div>
);

export default CardShape;
