import React, { createContext, useContext, ReactNode } from "react";
import useGasAndEthPrice from "@/hooks/useGasAndEthPrice";
import { GasPriceContextProps } from "@/lib/types";

const GasPriceContext = createContext<GasPriceContextProps | undefined>(undefined);

export const GasPriceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { gasPrices, ethData, isLoading, error, countdownGas } = useGasAndEthPrice();

    return <GasPriceContext.Provider value={{ gasPrices, ethData, isLoading, error, countdownGas }}>{children}</GasPriceContext.Provider>;
};

export const useGasPrice = () => {
    const context = useContext(GasPriceContext);
    if (context === undefined) {
        throw new Error("useGasPrice must be used within a GasPriceProvider");
    }
    return context;
};
