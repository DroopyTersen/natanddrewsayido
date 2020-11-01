<script>
    export let filename = "";
    export let height = 400;
    export let alt = "Natalie and Drew";
    $: thumbnail = `https://res.cloudinary.com/droopytersen/image/upload/c_scale,h_${height},q_auto:good/v1604188401/natanddrewsayido/us/${filename}`;
    $: full = `https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good/v1604188401/natanddrewsayido/us/${filename}`
</script>

<style>
    .image-tile {
        scroll-snap-align: center;

    }
    .image-tile img {
        border-radius: 3px;
        overflow:hidden;
        box-shadow: 1px 1px 6px rgba(0,0,0,.15);
        max-width: initial;
        max-height: 100%;
        height: 200px;
    }
</style>

<div class='image-tile'>
    <a href={full} target="_blank">
        <img loading="lazy" {alt} src={thumbnail}>
    </a>
</div>
<!-- {#if showFullscreen}
    <div class='fullscreen'>
        <button class='close-button' on:click={() => showFullscreen = false}>Close</button>
        <img loading='lazy' {alt} src={`https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good/v1604188401/natanddrewsayido/us/${filename}`}>
    </div>
{/if} -->