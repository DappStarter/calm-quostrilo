require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom arena brave foot blanket response soccer mixture harvest gloom slot giggle'; 
let testAccounts = [
"0x7359ffa663f0013c84f791addb241813278461f0435f3f3f9a575754c7b47e32",
"0x922400cebcbe7bf321a3a1d0af5ab2276c8794ae507594816efb97909536217b",
"0x69d39dcf3ab7f3e2ebbf84a0083ec4cb9edd8968f69183d32ec401c63939f57a",
"0x177dfb3f5025cd6049bd6dadd409ef71e957ac4d27d114b4e7898950ad7ed556",
"0x089f53125ac7a02820a2b8481c08da403efb1f8b882d636cf9dee7081c528c88",
"0x76c54f7436e8f0faab93629c873a81a0997a4b9ff6bf16f6ea858b5796ef5494",
"0x31e37b4902984af64c11e22bc1b90fcc1fbefa4e3e09c76f460462524abf7a57",
"0xfa52b988bb14bb72420dfc779ab1c5ff5bce3cf46bcdb63d2d397bdea6c35c9f",
"0x048ebf74461c6307799ab107203ba44ce0773fe175570eb58b0f5b8d0d5ac777",
"0xf5185d0d77eaf752bc60d3bba384713a547ae2ed41ac9170e06131a5d6d44008"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

