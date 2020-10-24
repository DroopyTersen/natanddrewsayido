<script>
  import BigDate from "./BigDate.svelte";
  import SaveOurDate from "./SaveOurDate.svelte";
  import Signature from "./Signature.svelte";
</script>

<style>
  .save-the-date {
    flex-direction: column;
    background: var(--transparentTaupe);
    padding: 8rem 2rem;
    position: relative;
  }
  .background-shadow {
    object-fit: cover;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    opacity: 0.75;
    height: 100%;
  }

  .location {
    font: 2rem var(--fancyFont);
    color: var(--greyPurple);
    font-size: 1.8rem;
    position: absolute;
    bottom: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 700px) {
    .save-the-date {
      padding: 5rem 2rem;
    }
    .location {
      font-size: 1.5rem;
    letter-spacing: 2px;
    }
  }
  @media (max-width: 500px) {
    .location {
      font-size: 1.2rem;
      margin-top: 0;
    }
  }
</style>

<div class="center save-the-date">
  <img
    src="/images/shadow.jpg"
    class="background-shadow"
    alt="background shadow" />
  <SaveOurDate />
  <Signature />
  <BigDate />

  <div class="location">Ketchum, ID</div>
</div>
