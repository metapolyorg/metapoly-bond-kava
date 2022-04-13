const { ethers, upgrades } = require("hardhat");
module.exports = async () => {
    const [deployer] = await ethers.getSigners();
    let D33d = await ethers.getContractFactory("D33DImplementation", deployer)
    let d33d = await upgrades.deployProxy(D33d, ["MetaPoly", "D33D", ethers.utils.parseEther("100000000")])
    await d33d.deployed()
  
    console.log("D33D token Proxy: ", d33d.address)
  
  };
  
  
  
  module.exports.tags = ["kava_deploy_d33d"]