require("@unlock-protocol/hardhat-plugin");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      gas: 1000000000,
      allowUnlimitedContractSize: true,
      blockGasLimit: 1000000000,
    },
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: []
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: []
    },
    xdai: {
      url: `https://rpc.gnosischain.com`,
      accounts: []
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/6idtzGwDtRbzil3s6QbYHr2Q_WBfn100`,
      accounts: []
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: []
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
      accounts: []
    },
    goerli: {
      url: `https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [process.env.PKEY]
    }
  },
  etherscan: {
    apiKey: {
      polygon: 'W9TVEYKW2CDTQ94T3A2V93IX6U3IHQN5Y3',
      goerli: 'HPSH1KQDPJTNAPU3335G931SC6Y3ZYK3BF',
      mainnet: 'HPSH1KQDPJTNAPU3335G931SC6Y3ZYK3BF',
      rinkeby: 'HPSH1KQDPJTNAPU3335G931SC6Y3ZYK3BF',
      bsc: '6YUDRP3TFPQNRGGZQNYAEI1UI17NK96XGK',
      xdai: 'api-key',
      optimisticEthereum: 'V51DWC44XURIGPP49X85VZQGH1DCBAW5EC',
    }
  },
};
