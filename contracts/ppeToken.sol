// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.9.3/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.9.3/access/Ownable.sol";

contract Playplayearn is ERC20, Ownable {
    constructor() ERC20("playplayearn", "PPE") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
