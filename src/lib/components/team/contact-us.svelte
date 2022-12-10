<script>
</script>

<div class="contactUs" id="animated-border">
    <div class="tagline">Contact Us</div>
</div>

    <style>
.contactUs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: var(--container-width-desktop);
    height: 15rem;
    border-radius: var(--border-radius);
    color: var(--text-color);
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    margin-bottom: 30px;
}

.contactUs:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px var(--card-background);
    filter: blur(10px);
    margin: -20px;
}

.tagline {
    font-size: 16px;
}
</style>
