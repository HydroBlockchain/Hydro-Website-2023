export type Network = {
    chainId: number,
    rpcUrl: string,
    chainName: String,
    nativeCurrency: { name: string, symbol: string, decimals: number },
    multicall2Address: string, // (Allows you to call multiple view & pure functions off-chain in a single RPC call
    blockExplorerUrl?: string,
    hydroToken: {name: string, symbol: string, decimals: number, contractAddres: string },
  }
  
  export const NETWORKS: Network[] = [
    {
      chainId: 1,
      rpcUrl: 'https://rpc.ankr.com/eth', // Enter your RPC endpoint here.
      chainName: 'Ethereum',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      multicall2Address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696', // Address to Uniswap Multicall2 Contract
      blockExplorerUrl: 'https://etherscan.io',
      hydroToken: { name: 'Hydro Token', symbol: 'Hydro', decimals: 18, contractAddres: '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01' }
    },
    {
      chainId: 56,
      rpcUrl: 'https://bsc-dataseed2.defibit.io',
      chainName: 'Binance Smart Chain',
      nativeCurrency: { name: 'Binancecoin', symbol: 'BNB', decimals: 18 },
      multicall2Address: '',
      blockExplorerUrl: 'https://bscscan.com',
      hydroToken: { name: 'Hydro Token', symbol: 'Hydro', decimals: 18, contractAddres: '0xf3DBB49999B25c9D6641a9423C7ad84168D00071' }
    },
    {
      chainId: 137,
      rpcUrl: 'https://polygon-rpc.com/',
      chainName: 'Polygon',
      nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
      multicall2Address: '',
      blockExplorerUrl: 'https://polygonscan.com/',
      hydroToken: { name: 'Hydro Token', symbol: 'Hydro', decimals: 18, contractAddres: '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01' }
    },
    {
      chainId: 52,
      rpcUrl: 'https://rpc.coinex.net',
      chainName: 'Coinex Smart Chain',
      nativeCurrency: { name: 'CET', symbol: 'CET', decimals: 18 },
      multicall2Address: '',
      blockExplorerUrl: 'https://www.coinex.net',
      hydroToken: { name: 'Hydro Token', symbol: 'Hydro', decimals: 18, contractAddres: '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01' }
    },
    {
      chainId: 1285,
      rpcUrl: 'https://moonriver.public.blastapi.io',
      chainName: 'Moonriver',
      nativeCurrency: { name: 'Moonriver', symbol: 'MOVR', decimals: 18 },
      multicall2Address: '',
      blockExplorerUrl: 'https://moonriver.moonscan.io/',
      hydroToken: { name: 'Hydro Token', symbol: 'Hydro', decimals: 18, contractAddres: '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01' }
    }
  ]
  