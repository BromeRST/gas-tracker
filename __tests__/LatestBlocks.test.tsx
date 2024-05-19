import React from "react";
import { render, screen } from "@testing-library/react";
import LatestBlocks from "@/components/LatestBlocks";
import useLatestBlocks from "@/hooks/useLatestBlocks";
import { addressShortFormat } from "@/lib";

jest.mock("@/hooks/useLatestBlocks");

describe("LatestBlocks Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders skeletons when loading", () => {
        (useLatestBlocks as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: null,
        });

        render(<LatestBlocks />);

        // Ensure three skeleton cards are rendered
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons).toHaveLength(12); // 3 cards * 4 skeletons per card
    });

    it("renders error state", () => {
        (useLatestBlocks as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: new Error("Failed to fetch data"),
        });

        render(<LatestBlocks />);

        // Ensure three skeleton cards are rendered (error state is treated similarly to loading)
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons).toHaveLength(12); // 3 cards * 4 skeletons per card
    });

    it("renders with block data", () => {
        const blocks = [
            {
                number: "0x1",
                timestamp: "0x60db0c7c",
                transactions: [{}, {}, {}],
                miner: "0x1234567890abcdef1234567890abcdef12345678",
            },
            {
                number: "0x2",
                timestamp: "0x60db0c7c",
                transactions: [{}, {}, {}, {}],
                miner: "0xabcdef1234567890abcdef1234567890abcdef12",
            },
            {
                number: "0x3",
                timestamp: "0x60db0c7c",
                transactions: [{}],
                miner: "0x7890abcdef1234567890abcdef1234567890abcd",
            },
        ];

        (useLatestBlocks as jest.Mock).mockReturnValue({
            data: blocks,
            isLoading: false,
            error: null,
        });

        render(<LatestBlocks />);

        // Ensure block data is rendered
        blocks.forEach((block) => {
            expect(screen.getByText(parseInt(block.number, 16).toString())).toBeInTheDocument();
            expect(screen.getByText(`${block.transactions.length} txs`)).toBeInTheDocument();
            expect(screen.getByText(addressShortFormat(block.miner))).toBeInTheDocument();
        });
    });
});
