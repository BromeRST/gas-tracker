# Ethereum Gas Tracker

## Overview

Ethereum Gas Tracker is a web application that allows users to monitor the current gas prices for Ethereum transactions. The app provides real-time data on gas prices in Gwei and their equivalent cost in USD. The data is fetched from the Etherscan and CoinGecko APIs.
The Gas price in Gwei is updated every 10 seconds, while the ETH price is updated every 90 seconds to ensure that the information is up-to-date and at the same time, the app is not making too many requests to the APIs.

## Features

-   **Real-time Gas Prices**: Displays the current Safe, Propose, and Fast gas prices in Gwei.
-   **USD Conversion**: Shows the equivalent cost of gas prices in USD.
-   **ETH Price Tracker**: Displays the current price of Ethereum and its 24-hour change.
-   **Responsive Design**: The app is fully responsive and works on all device sizes.

## Getting Started

### Prerequisites

-   Node.js (version 14 or later)
-   npm or yarn

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/ethereum-gas-tracker.git
    cd ethereum-gas-tracker
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn
    ```

### Environment Variables

To run the app locally, you need to set up environment variables. Create a .env.local file in the root directory and add the following:

```bash
ETHERSCAN_API_KEY=your_local_etherscan_api_key
```

### Running Locally

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

```bash
npm run build
```

or

```bash
yarn build
```

To start the production server:

```bash
npm start
```

or

```bash
yarn start
```

### Testing

To run the tests:

```bash
npm test
```

or

```bash
yarn test
```
