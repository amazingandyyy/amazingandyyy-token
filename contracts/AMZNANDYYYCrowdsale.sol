pragma solidity ^0.4.13;

import './zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import './zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol';
import './AMZNANDYYY.sol';

contract AMAZINGANDYYYCrowdsale is CappedCrowdsale {

  function AMAZINGANDYYYCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet, uint256 _capped) 
    CappedCrowdsale(_capped) 
    Crowdsale(_startTime, _endTime, _rate, _wallet) { }
  
  // creates the token to be sold.
  // override this method to have crowdsale of a specific MintableToken token.
  function createTokenContract() internal returns (MintableToken) {
    return new AMZNANDYYY();
  }

}