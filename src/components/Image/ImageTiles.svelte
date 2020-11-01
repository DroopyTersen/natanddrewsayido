<script>
import Image from "./CloudinaryImage.svelte";
    export let files = [];
    var touchable = 'ontouchstart' in window ||
        window.DocumentTouch && document instanceof window.DocumentTouch ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
</script>

<style>

 .image-tiles {
     display: grid;
     grid-auto-flow:column;  
     gap: 5px;
     overflow-x: scroll;
     scroll-snap-type: x;
 }

</style>

<div class='image-tiles' class:touchable>
    {#each files as filename}
        <Image {filename} />
    {/each}
</div>