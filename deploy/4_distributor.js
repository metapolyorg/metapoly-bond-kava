const { ethers, upgrades } = require("hardhat");
const { kava_testnet: parameters } = require("../parameters")
module.exports = async () => {
    const [deployer] = await ethers.getSigners();
    let Distributor = await ethers.getContractFactory("Distributor", deployer)
    //end of first epoch time
    let distributor = await upgrades.deployProxy(Distributor, [
        parameters.d33d.address, parameters.treasury.address, parameters.distributor.epochLength, 
        parameters.distributor.nextEpochTimestamp, deployer.address])
    await distributor.deployed()

    let Treasury = await ethers.getContractAt("Treasury", parameters.treasury.address, deployer)
    await Treasury.connect(deployer).toggle("7", distributor.address, ethers.constants.AddressZero)

    console.log("Distributor Proxy: ", distributor.address)

};

module.exports.tags = ["kava_deploy_distributor"]
