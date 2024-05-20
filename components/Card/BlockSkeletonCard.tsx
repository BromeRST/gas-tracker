import React from "react";
import CardShape from "./CardShape";
import SkeletonBox from "../common/SkeletonBox";

const BlockSkeletonCard: React.FC = () => (
    <CardShape>
        <SkeletonBox height="h-4 md:h-5 lg:h-6 xl:h-7" width="w-40" bgColor="light" />
        <SkeletonBox height="h-2 md:h-3 lg:h-3.5 xl:h-4" width="w-32" bgColor="medium" className="mt-2" />
        <SkeletonBox height="h-3 md:h-3.5 lg:h-4 xl:h-5" width="w-28" bgColor="medium" className="mt-2" />
        <SkeletonBox height="h-2.5 md:3 lg:h-3.5 xl:h-4" width="w-44" bgColor="medium" className="mt-2" />
    </CardShape>
);

export default BlockSkeletonCard;
