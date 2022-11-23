# Using Thirdweb to deploy Public Locks!

This project aims at making it easy for anyone to deploy Public Locks using Thirdweb's interfaces.

To achieve this, we deployed a "proxy" contract that maps Thirdweb's [`IContractFactory`](https://portal.thirdweb.com/contracts/IContractFactory) factory with Unlock's factory contract.

## Deploying the factory contract

This should only be done once per network (and the Unlock team should probably do that for each network). We added a hardhat task for this.

You can replace `goerli` with your network name, as long as the network is in the `hardhat.config.js` file. You will also need to add an Etherscan (or similar) API key for verification purposes!

```shell
yarn hardhat run scripts/deploy.js --network goerli
```

At this point (November 2022) the factory has been deployed to the following networks:

- Goerli `0xeb4c31752c2525438e5346732d7ae84c6e6e7892`
- Mainnet `0x8e0b46ec3b95c81355175693da0083b00fcc1326`
- Polygon `0x527baf993c7a3ee9e30e70f5db00648bc374e46a`
- Avalanche `0xe87efc02f26efe45171afdbec85d743fdb2eb1fb`
- Optimism `0xe87efc02f26efe45171afdbec85d743fdb2eb1fb`
- Arbitrum `0x88ed81de2d62849b337c3f31cd84d041bf26a38c`
- Binance `0xe87efc02f26efe45171afdbec85d743fdb2eb1fb`

## Releasing `PublicLock`

You need to do this from the Unlock Labs hardware wallet for the contract to appear [on this page with the previous releases](https://thirdweb.com/unlock-protocol.eth).

When deploying a new version of the PublicLock (or when adding support for a new network), we create "release" of the Public Lock contract (taken from [Unlock's contracts package](https://github.com/unlock-protocol/unlock/tree/master/packages/contracts)) using `npx thirdweb release`. When doing this, choose `⬡ PublicLock` in the list of contracts to create a release for.

On the release form, it is important to select the `Deployable via proxy` option and then enter the _implementation_ addresses for each of the networks supported. You can find these by querying the `publicLockAddress` on each Unlock contract (you can find the addresses of each [Unlock contract on this page](https://docs.unlock-protocol.com/core-protocol/unlock/networks)). Don't click the `Deploy` button next to the address field because the implementation has already been deployed.

In the next section, enter the factory contract's address from the step above (it might already be completed).

Finally, click on `Create Release`!

## Deploying through ThirdWeb

At this point, you can use the ThirdWeb UI to deploy new locks and interface with them! The locks you deploy there will also show up on the Unlock dashboard and can be managed using both interfaces!

For any lock that was **not** deployed through the ThirdWeb dashboard, you can also easily import them there, by constructing the following URL: `https://thirdweb.com/<chain name>/<lock address>/settings`.

You can also use ThirdWeb's SDK with the following: `sdk.getContract(address)`.
