"use client";

import { useGasPrice } from "@/context/GasPriceContext";
import Text from "./common/Text";

const Navbar = () => {
    const { ethData, isLoading } = useGasPrice();
    const isNegative = ethData?.usd_24h_change < 0;

    if (isLoading) {
        return (
            <div className="relative z-10 flex h-14 w-full items-center bg-white px-5 shadow-medium md:h-[85px] md:px-12 lg:px-16 xl:px-20">
                <Text size="h5" color="text-black">
                    Gas Tracker
                </Text>
            </div>
        );
    }

    return (
        <div className="relative z-10 flex h-14 w-full items-center bg-white px-5 shadow-medium md:h-[85px] md:px-12 lg:px-16 xl:px-20">
            <Text size="h5" color="text-black">
                Gas Tracker
            </Text>
            <div className="ml-auto flex items-center">
                <Text size="body5" color="text-black" className="mr-1">
                    ETH Price: <span className="text-blue-500">${ethData?.usd.toFixed(2)}</span>
                </Text>
                <Text size="body5" color={isNegative ? "text-red-500" : "text-green-500"}>
                    ({ethData?.usd_24h_change?.toFixed(2)}%)
                </Text>
            </div>
        </div>
    );
};

export default Navbar;