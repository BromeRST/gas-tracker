import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import GasPriceCard from "@/components/Card";

describe("GasPriceCard Component", () => {
    it("renders gas price information when not loading", async () => {
        render(<GasPriceCard label="Low" gweiPrice="50" usdPrice={0.12} colorClass="text-green-500" isLoading={false} />);

        const labelElement = await screen.findByText(/Low/i);
        const gweiPriceElement = await screen.findByText(/50 Gwei/i);
        const usdPriceElement = await screen.findByText(/\$0.12/i);

        expect(labelElement).toBeInTheDocument();
        expect(gweiPriceElement).toBeInTheDocument();
        expect(usdPriceElement).toBeInTheDocument();
    });

    it("displays skeleton loading state for Gwei when loading", async () => {
        render(<GasPriceCard label="Low" gweiPrice="50" usdPrice={0.12} colorClass="text-green-500" isLoading={true} />);

        const skeletonGweiElement = await screen.findByTestId("skeleton-gwei");
        expect(skeletonGweiElement).toBeInTheDocument();
    });

    it("displays skeleton loading state for USD when loading", async () => {
        render(<GasPriceCard label="Low" gweiPrice="50" usdPrice={0.12} colorClass="text-green-500" isLoading={true} />);

        const skeletonUsdElement = await screen.findByTestId("skeleton-usd");
        expect(skeletonUsdElement).toBeInTheDocument();
    });

    it("does not display skeleton loading state when not loading", async () => {
        render(<GasPriceCard label="Low" gweiPrice="50" usdPrice={0.12} colorClass="text-green-500" isLoading={false} />);

        const skeletonGweiElement = screen.queryByTestId("skeleton-gwei");
        const skeletonUsdElement = screen.queryByTestId("skeleton-usd");

        expect(skeletonGweiElement).toBeNull();
        expect(skeletonUsdElement).toBeNull();
    });
});
