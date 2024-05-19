import useLatestBlocks from "@/hooks/useLatestBlocks";
import CardShape from "./Card/CardShape";
import SkeletonBox from "./common/SkeletonBox";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import Text from "./common/Text";
import { Block } from "@/lib/types";
import React from "react";
import { addressShortFormat } from "@/lib";
import useErrorHandler from "@/hooks/useErrorHandler";

const LatestBlocks: React.FC = () => {
    const { data: blocks, isLoading, error } = useLatestBlocks();
    useErrorHandler(error);

    const getTimeElapsed = (timestamp: string) => {
        const secondsElapsed = Math.round(Date.now() / 1000 - parseInt(timestamp, 16));
        if (secondsElapsed < 60) {
            return `${secondsElapsed} secs ago`;
        } else {
            const minutesElapsed = Math.round(secondsElapsed / 60);
            return `${minutesElapsed} min ago`;
        }
    };

    const renderSkeletonCard = () => (
        <CardShape>
            <SkeletonBox height="h-4 md:h-5 lg:h-6 xl:h-7" width="w-40" bgColor="light" />
            <SkeletonBox height="h-2 md:h-3 lg:h-3.5 xl:h-4" width="w-32" bgColor="medium" className="mt-2" />
            <SkeletonBox height="h-3 md:h-3.5 lg:h-4 xl:h-5" width="w-28" bgColor="medium" className="mt-2" />
            <SkeletonBox height="h-2.5 md:3 lg:h-3.5 xl:h-4" width="w-44" bgColor="medium" className="mt-2" />
        </CardShape>
    );

    const getEtherscanMinerUrl = (minerAddress: string) => {
        return `https://etherscan.io/address/${minerAddress}`;
    };

    const showSkeleton = isLoading || error || !blocks || blocks.length === 0;

    return (
        <MaxWidthWrapper>
            <div className="py-4">
                <Text size="button3" color="text-black" className="normal-case">
                    Latest Blocks
                </Text>
                <div className="grid grid-cols-1 gap-5 py-4 md:grid-cols-3 md:gap-7 xl:gap-10">
                    {showSkeleton
                        ? Array.from({ length: 3 }).map((_, index) => <React.Fragment key={index}>{renderSkeletonCard()}</React.Fragment>)
                        : blocks.map((block: Block, index: number) => (
                              <CardShape key={index}>
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
                                      <a
                                          href={getEtherscanMinerUrl(block.miner)}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-500 hover:underline"
                                      >
                                          {addressShortFormat(block.miner)}
                                      </a>
                                  </Text>
                              </CardShape>
                          ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default LatestBlocks;
