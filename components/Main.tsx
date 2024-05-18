"use client";

import Text from "./common/Text";
import GasPriceCard from "./Card";
import { useMemo } from "react";
import { useGasPrice } from "@/context/GasPriceContext";
import MaxWidthWrapper from "./common/MaxWidthWrapper";

const Main = () => {
    const { gasPrices, ethData, isLoading, countdownGas } = useGasPrice();

    const gasLimit = 21000; // Typical gas limit for a simple ETH transfer

    // Ensure gasPrices and ethData are numbers
    const gweiToEth = 1e-9;
    const ethPrice = Number(ethData?.usd);

    // Function to calculate the transaction cost in USD
    const calculateTxCostInUsd = (gasPriceInGwei: number) => {
        const gasPriceInEth = gasPriceInGwei * gweiToEth;
        const txCostInEth = gasPriceInEth * gasLimit;
        return txCostInEth * ethPrice;
    };

    const gasPriceData = useMemo(
        () => [
            {
                label: "Low",
                gweiPrice: gasPrices?.SafeGasPrice,
                usdPrice: calculateTxCostInUsd(Number(gasPrices?.SafeGasPrice)),
                colorClass: "text-green-500",
            },
            {
                label: "Average",
                gweiPrice: gasPrices?.ProposeGasPrice,
                usdPrice: calculateTxCostInUsd(Number(gasPrices?.ProposeGasPrice)),
                colorClass: "text-blue-500",
            },
            {
                label: "High",
                gweiPrice: gasPrices?.FastGasPrice,
                usdPrice: calculateTxCostInUsd(Number(gasPrices?.FastGasPrice)),
                colorClass: "text-red-500",
            },
        ],
        [gasPrices, ethPrice]
    );

    return (
        <div className="min-h-[calc(100vh-56px)] bg-gray-50 bg-[url('https://etherscan.io/assets/svg/patterns/waves.svg')] bg-repeat px-5 md:min-h-[calc(100vh-85px)] md:px-12 lg:px-16 xl:px-20">
            <MaxWidthWrapper>
                <div className="flex w-full items-center justify-center py-14">
                    <Text size="body1" color="text-black" className="!font-bold">
                        Ethereum Gas Tracker ⛽
                    </Text>
                </div>
                <div className="flex items-center justify-between">
                    <Text size="button3" color="text-black" className="py-3 normal-case">
                        Next update in <span className="text-blue-500">{countdownGas}s</span>
                    </Text>
                    <a
                        href="https://docs.etherscan.io/api-endpoints/gas-tracker"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 items-center justify-center rounded-full border border-gray-300 bg-white px-4 hover:bg-gray-100"
                    >
                        <Text size="body5" color="text-black">
                            <span className="font-bold">{"<"}</span>/<span className="font-bold">{">"}</span> API Docs
                        </Text>
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-5 py-4 md:grid-cols-3 md:gap-7 xl:gap-10">
                    {gasPriceData.map(({ label, gweiPrice, usdPrice, colorClass }) => (
                        <GasPriceCard
                            key={label}
                            label={label}
                            gweiPrice={gweiPrice}
                            usdPrice={usdPrice}
                            colorClass={colorClass}
                            isLoading={isLoading}
                        />
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Main;
