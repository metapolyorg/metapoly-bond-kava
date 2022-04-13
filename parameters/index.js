module.exports = {
    kava_testnet: {
        bond: {
            usdc: {
                address: "0x3CA30C15e018C2f376732580aA6D2E14DBe29ce2",
                impl: "0xc28035173F7150c6377506Daa5ad2EB310e06708",
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
            address: "0x6100A7455316442f136574f59dA607E8851c5cAE",
            impl:"0x9EEc037a4B3F189e8C2DdeED5e42c3D16A22f23f"
        },
        dao: "0xBE25bC1237EfC5D678C0d5883179C8147D19A1Aa",
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
            usdc: "0x87a34bD8063609c397992DC015bb44173AE6C79b",
            D33DUSDC: "",
            wROSE: ""
        },
        treasury: {
            address: "0x77F684099F8cab97F97c3fC5379751f730F15b2f",
            impl:"0xe99D35DC05cA3f8961c1425615F0776B157De1e6"
        },
        USM: {
            address: "",
            mintLimit: "5000" //maximum USM allowed to mint
        }
    }
}