require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const ROPSTEN_PRIVATE_KEY = "5d513fa58c805cb965ae097b344f147182b9702805014553dda1f90c3f56dde6";
const AlCHEMY_RINKEBY_KEY = "gnnXL5HOoh1vU-lQ4fFl5ZntYuu9xFam"
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // polygon testnet
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${AlCHEMY_RINKEBY_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`${ROPSTEN_PRIVATE_KEY}`] // your wallet private key
    },
      //polygon mainnet
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};