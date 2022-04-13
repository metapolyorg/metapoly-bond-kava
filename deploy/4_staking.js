const { ethers, upgrades } = require("hardhat");
const { kava_testnet: parameters } = require("../parameters")

module.exports = async () => {
    const [deployer] = await ethers.getSigners();
    let Staking = await ethers.getContractFactory("Staking", deployer)
    let staking = await upgrades.deployProxy(Staking, [deployer.address, ethers.constants.AddressZero,
    parameters.USM.address, parameters.USM.mintLimit])
    await staking.deployed()

    console.log("staking Proxy", staking.address)

    console.log("deploying sD33D")
    let StakingToken = await ethers.getContractFactory("StakingToken", deployer)
    let stakingToken = await upgrades.deployProxy(StakingToken, ["Staking d33d", "sD33D", staking.address])
    await stakingToken.deployed()
    console.log("sD33D", stakingToken.address)

    console.log("deploying vD33D")
    let VD33D = await ethers.getContractFactory("VD33D", deployer)
    let vD33D = await upgrades.deployProxy(VD33D, ["Voting D33D", "vD33D", deployer.address])
    await vD33D.deployed()
    console.log("vD33D", vD33D.address)

    await vD33D.setAuthorised(staking.address, true)

    console.log('Deploying staking warmup')
    let StakingWarmup = await ethers.getContractFactory("StakingWarmup", deployer)
    let stakingWarmup = await upgrades.deployProxy(StakingWarmup, [deployer.address])
    await stakingWarmup.deployed()
    console.log("stakingWarmup Proxy: ", stakingWarmup.address)

    await staking.initialzeStaking(
        parameters.d33d.address, 
        stakingToken.address, 
        parameters.distributor.address, 
        stakingWarmup.address,
        parameters.distributor.epochLength, //length in seconds(8hrs)
        1, //firstEpochNumber 
        parameters.staking.firstEpochStartTimestamp, //startingTimestampOfFIrstEpoch
        addresses.address.DAO,
        addresses.USM.USMMinter,
        vD33D.address)
    await StakingWarmup.connect(deployer).addStakingContract(staking.address)

    let Distributor = await ethers.getContractAt("Distributor", parameters.distributor.address, deployer)
    await Distributor.connect(deployer).addRecipient(staking.address, stakingToken.address, parameters.staking.rewardRate)
};

module.exports.tags = ["oasis_deploy_staking"]

