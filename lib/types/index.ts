export type TextSizeType =
    | "display1"
    | "display2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "button1"
    | "button2"
    | "button3"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "body6"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "subtitle4"
    | "caption1"
    | "caption2"
    | "caption3";

export interface GasPrices {
    SafeGasPrice: string;
    ProposeGasPrice: string;
    FastGasPrice: string;
}

export interface EthData {
    usd: number;
    usd_24h_change: number;
}

export interface GasPriceContextProps {
    gasPrices: GasPrices | undefined;
    ethData: EthData | undefined;
    isLoading: boolean;
    error: any;
    countdownGas: number;
}
