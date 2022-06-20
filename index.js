
let contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"flipSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"structIERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"structIERC721A.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMizukiTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMintComplete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
let contract_addr = '0xb38C6A0E4B449F01D64F67aF5d6044bfdB1D7D8b';

let Web3Modal;
let provider;
let web3, web3Modal, userAddress, accounts;
let providerOptions;
let wallet;
let isConnected = false;
let mintCount = 0;

function print(text) { 
    //modify this to display errors, one possible tool is to use Sweet Alerts
    console.log(text)
};

async function connectWallet() {
    if (window.ethereum) {
        if(isConnected == false){
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            Web3Modal = window.Web3Modal.default;

            providerOptions = {
            /* See Provider Options Section */
            };
        
            web3Modal = new Web3Modal({
            network: "mainnet", // optional
            cacheProvider: true, // optional
            providerOptions // required
            });
        
            provider = await web3Modal.connect();

            if (accounts.length > 0) {
                wallet = accounts[0];

                const button = document.querySelector('#connectButton');
                button.innerText = wallet.substring(0, 5) + "..." + wallet.substring(39);

                isConnected = true;
                setInterval('updateMintCounter()', 1000);
                enableMintButton();
            }
        }
    }
}

async function updateMintCounter(){
    if(isConnected){
        web3 = new Web3(provider);
        const contract = new web3.eth.Contract(contract_abi, contract_addr);
        var counterElem = document.getElementById('mintCounter');

        mintCount = await contract.methods.totalSupply().call();

        counterElem.innerText = mintCount + "/888";
        
        if (mintCount == 888) {
            disableMintButton();
        }

    };
};

function enableMintButton() {
    const button = document.querySelector('#mintButton');
    button.disabled = false;
}

function disableMintButton() {
    const button = document.querySelector('#mintButton');
    button.disabled = true;
}

async function mint(){

	var count = 1; //number of mints

    if(isConnected == true && count > 0){
        web3 = new Web3(provider);
		var amount = "0";

        const contract = new web3.eth.Contract(contract_abi, contract_addr);
		
        contract.methods.mint(count).estimateGas({from: wallet})
        .then(function(gasAmount){
            contract.options.gas = gasAmount;
            contract.methods.mint(count).send(
                {
                    from: wallet,
                    maxPriorityFeePerGas: null,
                    maxFeePerGas: null,
                }
            ).on('transactionHash', function(hash){
                //on success
                url = "https://etherscan.io/tx/" + hash
                print('success: ' + url);
            })
        })
        .catch(function(error, result){
            //on on-chain fail
            print('fail: ' + ((error.message).split('{')[0]).split(':')[1])
        });
    }

	if(count <= 0){
        //on attempt to mint 0
        print('fail: ' + 'Attempted amount of mints should be greater than 0!');
	}
};