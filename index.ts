import { getLastBlockNumber, getUSDTBalance } from './ethereumInfo';

async function main() {
    try {
        const blockNumber = await getLastBlockNumber();
        console.log('Last Block Number:', blockNumber);

        const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
        const balance = await getUSDTBalance(address);
        console.log('USDT Balance:', balance);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
