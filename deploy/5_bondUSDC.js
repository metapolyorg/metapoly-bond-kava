const { ethers, upgrades } = require("hardhat");
const { kava_testnet: parameters } = require("../parameters")

module.exports = async () => {
    const [deployer] = await ethers.getSigners();
    let BondContract = await ethers.getContractFactory("BondContract", deployer)
    let bondContract = await upgrades.deployProxy(BondContract, [
        parameters.d33d.address, //d33d
        parameters.tokens.usdc, //principle
        parameters.treasury.address, //treasury
        parameters.dao, //dao
        ethers.constants.AddressZero, // _bondCalculator
        parameters.staking.address, //staking
        deployer.address, //admin
        ethers.constants.AddressZero])//biconomy

    await bondContract.deployed()

    await bondContract.initializeBondTerms(
        parameters.bond.usdc.BCV, // _controlVariable
        parameters.bond.usdc.vestingTerm,//28800,// _vestingTerm in seconds
        ethers.utils.parseEther(parameters.bond.usdc.minimumPrice), // _minimumPrice
        500000000000000, // _maxPayout //3 dcimals // % of totalSupply in 1 tx
        0, // _fee
        "600000000000000000000000000", // _maxDebt
        "0"//_initialDebt
    )

    let Treasury = await ethers.getContractAt("Treasury", parameters.treasury.address, deployer)
    await Treasury.connect(deployer).toggle(0, bondContract.address, ethers.constants.AddressZero)

    console.log("USDC BOND Proxy: ", bondContract.address)

};



module.exports.tags = ["oasis_deploy_usdcBond"]