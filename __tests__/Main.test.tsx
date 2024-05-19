import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GasPriceProvider } from "@/context/GasPriceContext";
import Main from "@/components/Main";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
    toast: {
        error: jest.fn(),
    },
    ToastContainer: () => <div data-testid="toast-container" />,
}));

const queryClient = new QueryClient();

describe("Main Component", () => {
    it("renders the Ethereum Gas Tracker header", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <GasPriceProvider>
                    <Main />
                </GasPriceProvider>
            </QueryClientProvider>
        );

        const headerElement = await screen.findByText(/Ethereum Gas Tracker ⛽/i);
        expect(headerElement).toBeInTheDocument();
    });

    it("displays loading state in GasPriceCard when data is loading", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <GasPriceProvider>
                    <Main />
                </GasPriceProvider>
            </QueryClientProvider>
        );

        const loadingGweiElements = await screen.findAllByTestId("skeleton-gwei");
        const loadingUsdElements = await screen.findAllByTestId("skeleton-usd");

        expect(loadingGweiElements.length).toBeGreaterThan(0);
        expect(loadingUsdElements.length).toBeGreaterThan(0);
    });
});
