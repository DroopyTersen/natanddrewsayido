<script>
  import Image from "./CloudinaryImage.svelte";
  export let files = [];
</script>

<style>
  .image-tiles {
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
    overflow-x: scroll;
    /* scroll-snap-type: x; */
    opacity: 0.9;
    overflow-y: hidden;
  }
</style>

<div class="image-tiles">
  {#each files as filename}
    <Image {filename} />
  {/each}
</div>
