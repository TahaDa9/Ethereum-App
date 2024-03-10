import { getLastBlockNumber, getUSDTBalance } from './ethereumInfo';

describe('Ethereum Functions', () => {
    test('Get Last Block Number', async () => {
        const blockNumber = await getLastBlockNumber();
        expect(blockNumber).toBeGreaterThanOrEqual(0);
    });

    test('Get USDT Balance', async () => {
        const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; 
        const balance = await getUSDTBalance(address);
        expect(parseFloat(balance)).toBeGreaterThanOrEqual(0);
    });
});