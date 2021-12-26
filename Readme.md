## NFT Collection Template 🖼️

| Feature | Supported |
|----------|------------ |
| MIT License | ✔ |
| Customizable Smart Contract | ✔ |
| Clean and adaptable frontend | ✔ |
| Truffle | ✔ |
| OpenZeppelin Libraries | ✔ |

## How to use 📝

1. Install the dependencies: `npm install --save-dev truffle dotenv @truffle/hdwallet-provider @openzeppelin/contracts`
3. Edit `./contracts/MyNFTCollection.sol`
4. Create a `.env` and put your private key and RPC url following the `.env.example` example
5. `truffle deploy --network rinkeby`
6. Copy `./bruild/MyNFTCollection.json` to `./client/contracts/MyNFTCollection.json`
7. Deploy the `./client` directory to a public frontend server
8. Install `npm install -D truffle-plugin-verify`
9. Verify contract `truffle run verify MyNFTCollection --network rinkeby`