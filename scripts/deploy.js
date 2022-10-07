const { ethers, network, unlock } = require("hardhat");

async function main() {
  const [user] = await ethers.getSigners();
  const { chainId } = await user.provider.getNetwork()
  console.log(`Deploying from ${user.address} on ${chainId}`);

  const unlockContract = await unlock.getUnlockContract()
  let unlockAddress = unlockContract.address

  const ThirdWebUnlockFactory = await ethers.getContractFactory("ThirdWebUnlockFactory");
  const thirdWebUnlockFactory = await ThirdWebUnlockFactory.deploy(unlockAddress) // Unlock address!
  await thirdWebUnlockFactory.deployed() // Wait for it to be deployed!

  console.log(`Deployed at ${thirdWebUnlockFactory.address}`)

  console.log(`Waiting one minute to verify`);
  await new Promise(resolve => setTimeout(resolve, 1000 * 60));

  console.log(`Verification`);
  await hre.run("verify:verify", {
    address: thirdWebUnlockFactory.address,
    constructorArguments: [unlockAddress],
  });

  console.log(`Done!`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });