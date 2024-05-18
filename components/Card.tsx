import React from "react";
import Text from "./common/Text";
import SkeletonBox from "./common/SkeletonBox";

interface GasPriceCardProps {
    label: string;
    gweiPrice: number | string;
    usdPrice: number;
    colorClass: string;
    isLoading: boolean;
}

const GasPriceCard: React.FC<GasPriceCardProps> = ({ label, gweiPrice, usdPrice, colorClass, isLoading }) => {
    const gasInGwei = () => {
        if (isLoading) {
            return <SkeletonBox height="h-3 md:h-4 lg:h-4.5 2xl:h-5" width="w-16" bgColor="light" className="my-2" />;
        }

        return (
            <Text size="body3" color={colorClass} className="!font-bold">
                {gweiPrice} Gwei
            </Text>
        );
    };

    const gasInUsd = () => {
        if (isLoading || isNaN(usdPrice)) {
            return <SkeletonBox height="h-2 md:h-3 lg:h-3.5" width="w-20" bgColor="medium" />;
        }

        return (
            <Text size="caption3" color="text-gray-500">
                ${usdPrice.toFixed(2)}
            </Text>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white py-6 shadow-strong">
            <Text size="body2" color="text-black" className="!font-bold">
                {label}
            </Text>
            {gasInGwei()}
            {gasInUsd()}
        </div>
    );
};

export default GasPriceCard;
