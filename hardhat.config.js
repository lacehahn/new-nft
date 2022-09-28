/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17", 
  defaultNetwork: "ropsten",
  networks: {
     hardhat: {},
     ropsten: {
        url: process.env.API_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
     }
  },
};
