<script>
// @ts-nocheck

import ConnectButton from '$lib/components/web3/ConnectButton.svelte';
import SwitchNetworkButton from '$lib/components/web3/SwitchNetworkButton.svelte';
import { onExpectedNetwork } from '$lib/stores/wallet';

import hydroDrop from "$lib/images/logo/hydro-drop.svg"
const tokenAddressEth = '0x946112efaB61C3636CBD52DE2E1392D7A75A6f01';
const tokenSymbolEth = 'Hydro';
const tokenDecimalsEth = 18;
const tokenImageEth = hydroDrop;
export const addHydroTokenEth = () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const wasAdded = ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', 
          options: {
            address: tokenAddressEth, 
            symbol: tokenSymbolEth, 
            decimals: tokenDecimalsEth, 
            image: tokenImageEth, 
          },
        },
      });
      if (wasAdded) {
        console.log('Adding Hydro Token!');
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

</script>
<div class="full" id="card-background">
    {#if $onExpectedNetwork}
    <ConnectButton/>
        <button on:click={addHydroTokenEth}>add token</button>
		{:else if !$onExpectedNetwork}
			<SwitchNetworkButton />
		{/if}
    </div>
<style>
.full{
    height: 10rem;
    flex-direction: row;
}
</style>