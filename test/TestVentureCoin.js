var VentureCoinCrowdsale = artifacts.require('./VentureCoinCrowdsale.sol');
var VentureCoin = artifacts.require('./VentureCoin.sol');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

contract('VentureCoin:CheckBalance', function(accounts) {
  it("should return 0 balance", async function() {
    var coinbase = accounts[0];
    var VCNCrowdsale = await VentureCoinCrowdsale.deployed();
    var VCNAddress = await VCNCrowdsale.token();
    var ventureCoinInstance = VentureCoin.at(VCNAddress);
    console.log('VCNAddress', VCNAddress);
    console.log('coinbase', coinbase);
    // var balance = await ventureCoinInstance.balanceOf.call(coinbase);
    // console.log(`balance of ${coinbase}-->`, balance.toString(10));
    // var balances = await ventureCoinInstance.getBalances().call();
    // console.log('balances-->', balances);
  });

  // it("should return some VCN balance", async function() {
  //   var coinbase = accounts[0];
  //   var VCNCrowdsale = await VentureCoinCrowdsale.deployed();
  //   var VCNAddress = await VCNCrowdsale.token();
  //   var ventureCoinInstance = VentureCoin.at(VCNAddress);
  //   const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

  //   var amount = web3.utils.toWei(1, "ether");
  //   VCNCrowdsale.sendTransaction({ from: coinbase, value: amount});
  //   var balance = await ventureCoinInstance.balanceOf(coinbase);
  //   console.log('balance-->', balance.toString(10));
  // });
});


// Deploying VentureCoinCrowdsale...
// ... 0xae35d60a194fe2459679c87463da73beaf00dd6471ce74a74f30765e35dcbd05
// VentureCoinCrowdsale: 0x24c811ad64f67151562e59cb6cdee2b58d3b7d9d
// -----> VentureCoin(VCN) Address 0x5e4686150b1a3a21b19ca56141d41746c6ce5ca9
// -----> startTime:   1510731484
// -----> endTime:     1513323484
// -----> rate:        8000
// -----> wallet:      0x70f23b7a70cd58085fd601003cdee1f0c1ae567f
// -----> cappedInWei: 125000000000000000000000
// Saving successful migration to network...
// ... 0xe121f0dce6e99b0d339e9b524ade52f