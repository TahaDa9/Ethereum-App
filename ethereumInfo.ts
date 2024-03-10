import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/759e4fcbf9b7449f854586fb65f43184');

export async function getLastBlockNumber(): Promise<bigint> {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        return blockNumber;
    } catch (error) {
        console.error('Error fetching last block number:', error);
        throw error;
    }
}

export async function getUSDTBalance(address: string): Promise<string> {
    try {
        const usdtContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
        const usdtABI: any[] = [
            {
                "constant": true,
                "inputs": [{ "name": "_owner", "type": "address" }],
                "name": "balanceOf",
                "outputs": [{ "name": "balance", "type": "uint256" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];

        const usdtContract = new web3.eth.Contract(usdtABI, usdtContractAddress);
        const balance = await usdtContract.methods.balanceOf(address).call<string>();
        return web3.utils.fromWei(balance, 'ether');
    } catch (error) {
        console.error('Error fetching USDT balance:', error);
        throw error;
    }
}
