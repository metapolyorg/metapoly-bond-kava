const { ethers, upgrades} = require("hardhat");
const {kava_testnet: addresses} = require("../parameters")

module.exports = async () => {
    const [deployer] = await ethers.getSigners();
    let Treasury = await ethers.getContractFactory("Treasury", deployer)
    let treasury = await upgrades.deployProxy(Treasury, [addresses.d33d.address, addresses.tokens.usdc,
      ethers.utils.parseUnits("1", "17") //0.1 USD per d33d
    ])
    await treasury.deployed()

    let D33D = await ethers.getContractAt("D33DImplementation", addresses.d33d.address, deployer)
    await D33D.setTreasury(treasury.address)
    await D33D.unlock()

    console.log("Treasury Proxy: ", treasury.address)

  };
  
  
  
  module.exports.tags = ["kava_deploy_treasury"]