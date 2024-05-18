import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";

const fetchGasPrices = async () => {
    const apiKey = "8DNB3TBGI4ZKX5YJAGSN33QFDVYS4NMD7R";
    if (!apiKey) {
        throw new Error("API key is not defined");
    }
    const response = await axios.get(`https://api.etherscan.io/api`, {
        params: {
            module: "gastracker",
            action: "gasoracle",
            apikey: apiKey,
        },
    });
    if (response.data.status !== "1") {
        throw new Error("API response status not ok");
    }
    return {
        SafeGasPrice: response.data.result.SafeGasPrice,
        ProposeGasPrice: response.data.result.ProposeGasPrice,
        FastGasPrice: response.data.result.FastGasPrice,
    };
};

const fetchEthPrice = async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
        params: {
            ids: "ethereum",
            vs_currencies: "USD",
            include_24hr_change: "true",
        },
    });
    return response.data.ethereum;
};

const useGasAndEthPrice = () => {
    const [countdownGas, setCountdownGas] = useState(10);
    const [countdownEth, setCountdownEth] = useState(90);

    const gasPricesQuery = useQuery({
        queryKey: ["gasPrices"],
        queryFn: fetchGasPrices,
        refetchInterval: 10000, // Refetch data every 10 seconds
        retry: 3, // Retry failed requests three times
        staleTime: 5000, // Data is considered fresh for 5 seconds
    });

    const ethPriceQuery = useQuery({
        queryKey: ["ethPrice"],
        queryFn: fetchEthPrice,
        refetchInterval: 90000, // Refetch data every 90 seconds
        retry: 3, // Retry failed requests three times
        staleTime: 45000, // Data is considered fresh for 45 seconds
    });

    useEffect(() => {
        const intervalGas = setInterval(() => {
            setCountdownGas((prev) => (prev > 0 ? prev - 1 : 10));
        }, 1000);

        const intervalEth = setInterval(() => {
            setCountdownEth((prev) => (prev > 0 ? prev - 1 : 90));
        }, 1000);

        return () => {
            clearInterval(intervalGas);
            clearInterval(intervalEth);
        };
    }, []);

    useEffect(() => {
        if (countdownGas === 0) {
            gasPricesQuery.refetch();
        }
    }, [countdownGas, gasPricesQuery.refetch]);

    useEffect(() => {
        if (countdownEth === 0) {
            ethPriceQuery.refetch();
        }
    }, [countdownEth, ethPriceQuery.refetch]);

    return {
        gasPrices: gasPricesQuery.data,
        ethData: ethPriceQuery.data,
        error: gasPricesQuery.error || ethPriceQuery.error,
        isLoading: gasPricesQuery.isLoading || ethPriceQuery.isLoading,
        countdownGas,
        countdownEth,
    };
};

export default useGasAndEthPrice;
