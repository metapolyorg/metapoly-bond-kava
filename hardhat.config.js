require("@nomiclabs/hardhat-waffle")
require('@openzeppelin/hardhat-upgrades');
require('solidity-coverage')
require('hardhat-deploy')
require("hardhat-deploy-ethers")
require('hardhat-contract-sizer');
require("dotenv").config()

module.exports = {
    networks: {
        hardhat: {
            forking: {
                url: process.env.RPC_KAVA_TESTNET
            },
        },

        kavaTestnet: {
            url: process.env.RPC_KAVA_TESTNET,
            accounts: [`0x${process.env.PRIVATE_KEY_KAVA_TESTNET}`]
        }

        // local: {
        //     url: process.env.RPC_LOCAL,
        //     accounts: [`0x${process.env.PRIVATE_KEY_LOCAL}`]
        // }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.13",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
        ],
        settings: {
            outputSelection: {
              "*": {
                "*": ["storageLayout"]
              }
            }
          }
    },
    mocha: {
        timeout: 3000000
    }
};