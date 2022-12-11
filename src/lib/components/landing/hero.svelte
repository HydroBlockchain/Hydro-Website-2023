<script>
import ecosystem from "$lib/images/ecosystem.svg";
</script>

<div class="full" id="animated-border">
    <div class="intro-hero">
        <img src={ecosystem} alt="ecosystem" id="intro-chain"/>
    </div>
</div>

<style>
.full {
    height: 25rem;
}

.intro-hero {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 1rem;
    justify-content: center;
}

#intro-chain {
    width: 800px;
}
</style>
