const { ethers} = require("hardhat");
module.exports = async () => {
    const [deployer] = await ethers.getSigners();

    const USDCFac = await ethers.getContractFactory("TestERC20", deployer)
    const USDC = await USDCFac.deploy("USDC", "USDC", "6")

    console.log("USDC token: ", USDC.address)
  
  };
  
  
  
  module.exports.tags = ["kava_deploy_usdc"]