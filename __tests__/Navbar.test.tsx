import React from "react";
import { render, screen } from "@testing-library/react";
import { useGasPrice } from "@/context/GasPriceContext";
import Navbar from "@/components/Navbar";

jest.mock("@/context/GasPriceContext");

const mockUseGasPrice = useGasPrice as jest.Mock;

describe("Navbar Component", () => {
    beforeEach(() => {
        mockUseGasPrice.mockReset();
    });

    it("renders loading state", () => {
        mockUseGasPrice.mockReturnValue({
            ethData: null,
            isLoading: true,
            error: null,
        });

        render(<Navbar />);

        screen.debug(); // Log the DOM structure for debugging

        const titleElement = screen.getByText(/Gas Tracker/i);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders error state", () => {
        mockUseGasPrice.mockReturnValue({
            ethData: null,
            isLoading: false,
            error: new Error("Failed to fetch data"),
        });

        render(<Navbar />);

        screen.debug(); // Log the DOM structure for debugging

        const titleElement = screen.getByText(/Gas Tracker/i);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders with ETH data", () => {
        mockUseGasPrice.mockReturnValue({
            ethData: { usd: 2000.55, usd_24h_change: 5.23 },
            isLoading: false,
            error: null,
        });

        render(<Navbar />);

        screen.debug(); // Log the DOM structure for debugging

        const titleElement = screen.getByText(/Gas Tracker/i);
        const ethPriceElement = screen.getByText((content, element) => {
            return element?.textContent === "ETH Price: $2000.55";
        });
        const ethChangeElement = screen.getByText((content, element) => {
            return element?.textContent === "(5.23%)";
        });

        expect(titleElement).toBeInTheDocument();
        expect(ethPriceElement).toBeInTheDocument();
        expect(ethChangeElement).toBeInTheDocument();
    });

    it("renders with negative ETH change", () => {
        mockUseGasPrice.mockReturnValue({
            ethData: { usd: 2000.55, usd_24h_change: -2.47 },
            isLoading: false,
            error: null,
        });

        render(<Navbar />);

        screen.debug(); // Log the DOM structure for debugging

        const titleElement = screen.getByText(/Gas Tracker/i);
        const ethPriceElement = screen.getByText((content, element) => {
            return element?.textContent === "ETH Price: $2000.55";
        });
        const ethChangeElement = screen.getByText((content, element) => {
            return element?.textContent === "(-2.47%)";
        });

        expect(titleElement).toBeInTheDocument();
        expect(ethPriceElement).toBeInTheDocument();
        expect(ethChangeElement).toBeInTheDocument();
    });
});
