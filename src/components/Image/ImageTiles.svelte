<script>
import Image from "./CloudinaryImage.svelte";
    export let files = [];

</script>

<style>

 .image-tiles {
     display: grid;
     grid-auto-flow:column;  
     gap: 5px;
     overflow-x: scroll;
     /* scroll-snap-type: x; */
     opacity: .9;
     overscroll-behavior: contain;
     overflow-y: hidden;
 }

</style>

<div class='image-tiles'>
    {#each files as filename}
        <Image {filename} />
    {/each}
</div>