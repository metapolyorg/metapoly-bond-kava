const { ethers, upgrades } = require("hardhat");
const {kava_testnet: addresses} = require("../parameters")

module.exports = async () => {
    const [deployer] = await ethers.getSigners();
    const USMFac = await ethers.getContractFactory("USM", deployer)
    const USM = await upgrades.deployProxy(USMFac)
    await USM.addWhiltelist(deployer.address)
    console.log("USM token Proxy: ", USM.address)

    console.log("deploying USM Minter")
    const USMMinterFac = await ethers.getContractFactory("USMMinter", deployer)

    const USMMinter = await upgrades.deployProxy(USMMinterFac, [
        USM.address, // _USM
        ethers.constants.AddressZero, // _dvd
        addresses.d33d.address, // _d33d
        addresses.tokens.wKAVA, // _weth
        addresses.tokens.usdc, // _usdc
        addresses.others.router, // _dvdRouter
        addresses.others.router, // _d33dRouter
        ethers.constants.AddressZero // _biconomyForwarder
    ])

    await USM.setMinter(USMMinter.address)

    console.log("USMMinter Proxy: ", USMMinter.address)


};



module.exports.tags = ["kava_deploy_usm"]