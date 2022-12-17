import { writable, readable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import { getCreateNetworkDataByChainId, getNetworkByChainId } from '../utils/network';
import { Web3Provider } from '@ethersproject/providers';

const localhostNetwork = {
	name: 'Localhost',
	chainId: 1337,
	nativeCurrency: {
		name: 'Ethereum',
		symbol: 'ETH',
		decimals: 18
	},
	rpc: ['http://localhost:8545/'],
	explorers: [{ url: 'http://localhost:8545/' }]
};

import type { WindowWithEthereum } from '../../types';
import type { Signer } from 'ethers';


const expectedChainIdEth = 1;

export const metamask = readable<boolean>(browser && window && (window as any).ethereum);
export const expectedNetworkEth = readable(

	expectedChainIdEth === localhostNetwork.chainId
		? localhostNetwork
		: getNetworkByChainId(expectedChainIdEth)
		
);
export const addressEth = writable<null | string>(null);
export const provider = writable<null | Web3Provider>(null);
export const signer = writable<null | Signer>(null);
export const errorTx = writable(false);
export const network = writable<null | any>({});
export const chainId = writable(-1);
export const onExpectedNetworkEth = derived([network], ([$network]: [any]) => {
	return $network && $network.chainId === expectedChainIdEth;
});

export async function initEth() {
	const windowWithEthereum = window as unknown as WindowWithEthereum;
	const { ethereum } = windowWithEthereum;

	const newProvider = new Web3Provider(ethereum, 'any');
	provider.set(newProvider);

	if (!newProvider) {
		return;
	}

	const newNetwork = await newProvider.getNetwork();

	network.set(newNetwork);
	chainId.set(newNetwork.chainId);

	const newSigner = await newProvider.getSigner();
	signer.set(newSigner);

	const [newAddress] = await ethereum.request({
		method: 'eth_accounts'
	});
	addressEth.set(newAddress);

	newProvider.on('chainChanged', () => {
		initEth();
	});

	ethereum.on('accountsChanged', ([newAddress]: string[]) => {
		addressEth.set(newAddress);
	});

	newProvider.on('accountsChanged', ([newAddress]) => {
		addressEth.set(newAddress);
	});

	newProvider.on('network', async (newNetwork) => {
		const currentNetwork = await get(network);
		if (!currentNetwork || currentNetwork.chainId !== newNetwork.chainId) {
			network.update(() => {
				return getNetworkByChainId(newNetwork.chainId);
			});
		}
	});
}

export async function login() {
	const windowWithEthereum = window as unknown as WindowWithEthereum;
	const { ethereum } = windowWithEthereum;

	try {
		await ethereum.enable();
	} catch (error) {
		console.error(error);
	}

	await initEth();
}

export async function switchNetworkEth(chainId: number = expectedChainIdEth) {
	const windowWithEthereum = window as unknown as WindowWithEthereum;
	const { ethereum } = windowWithEthereum;

	if (!ethereum) {
		throw new Error('asdas');
	}

	try {
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [
				{
					chainId: `0x${chainId.toString(16)}`
				}
			]
		});
	} catch (error: any) {
		// Missing network
		if (error.code === 4902) {
			await ethereum.request({
				method: 'wallet_addEthereumChain',
				params: [getCreateNetworkDataByChainId(chainId)]
			});
		} else {
			throw Error(error);
		}
	}
}

export async function connectEth() {
	const windowWithEthereum = window as unknown as WindowWithEthereum;
	const { ethereum } = windowWithEthereum;

	const [_address] = await ethereum.request({
		method: 'eth_requestAccounts'
	});

	addressEth.update(() => {
		return _address;
	});
}


