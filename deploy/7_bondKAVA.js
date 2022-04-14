const { ethers, upgrades } = require("hardhat");
const { kava_testnet: parameters } = require("../parameters")

module.exports = async () => {
    const [deployer] = await ethers.getSigners();
    const bondCalcFac = await ethers.getContractFactory("BondCalcKAVA", deployer)
    const bondCalc = await upgrades.deployProxy(bondCalcFac, [
        parameters.bond.kava.calc.markdownPerc, // markdownPerc_
        parameters.others.router,//router
        parameters.tokens.wKAVA,//kava
        parameters.tokens.usdc//usdc
    ])

    let BondContract = await ethers.getContractFactory("BondContract", deployer)
    let bondContract = await upgrades.deployProxy(BondContract, [
        parameters.d33d.address, //d33d
        parameters.tokens.wKAVA, //principle
        parameters.treasury.address, //treasury
        parameters.dao, //dao
        bondCalc.address, // _bondCalculator
        parameters.staking.address, //staking
        deployer.address, //admin
        ethers.constants.AddressZero])//biconomy

    await bondContract.deployed()

    await bondContract.initializeBondTerms(
        parameters.bond.kava.BCV, // _controlVariable
        parameters.bond.kava.vestingTerm,//28800,// _vestingTerm in seconds
        ethers.utils.parseEther(parameters.bond.kava.minimumPrice), // _minimumPrice
        500000000000000, // _maxPayout //3 dcimals // % of totalSupply in 1 tx
        0, // _fee
        "600000000000000000000000000", // _maxDebt
        "0"//_initialDebt
    )

    let treasury = await ethers.getContractAt("Treasury", parameters.treasury.address, deployer)
    // Whitelist Bond contract
    await treasury.toggle(
        4, // _managing
        bondContract.address, // _address
        bondCalc.address // _calculator
    )

    // Whitelist WETH
    await treasury.toggle(
        5, // _managing
        parameters.tokens.wKAVA, // _address
        bondCalc.address // _calculator
    )

    await treasury.updateD33DPrice(ethers.utils.parseEther("0.1"))

    console.log("KAVA BOND Proxy: ", bondContract.address)

};



module.exports.tags = ["kava_deploy_kavaBond"]