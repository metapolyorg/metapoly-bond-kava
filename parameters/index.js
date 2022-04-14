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
            address: "0x33b6d418bB6eE6935C354bdd289b14dFd66372CA",
            epochLength: "28800",
            nextEpochTimestamp: "1744675227" //end of first epoch. (or startingTimeOfFirstEpoch + epochLength)
        },
        others: {
            router: "0x161EAD7347193e7eA44ea997efD92777E35C9320",
            factory: ""
        },
        staking: {
            address: "0x44294B24E72A9c5583E78dDbC99eE3afceE54438",
            firstEpochStartTimestamp: "1744603227",
            rewardRate: "1", //2 == 0.00002% 4 - decimals
            vD33D: "0x4EbaC3f7e0E17e427AB7add7460580328f56e448",
            sD33D:"0x49F0eC2d45DdF2065b7B7d7616d3Bff3912Eee5e",
            stakingWarmup: "0x07A4C1D9aabCeb621D88a1220617A26c9a18E902"
        },
        tokens: {
            usdc: "0x87a34bD8063609c397992DC015bb44173AE6C79b",
            D33DUSDC: "0x5071Ca34568EDc39Df6B5AFad5EAE7680c423Ed3",
            wKAVA: "0xED1432BfE5235019c6724c23628467D92F26cabb",
            wKAVAUSDC: "0x7d77e3907247c571A68562DAb2A9d906788F522B"
        },
        treasury: {
            address: "0x77F684099F8cab97F97c3fC5379751f730F15b2f",
            impl:"0xe99D35DC05cA3f8961c1425615F0776B157De1e6"
        },
        USM: {
            address: "0xDf5324ebe6F6b852Ff5cBf73627eE137e9075276",
            mintLimit: "5000", //maximum USM allowed to mint
            usmMinter: "0x8798B219755728095dfcD74189dfE1fc0bd86051"
        }
    }
}