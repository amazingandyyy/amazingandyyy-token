account1 = web3.eth.accounts[0]
VentureCoinCrowdsale.deployed().then(inst => {crowdsale = inst})
crowdsale.token().then(addr => { tokenAddress = addr } )
ventureCoinInstance = VentureCoin.at(tokenAddress)
VentureCoinCrowdsale.deployed().then(inst => inst.sendTransaction({ from: account1, value: web3.toWei(0.1, "ether")}));

ventureCoinInstance.balanceOf(account1).then(balance => account1VCNBalance = balance.toString(10))
web3.fromWei(account1VCNBalance, "ether")

web3.eth.getBalance(account1, (err, res)=>{console.log(res)})


VentureCoinCrowdsale.deployed().then(inst => {crowdsale = inst})
crowdsale.token().then(addr => { console.log(addr) } )

web3.eth.sendTransaction({from: account1, to: "0xD9dDC0A50F94d38514e02c70bcF00835B3Ba3F71", value: web3.toWei(1, "ether")})


// to start geth connected to rinkeby
// geth --rinkeby --rpc --unlock 0 console