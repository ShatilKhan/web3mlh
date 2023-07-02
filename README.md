## BlockTrade


<img width="100%" alt="BlockTradeLogo" src="https://github.com/Emmarie-Ahtunan/web3mlh/assets/86572370/2c02d684-a8df-4a44-a668-ca65227b0a7b">


set up:
- follow instructions in .env.example file to create an env file
- in command line terminal:
    - npm install
    - npm run build
    - npm start

## Inspiration

We were inspired by the MLH Web3Apps hackathon to take our first learning journey into the world of Web3, Blockchain, smart contracts and wallets ... To take our first peek under the hood of Web3 Infrastructure and see what we could build!

## What it does  (what we want it to do)

BlockTrade leverages the power of blockchain technology to provide a decentralized platform that allows individuals to trade fungible assets directly, without intermediaries. Through the use of smart contracts, BlockTrade ensures trustless and tamper-proof transactions.

With BlockTrade, users can access a wide range of fungible assets, including cryptocurrencies, tokens, and digital assets, all within a user-friendly interface. The platform offers a comprehensive suite of trading tools and features, empowering users to execute trades with ease and confidence.

BlockTrade enables lightning-fast transaction settlements, ensuring that users can capitalize on opportunities instantly. **The platform prioritizes security,** employing robust encryption protocols and multi-factor authentication to safeguard user funds and personal information.

## How we built it

We installed the Hedera Hashgraph SDK and built an environment on the Hedera TestNet network. Following the tutorials in the Hedera documentation, we were able to create new accounts, create smart contracts, and transfer hbar. 

We used ethers/ethereum to connect a Masknet wallet to both the Ethereum Mainnet and Hedera Testnet wallets via the JSON-RPC Hashio API. Connecting a users Masknet wallet to the Hedera Testnet wallet gave us access to the HASH SCAN dashboard where we could see the activity happening on the Hedera network in real time (learning opportunity).

We used Solidity to create a contract for our trading platform as well as a counter, and converted the Solidity code to bytecode.js so it could be utilized in Hedera.

We used React.js to build the Trading Pages of our app and included images of the fungible trades. 


## Challenges we ran into

We ran into many challenges as we simultaneously worked to understand Web3 dApps and deploy our project as we initially intended. 

## Accomplishments that we're proud of

## What we learned

## What's next for BlockTrade
