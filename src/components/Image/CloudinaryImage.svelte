<script>
    export let filename = "";
    export let height = 200;
    export let alt = "Natalie and Drew"
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
    }
</style>

<div class='image-tile'>
    <img loading="lazy" {alt} src={`https://res.cloudinary.com/droopytersen/image/upload/c_scale,h_${height},q_auto:good/v1604188401/natanddrewsayido/us/${filename}`}>
</div>