pragma solidity ^0.4.17;

import './zeppelin-solidity/contracts/token/MintableToken.sol';

contract AMZNANDYYY is MintableToken {
  string public name = "Amazingandyyy Token Beta"; 
  string public symbol = "AMZNANDYYY";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 100000 * (10 ** decimals);

  function AMZNANDYYY() {
    totalSupply = INITIAL_SUPPLY;
  }
}
