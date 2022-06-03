require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember minor inflict kiwi outer sweet'; 
let testAccounts = [
"0x995426ece78562304327ecf2b78e0c6eb0f964d184d05f561b47ead2e4424a37",
"0xb402c555d8b9b4b48618d99dfa518cba89afe0f68f38b16ae8e0fbb9caa11d2b",
"0x9a07c1607fd7fc73f3501f1c09c5d32baf518355ead838b060504fc5e9bdbc64",
"0x1793e760b78be4498b09ea9fa25f58f1ae0a5bb88e0ad2cb43ff468ab85a01cf",
"0xd2ed582366e768cb2c4f2cc73b057269bdb8c0b4a56955362224d95d1d6b276c",
"0xeb3a9628a3ce31d163af1af7e9ee23e6d984a4a6c4600c6ab4b4fb16600bcffb",
"0x76785c625c378838ae70bf65d6fca7fd58e2ae03aa27063162772370a4a0a287",
"0xf6acbaa6ccf4adc05623b19f7ac85a7e765585a61bc23d3e908d734d78221afa",
"0x29ec70973a9e1000dc8f1f91c9d7a3ae5f19a1da589acb98940a72b416891b55",
"0xf2efaeb85d01afaad902a5e3bc5d6ed5008c3133a4087cacac3ce764fe648018"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

