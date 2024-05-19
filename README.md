# Ethereum Gas Tracker

## Overview

Ethereum Gas Tracker is a web application that provides real-time tracking of Ethereum gas prices and the latest blocks mined on the Ethereum blockchain. The app displays the gas prices in different tiers (Low, Average, High) along with their respective costs in USD, as well as information about the latest 3 blocks mined, including the block number, time since it was mined, the number of transactions in the block, and the miner address.

## Features

-   **Real-Time Gas Prices**: Track the Ethereum gas prices for Low, Average, and High tiers.
-   **Transaction Cost**: Display the transaction cost in USD for each gas price tier.
-   **Latest Blocks**: View information about the latest 3 blocks mined, including:
    -   Block number
    -   Time since the block was mined
    -   Number of transactions in the block
    -   Miner address with a link to Etherscan

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
