import React from "react";
import { Block } from "@/lib/types";
import { addressShortFormat } from "@/lib";
import BlockSkeletonCard from "./BlockSkeletonCard";
import CardShape from "./CardShape";
import Text from "../common/Text";

interface BlockCardProps {
    block: Block | null;
}

const BlockCard: React.FC<BlockCardProps> = ({ block }) => {
    const getEtherscanMinerUrl = (minerAddress: string) => {
        return `https://etherscan.io/address/${minerAddress}`;
    };

    const getTimeElapsed = (timestamp: string) => {
        const secondsElapsed = Math.round(Date.now() / 1000 - parseInt(timestamp, 16));
        if (secondsElapsed < 60) {
            return `${secondsElapsed} secs ago`;
        } else {
            const minutesElapsed = Math.round(secondsElapsed / 60);
            return `${minutesElapsed} min ago`;
        }
    };

    if (!block || isNaN(parseInt(block.number, 16))) {
        return <BlockSkeletonCard />;
    }

    return (
        <CardShape>
            <Text size="body1" color="text-blue-400">
                {parseInt(block.number, 16)}
            </Text>
            <Text size="body4" color="text-gray-600">
                {getTimeElapsed(block.timestamp)}
            </Text>
            <Text size="body3" color="text-gray-600">
                {block.transactions?.length} txs
            </Text>
            <Text size="body4" color="text-gray-600">
                Miner:{" "}
                <a href={getEtherscanMinerUrl(block.miner)} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {addressShortFormat(block.miner)}
                </a>
            </Text>
        </CardShape>
    );
};

export default BlockCard;
