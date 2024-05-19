import { Block } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchLatestBlocks = async (): Promise<Block[]> => {
    const apiKey = process.env.ETHERSCAN_API_KEY;
    if (!apiKey) {
        throw new Error("API key is not defined");
    }

    const response = await axios.get(`https://api.etherscan.io/api`, {
        params: {
            module: "proxy",
            action: "eth_blockNumber",
            apikey: apiKey,
        },
    });

    const latestBlockNumber = parseInt(response.data.result, 16);

    const blockRequests = [];
    for (let i = 0; i < 3; i++) {
        blockRequests.push(
            axios.get(`https://api.etherscan.io/api`, {
                params: {
                    module: "proxy",
                    action: "eth_getBlockByNumber",
                    tag: `0x${(latestBlockNumber - i).toString(16)}`,
                    boolean: "true",
                    apikey: apiKey,
                },
            })
        );
    }

    const blockResponses = await Promise.all(blockRequests);
    return blockResponses.map((res) => res.data.result as Block);
};

const useLatestBlocks = () => {
    return useQuery({
        queryKey: ["latestBlocks"],
        queryFn: fetchLatestBlocks,
        refetchInterval: 45000,
    });
};

export default useLatestBlocks;
