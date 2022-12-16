<script>
// @ts-nocheck
import { onMount } from 'svelte';
import { defaultEvmStores as evm, selectedAccount, chainId } from 'svelte-web3'
onMount( evm.setProvider )
</script>

<div class="full" id="card-background">account: {$selectedAccount} / chainId: {$chainId}</div>

<style>
.full {
    height: 5rem;
    color: #fff;
    text-align: center;
}
</style>
