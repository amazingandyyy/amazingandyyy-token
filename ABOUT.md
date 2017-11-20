# vcn-erc20-prototype
VentureCoin prototype, ERC20 compliance with openZeppelin.

## frameworks and versions
- node v8.5.0
- zeppelin-solidity v1.3.0 -> customized it as zeppelin-solidity package
- solidity v0.4.13
- truffle v3.4.11

# Usage
## Step 1: download truffle and testrpc globally
```
npm i -g truffle ethereumjs-testrpc
```

## Step 2: run testrpc and unclock coinbase account
```
testrpc -u 0
```

## Step 3: New command line session and deploy contract to testrpc
```
npm i
npm run migrate
```
now the VCN ico contract is deployed to localhost:8545, and you should see message as belowing:
```
Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x04e44bb03d08a7f8db0f1c59184d2ccaa3753fa7fce385d158d9cc9f8438bf70
  Migrations: 0x165fe9df5dc96d6b93737b76333fab67e6639363
Saving successful migration to network...
  ... 0x3482ad7bc25d0aa69c87cfb978955667ed07e85c94bceaab46760b9cd8a0d27c
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying VentureCoinCrowdsale...
  ... 0x62b9da601a4576a25b8fab1ebae85b4e8070eb547b6555d3d6a7287284dd50ac
  VentureCoinCrowdsale: 0x3cb86548e387d0eb9dd8f0193b7ff73a32cfd5c4
-----> VentureCoin(VCN) Address 0x08834042cd3afb4c43190dec421cda51363af793
Saving successful migration to network...
  ... 0xc868aa9b7f6efa82d8868c090fa051613a1c37cc037465a82e63266f236c9d83
Saving artifacts...
```
- you will have `VentureCoinCrowdsale Address: 0x3cb86548e387d0eb9dd8f0193b7ff73a32cfd5c4`
- you will have `VentureCoin(VCN) Address 0x08834042cd3afb4c43190dec421cda51363af793`

## Step4: (potional)You may want to save the ABI file
- go to build/contracts/VentureCoinCrowdsale
- you will see ABI and binary file

## Interact with this crowdsale with this [daap](http://github.com/venturedinternational/ico-daap)


## Author
- Ventured Core Team
