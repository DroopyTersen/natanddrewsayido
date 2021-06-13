<script>
  import ImageTiles from "./Image/ImageTiles.svelte";
</script>

<div class="container small-container">
  <h3 class="first-header">We're getting married!</h3>
</div>
<div class="container">
  <ImageTiles
    files={[
      "engagement1.jpg",
      "engagement3.jpg",
      "engagement2.jpg",
      "engagement4.jpg",
      "glacier-mountains.jpg",
      "diving.jpg",
      "proposal.jpg",
      "iceland.jpg",
      "brads-wedding.jpg",
      "hammock2.jpg",
      "proposal2.jpg",
      "bryce.jpg",
      "iceland-hotspring.jpg",
      "sawtooths1.jpg",
      "tetons1.jpg",
      "badlands.jpg",
    ]}
  />
</div>

<style>
  h3 {
    --size: 2.8rem;
    /* text-align: center; */
    margin: 10rem 0 6rem 0;
    letter-spacing: 1.5px;
    font-size: var(--size);
  }
  .first-header {
    text-align: center;
  }
  .first-p {
    margin: 10rem 0;
  }
  img.camp {
    width: 100%;
    object-fit: cover;
    filter: grayscale(0.2);
    min-height: 100%;
    max-height: 100%;
    border-radius: 3px;
  }
  .help {
    color: var(--red);
    font-weight: bold;
  }
  .help-text {
    margin: 0 0 8rem;
  }
  @media (max-width: 640px) {
    /* h3 {
      --size: 2.rem;
      letter-spacing: 1px;
    } */
  }
</style>
