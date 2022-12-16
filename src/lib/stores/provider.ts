export const ssr = false;
import { derived, get, writable } from 'svelte/store';
import { BigNumber, constants, providers } from 'ethers';
// @ts-ignore
import { browser } from '$app/environment';
import { NETWORKS } from '$lib/config';
const base64image = 'data:image/png;base64, ... ';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/ethereum-provider';
export const networkProviders: { [chainId: string]: providers.JsonRpcProvider } = NETWORKS.reduce((networks, network) => {
  return { ...networks, [network.chainId]: new providers.JsonRpcProvider(network.rpcUrl) }
}, {});

export const selectedNetworkIndex = writable<number>(0);

export const accountProvider = writable(undefined);
export const accountChainId = writable({ chainId: NETWORKS[get(selectedNetworkIndex)].chainId, supportedNetwork: true });
export const connected = derived(accountProvider, ($accountProvider) => $accountProvider ? true : false);
export const walletAddress = writable(constants.AddressZero);

let disconnectListener, accountsChangedListener, chainChangedListener;


// Connect With injected wallet and WalletConnect

export const connectMetamask = () => new Promise((resolve, reject) => {
  if (!window['ethereum']) reject('No injected provider found');
  else {
    try {
      window['ethereum'].request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          accountProvider.update(provider => {
            if (provider) {
              get(accountProvider).removeListener('accountsChanged', accountsChangedListener);
              get(accountProvider).removeListener('chainChanged', chainChangedListener);
              get(accountProvider).removeListener('disconnect', disconnectListener);
            }
            return window['ethereum'];
          })
          sessionStorage.setItem('connectType', 'metamask');
          disconnectListener = () => {
            get(accountProvider).removeListener('accountsChanged', accountsChangedListener);
            get(accountProvider).removeListener('chainChanged', chainChangedListener);
            get(accountProvider).removeListener('disconnect', disconnectListener);
            accountProvider.set(undefined);
            walletAddress.set(constants.AddressZero);
          }
          get(accountProvider).on('disconnect', disconnectListener);
          const chainId = BigNumber.from(get(accountProvider).chainId).toNumber();
          const supportedNetwork: boolean = NETWORKS.filter(network => network.chainId === chainId).length > 0;
          if (supportedNetwork) selectedNetworkIndex.set(NETWORKS.findIndex(network => network.chainId === chainId));
          accountChainId.set({ chainId, supportedNetwork });
          walletAddress.set(accounts[0]);
          accountsChangedListener = (accounts: string[]) => {
            if (accounts.length > 0) walletAddress.set(accounts[0]);
            else {
              walletAddress.set(constants.AddressZero);
              accountProvider.set(undefined);
            }
          }
          get(accountProvider).on('accountsChanged', accountsChangedListener);
          chainChangedListener = (chainIdHex: string) => {
            const chainId = BigNumber.from(chainIdHex).toNumber();
            const supportedNetwork: boolean = NETWORKS.filter(network => network.chainId === chainId).length > 0;
            if (supportedNetwork) selectedNetworkIndex.set(NETWORKS.findIndex(network => network.chainId === chainId));
            accountChainId.set({ chainId, supportedNetwork });
          }
          get(accountProvider).on('chainChanged', chainChangedListener);
        }
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  }
});

