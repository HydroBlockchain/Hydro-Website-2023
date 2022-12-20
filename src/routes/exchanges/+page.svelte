<script>
    import Partners from "$lib/components/landing/partners.svelte";
    import Exchanges from "$lib/components/landing/exchanges.svelte";
    import Featured from "$lib/components/landing/featured.svelte";
</script>

<section>
    <div class="multiple-containers-alt">
        <Partners />
        <Exchanges />
    </div>
    <Featured />
    <div class="full" id="card-background">
        hello
    </div>
</section>

<style>
.full{
        height: var(--ch-mini);
    }
</style>
