module.exports = {
    kava_testnet: {
        bond: {
            usdc: {
                address: "",
                BCV: "600",
                vestingTerm: "432000",
                minimumPrice: "0.8" //minimum bond price
            },
            d33dusdc: {
                address: "",
                BCV: "600",
                vestingTerm: "432000",
                minimumPrice: "0.000000455", //minimum bond price
                calc: {
                    address: "",
                    markdownPerc: "5000",
                }
            },
            rose: {
                address: "",
                BCV: "600",
                vestingTerm: "432000",
                minimumPrice: "0.000303", //minimum bond price
                calc: {
                    address: "",
                    markdownPerc: "5000",
                }
            },
        },
        d33d: {
            address: "0x6100A7455316442f136574f59dA607E8851c5cAE"
        },
        dao: "",
        distributor: {
            address: "",
            epochLength: "",
            nextEpochTimestamp: "" //end of first epoch. (or startingTimeOfFirstEpoch + epochLength)
        },
        others: {
            router: "",
            factory: ""
        },
        staking: {
            address: "",
            firstEpochStartTimestamp: "",
            rewardRate: "" //2 == 0.00002% 4 - decimals
        },
        tokens: {
            usdc: "",
            D33DUSDC: "",
            wROSE: ""
        },
        treasury: {
            address: ""
        },
        USM: {
            address: "",
            mintLimit: "5000" //maximum USM allowed to mint
        }
    }
}