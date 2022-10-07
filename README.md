# Using Thirdweb to deploy Public Locks!

This project aims at making it easy for anyone to deploy Public Locks using Thirdweb's interfaces. 

To achieve this, we deployed a "proxy" contract that maps Thirdweb's `[IContractFactory](https://portal.thirdweb.com/contracts/IContractFactory)` factory with Unlock's factory contract.

# Deploying the factory contract

This should only be done once per network (and the Unlock team should probably do that for each network). We added a hardhat task for this.

You can replace `goerli` with your network name, as long as the network is in the `hardhat.config.js` file. You will also need to add an Etherscan (or similar) API key for verification purposes!

```shell
yarn hardhat run scripts/deploy.js --network goerli
```

# Releasing `PublicLock`

You need to do this from the Unlock Labs hardware wallet for the contract to appear [on this page with the previous releases](https://thirdweb.com/0xF5C28ce24Acf47849988f147d5C75787c0103534).

When deploying a new version of the PublicLock (or when adding support for a new network), we create "release" of the Public Lock contract (taken from [Unlock's contracts package](https://github.com/unlock-protocol/unlock/tree/master/packages/contracts)) using `npx thirdweb release`. When doing this, choose `⬡ PublicLock` in the list of contracts to create a release for.

On the release form, it is important to select the `Deployable via proxy` option and then enter the _implementation_ addresses for each of the networks supported. You can find these by querying the `publicLockAddress` on each Unlock contract (you can find the addresses of each [Unlock contract on this page](https://docs.unlock-protocol.com/core-protocol/unlock/networks)). Don't click the `Deploy` button next to the address field because the implementation has already been deployed.

In the next section, enter the factory contract's address from the step above (it might already be completed).

Finally, click on `Create Release`!

# Deploying through ThirdWeb

At this point, you can use the ThirdWeb UI to deploy new locks and interface with them!
