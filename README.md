# METAPOLY - KAVA

## contract Addresses


| Contracts | Proxy Address                                                                                                       | Implementation Address
| ----- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| D33D Proxy  | [0x6100A7455316442f136574f59dA607E8851c5cAE](https://explorer.evm-alpha.kava.io/address/0x6100A7455316442f136574f59dA607E8851c5cAE/transactions) | [0x9EEc037a4B3F189e8C2DdeED5e42c3D16A22f23f](https://explorer.evm-alpha.kava.io/address/0x9EEc037a4B3F189e8C2DdeED5e42c3D16A22f23f/transactions)  |

### Testnet Tokens (Testnet)

| Token | Testnet Address
| ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| Mock USDC  |  [0x87a34bD8063609c397992DC015bb44173AE6C79b](https://explorer.evm-alpha.kava.io/address/0x87a34bD8063609c397992DC015bb44173AE6C79b/transactions) |
| Mock wKAVA  |  [0xED1432BfE5235019c6724c23628467D92F26cabb](https://explorer.evm-alpha.kava.io/address/0xED1432BfE5235019c6724c23628467D92F26cabb/transactions) |
| Mock D33D-USDC pair  |  [0x5071Ca34568EDc39Df6B5AFad5EAE7680c423Ed3](https://explorer.evm-alpha.kava.io/address/0x5071Ca34568EDc39Df6B5AFad5EAE7680c423Ed3/transactions) |
| Mock wKAVA-USDC pair  |  [0x7d77e3907247c571A68562DAb2A9d906788F522B](https://explorer.evm-alpha.kava.io/address/0x7d77e3907247c571A68562DAb2A9d906788F522B/transactions) |
| Mock wKAVA-D33D pair  |  [0xd56b93c926fA03ac2AbA14Cb93830515A6948d8D](https://explorer.evm-alpha.kava.io/address/0xd56b93c926fA03ac2AbA14Cb93830515A6948d8D/transactions) |
| Mock wKAVA-USM pair  |  [0xa0B3edC864Ed5a836b2E57873236C8F31c2552cC](https://explorer.evm-alpha.kava.io/address/0xa0B3edC864Ed5a836b2E57873236C8F31c2552cC/transactions) |

### Bonds
Bonds sell d33d token in exhange for the below mentioned assets. Users can get D33D token for a discount from the market price.
D33D bought from bonds are vested linearly (5 days).

| Contracts | Proxy Address                                                                                                       | Implementation Address
| ----- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| USDC BOND   | [0x3CA30C15e018C2f376732580aA6D2E14DBe29ce2](https://explorer.evm-alpha.kava.io/address/0x3CA30C15e018C2f376732580aA6D2E14DBe29ce2/transactions) |  [0xc28035173F7150c6377506Daa5ad2EB310e06708](https://explorer.evm-alpha.kava.io/address/0xc28035173F7150c6377506Daa5ad2EB310e06708/transactions) |
| kava BOND   | [0xa6C88ca60DCA276ab59596E7715cf91663cdC294](https://explorer.evm-alpha.kava.io/address/0xa6C88ca60DCA276ab59596E7715cf91663cdC294/transactions) |  [0xc28035173F7150c6377506Daa5ad2EB310e06708](https://explorer.evm-alpha.kava.io/address/0xc28035173F7150c6377506Daa5ad2EB310e06708/transactions) |

#### Bond Calculators
Bond calculators are used by the bonds and treasury to get the price of the assets used for bonding. 
| Contracts | Proxy Address                                                                                                       | Implementation Address
| ----- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| KAVA BondCalc   | [0xc69261C38b6d66424fAE61543aa558833D375324](https://explorer.evm-alpha.kava.io/address/0xc69261C38b6d66424fAE61543aa558833D375324/transactions) |  [0xfAA3A841222dE704b99089497ac66882D94110Be](https://explorer.evm-alpha.kava.io/address/0xfAA3A841222dE704b99089497ac66882D94110Be/transactions) |
### Staking
Staking accepts d33d from the user. The user receives USM as staking rewards. Staking contracts receives D33D as rewards from treasury, which is burned to mint USM.

 User receives vD33D(Voting D33D) after staking the D33D. vD33D is burned when d33d is unstaked.
| Contracts | Proxy Address | Implementation Address
| ----- | --------------- | ---------------|
| Staking  |  [0x44294B24E72A9c5583E78dDbC99eE3afceE54438](https://explorer.evm-alpha.kava.io/address/0x44294B24E72A9c5583E78dDbC99eE3afceE54438/transactions) | [0x057305Eb5B8bb21eFdb7AfaCB383CB366514A999](https://explorer.evm-alpha.kava.io/address/0x057305Eb5B8bb21eFdb7AfaCB383CB366514A999/transactions) |
| Staking Token (sD33D) |  [0x49F0eC2d45DdF2065b7B7d7616d3Bff3912Eee5e](https://explorer.evm-alpha.kava.io/address/0x49F0eC2d45DdF2065b7B7d7616d3Bff3912Eee5e/transactions) | [0x7516912142aa4a262c51BB1761101525293C4D82](https://explorer.evm-alpha.kava.io/address/0x7516912142aa4a262c51BB1761101525293C4D82/transactions) |
| Staking  Warmup |  [0x07A4C1D9aabCeb621D88a1220617A26c9a18E902](https://explorer.evm-alpha.kava.io/address/0x07A4C1D9aabCeb621D88a1220617A26c9a18E902/transactions) | [0x5F76DF5532cbE55fA968590F4dbD0401D879bd5B](https://explorer.evm-alpha.kava.io/address/0x5F76DF5532cbE55fA968590F4dbD0401D879bd5B/transactions) |
| vD33D  |  [0x4EbaC3f7e0E17e427AB7add7460580328f56e448](https://explorer.evm-alpha.kava.io/address/0x4EbaC3f7e0E17e427AB7add7460580328f56e448/transactions) | [0x388bF94a2798894c89d74f5B47b494a96212aE53](https://explorer.evm-alpha.kava.io/address/0x388bF94a2798894c89d74f5B47b494a96212aE53/transactions) |

### Protocol
### Treasury
Treasury holds all the assets from bonds. Treasury mints the d33d, while ensuring the minted d33d is backed by treasury funds. 

| Contract | Proxy Address                                                                                                       | Implementation Address
| ----- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Treasury  |  [0x77F684099F8cab97F97c3fC5379751f730F15b2f](https://explorer.evm-alpha.kava.io/address/0x77F684099F8cab97F97c3fC5379751f730F15b2f/transactions) | [0xe99D35DC05cA3f8961c1425615F0776B157De1e6](https://explorer.evm-alpha.kava.io/address/0xe99D35DC05cA3f8961c1425615F0776B157De1e6/transactions) |

### Distributor
Distributor mints the staking rewards(d33d) from treasury and distributes them to the staking contracts.
| Contract | Proxy Address | Implementation Address
| ----- | ----------| --------- |
| Distributor | [0x33b6d418bB6eE6935C354bdd289b14dFd66372CA](https://explorer.evm-alpha.kava.io/address/0x33b6d418bB6eE6935C354bdd289b14dFd66372CA/transactions) | [0x054b19e27A131CC11Ba0185B3C36067a379c3C74](https://explorer.evm-alpha.kava.io/address/0x054b19e27A131CC11Ba0185B3C36067a379c3C74/transactions) |
### USM
USM
| Contract | Proxy Address | Implementation Address
| ----- | ---------------- | ----------------------|
| USM | [0xDf5324ebe6F6b852Ff5cBf73627eE137e9075276](https://explorer.evm-alpha.kava.io/address/0xDf5324ebe6F6b852Ff5cBf73627eE137e9075276/transactions) | [0xEa6cFeAcD4c7f29bD56b0d42083e12f0430cd2D3](https://explorer.evm-alpha.kava.io/address/0xEa6cFeAcD4c7f29bD56b0d42083e12f0430cd2D3/transactions) |
| USM Minter | [0x8798B219755728095dfcD74189dfE1fc0bd86051](https://explorer.evm-alpha.kava.io/address/0x8798B219755728095dfcD74189dfE1fc0bd86051/transactions) | [0x9dB81A0FB5c3C6Cb23ab1b0098E1848705715F7B](https://explorer.evm-alpha.kava.io/address/0x9dB81A0FB5c3C6Cb23ab1b0098E1848705715F7B/transactions) |
