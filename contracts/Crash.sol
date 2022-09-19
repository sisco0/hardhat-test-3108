// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Crash {
  uint public x = 1;

  function f(uint index) public {
    x = x << index;
  }
}