module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4700000
    },
    rinkeby: {
      host: 'localhost',
      port: 8545,
      network_id: 4,
      gas: 6000000
    },
    productionImportant: {
      host: 'localhost',
      port: 8545,
      network_id: 1,
      gas: 6000000
    }
  }
};
