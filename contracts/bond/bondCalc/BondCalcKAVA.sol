//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


interface IRouter {
    function getAmountsOut(uint256 amountIn,address[] memory path) external
        view returns (uint256[] memory amounts);
}

contract BondCalcKAVA is Initializable, OwnableUpgradeable {

    address public KAVA;
    address public USDC;
    address public factory;
    IRouter public router;
    uint public markdownPerc; // 2 decimals 5000 for 50%

    function initialize(
        uint markdownPerc_,
        IRouter _router,
        address _KAVA,
        address _USDC
    ) external initializer{
        __Ownable_init();
        
        KAVA = _KAVA;
        USDC = _USDC;
        markdownPerc = markdownPerc_;
        router = _router;
    }

    function changeMarkdownPerc(uint newPerc_) external onlyOwner {
        markdownPerc = newPerc_;
    }

    ///@return ETH price in USDC (6 decimals)
    function getKAVAPrice() private view returns (uint) {
        return router.getAmountsOut(1e18, getPath(KAVA, USDC))[1];
    }

    function getPath(address tokenIn, address tokenOut) private pure returns (address[] memory path) {
        path = new address[](2);
        path[0] = tokenIn;
        path[1] = tokenOut;
    }

    ///@return _value MarkdownPrice in usd (18 decimals)
    function valuation( address, uint amount_ ) external view returns ( uint _value ) {
        return amount_ * getKAVAPrice() * markdownPerc / 1e10;
    }

    ///@return Price of 1 KAVA in USD (18 decimals)
    function getRawPrice() external view returns (uint) {
        return getKAVAPrice();
    }
}
