import React from "react";
import useLatestBlocks from "@/hooks/useLatestBlocks";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import Text from "./common/Text";
import { Block } from "@/lib/types";
import useErrorHandler from "@/hooks/useErrorHandler";
import BlockSkeletonCard from "./Card/BlockSkeletonCard";
import BlockCard from "./Card/BlockCard";

const LatestBlocks: React.FC = () => {
    const { data: blocks, isLoading, error } = useLatestBlocks();
    useErrorHandler(error);

    const showSkeleton = isLoading || error || !blocks || blocks.length === 0;

    return (
        <MaxWidthWrapper>
            <div className="py-4">
                <Text size="button3" color="text-black" className="normal-case">
                    Latest Blocks
                </Text>
                <div className="grid grid-cols-1 gap-5 py-4 md:grid-cols-3 md:gap-7 xl:gap-10">
                    {showSkeleton
                        ? Array.from({ length: 3 }).map((_, index) => <BlockSkeletonCard key={index} />)
                        : blocks.map((block: Block, index: number) => <BlockCard key={index} block={block} />)}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default LatestBlocks;
