require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    polygonMumbai: {
      url: `https://polygon-mumbai.infura.io/v3/2dbf3fc9f6144f9f9b01f5dc31249329`,
      accounts: [`32ad98ffb4935d4affdf3d3487d2909fc2a2a0a40032dc743489e05813da7e7c`]
    }
  },
  paths: {
    artifacts: './artifacts',

  },
};