export const connectWalletConnect = () => new Promise(async (resolve, reject) => {
    try {
      const providerInstance = new WalletConnectProvider({ rpc: NETWORKS.reduce((networks, network) => ({ ...networks, [network.chainId]: network.rpcUrl }), {}) });
      providerInstance.request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          accountProvider.update(provider => {
            if (provider) {
              get(accountProvider).removeListener('accountsChanged', accountsChangedListener);
              get(accountProvider).removeListener('chainChanged', chainChangedListener);
              get(accountProvider).removeListener('disconnect', disconnectListener);
            }
            return providerInstance;
          })
          sessionStorage.setItem('connectType', 'walletconnect');
          disconnectListener = () => {
            get(accountProvider).removeListener('accountsChanged', accountsChangedListener);
            get(accountProvider).removeListener('chainChanged', chainChangedListener);
            get(accountProvider).removeListener('disconnect', disconnectListener);
            accountProvider.set(undefined);
            walletAddress.set(constants.AddressZero);
          }
          get(accountProvider).on('disconnect', disconnectListener);
          const chainId = BigNumber.from(get(accountProvider).chainId).toNumber();
          const supportedNetwork: boolean = NETWORKS.filter(network => network.chainId === chainId).length > 0;
          if (supportedNetwork) selectedNetworkIndex.set(NETWORKS.findIndex(network => network.chainId === chainId));
          accountChainId.set({ chainId, supportedNetwork });
          walletAddress.set(accounts[0]);
          accountsChangedListener = (accounts: string[]) => {
            if (accounts.length > 0) walletAddress.set(accounts[0]);
            else {
              walletAddress.set(constants.AddressZero);
              accountProvider.set(undefined);
            }
          }
          get(accountProvider).on('accountsChanged', accountsChangedListener);
          chainChangedListener = (chainIdHex: string) => {
            const chainId = BigNumber.from(chainIdHex).toNumber();
            const supportedNetwork: boolean = NETWORKS.filter(network => network.chainId === chainId).length > 0;
            if (supportedNetwork) selectedNetworkIndex.set(NETWORKS.findIndex(network => network.chainId === chainId));
            accountChainId.set({ chainId, supportedNetwork });
          }
          get(accountProvider).on('chainChanged', chainChangedListener);
        }
      });
      resolve(true);
    } catch (error) {
      reject(error)
    }
  });

// Disconnect And Store connection between reloads

if (browser && JSON.parse(sessionStorage.getItem('connected'))) {
  if (sessionStorage.getItem('connectType') === 'metamask') {
    if (window['ethereum'].selectedAddress) connectMetamask();
  }
  if (sessionStorage.getItem('connectType') === 'walletconnect') {
    const providerInstance = new WalletConnectProvider({ rpc: NETWORKS.reduce((networks, network) => ({ ...networks, [network.chainId]: network.rpcUrl }), {}) });
    if (providerInstance.connected) connectWalletConnect();
  }
}

connected.subscribe((value) => {
  if (browser) sessionStorage.setItem('connected', JSON.stringify(value));
})

export const disconnect = () => {
  if (get(accountProvider)) {
    get(accountProvider).removeListener('accountsChanged', accountsChangedListener);
    get(accountProvider).removeListener('chainChanged', chainChangedListener);
    get(accountProvider).removeListener('disconnect', disconnectListener);
    accountProvider.set(undefined);
    walletAddress.set(constants.AddressZero);
  }
}
import hydroDrop from "$lib/images/logo/hydro-drop.svg"
const tokenAddressEth = '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01';
const tokenSymbolEth = 'Hydro';
const tokenDecimalsEth = 18;
const tokenImageEth = hydroDrop;

export const addHydroTokenEth = () => {

  if (get(accountProvider)) {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddressEth, // The address that the token is at.
            symbol: tokenSymbolEth, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimalsEth, // The number of decimals in the token
            image: tokenImageEth, // A string url of the token logo
          },
        },
      });
    
      if (wasAdded) {
        alert('hydro was added');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const tokenAddressBsc = '0xf3DBB49999B25c9D6641a9423C7ad84168D00071';
const tokenSymbolBsc = 'Hydro';
const tokenDecimalsBsc = 18;
const tokenImageBsc = hydroDrop;

export const addHydroTokenBSC = () => {
  if (get(accountProvider)) {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddressBsc, // The address that the token is at.
            symbol: tokenSymbolBsc, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimalsBsc, // The number of decimals in the token
            image: tokenImageBsc, // A string url of the token logo
          },
        },
      });
    
      if (wasAdded) {
        alert('hydro was added');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }
}


