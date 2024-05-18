"use client";

import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { GasPriceProvider } from "@/context/GasPriceContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <GasPriceProvider>
                <Navbar />
                <Main />
            </GasPriceProvider>
        </QueryClientProvider>
    );
}
