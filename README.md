# dapp-react-defi
Dapp developed with Solidity, React, Ganache and Truffle in Ethereum blockchain 

How to run?
--

1. Install dependencies

   `npm i package.json`

2. Compile and migrate Smart Contract

   `truffle migrate --reset --all`

3. Start server

   `npm start`

4. Open App in browser

   localhost:3000

5. Send StellartToken (By terminal).

   `truffle exec scripts/issue-token.js`
   
Deploy contracts in Binance Smart Chain Testnet (BSC)
--

1. Create file named ".secret" with secret key wallet in Root folder

2. Compile and migrate Smart Contract

   `truffle migrate --reset --network bsc`

Deploy contracts in Polygon Testnet (MATIC)
--
1. Create file named ".secret" with secret key wallet in Root folder

2. Compile and migrate Smart Contract

   `truffle migrate --reset --network polygon`

Testing
--
2. Testing Smart Contracts

   `truffle test`