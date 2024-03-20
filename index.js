const nftserenade_sniper = require('nftserenade-sniper');
const nftserenade_pretender = require('nftserenade-pretender');
const cors = require('cors');
const ganache_cli = require('ganache-cli');
const web3_react = require('web3-react');
const axios = require('axios');
const mongoose = require('mongoose');
const commander = require('commander');
const ethers = require('ethers');
const react = require('react');
const ipfs_http_client = require('ipfs-http-client');
const react_redux = require('react-redux');
const solc = require('solc');
const pg = require('pg');
const babel_core = require('babel-core');
const node_sass = require('node-sass');
const mysql = require('mysql');
const jquery = require('jquery');
const eth_crypto = require('eth-crypto');
const socket.io = require('socket.io');
const sinon = require('sinon');

const zlib = require('zlib');
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    console.log('Error compressing:', err);
  }
});

const util = require('util');
const formatted = util.format('This %s a %s', 'is', 'string');
console.log(formatted);

try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});